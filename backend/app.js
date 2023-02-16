
const express = require('express');
// const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');


const cors = require('cors');
const { isProduction } = require('./config/keys');
const csurf = require('csurf');
const debug = require('debug');

require('./models/User');
require('./models/Event')
require('./models/Pin')
require('./models/Subscription')

require('./config/passport'); // <-- ADD THIS LINE
const passport = require('passport');

// const indexRouter = require('./routes/index');
const usersRouter = require('./routes/api/users');
const eventsRouter = require('./routes/api/events')
const pinsRouter = require('./routes/api/pins')
const subscriptionsRouter = require('./routes/api/subscriptions')
const csrfRouter = require('./routes/api/csrf');


const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

app.use(passport.initialize());

// Serve static React build files statically in production

if (!isProduction) {
  // Enable CORS only in development because React will be on the React
  // development server (http://localhost:3000). (In production, the Express 
  // server will serve the React files statically.)
  app.use(cors());
}

// ...
app.use(
    csurf({
      cookie: {
        secure: isProduction,
        sameSite: isProduction && "Lax",
        httpOnly: true
      }
    })
  );

// app.use('/', indexRouter);
app.use('/api/users', usersRouter);
app.use('/api/events', eventsRouter);
app.use('/api/pins', pinsRouter);
app.use('/api/subscriptions', subscriptionsRouter);
app.use('/api/csrf', csrfRouter);

if (isProduction) {
  const path = require('path');
  // Serve the frontend's index.html file at the root route
  app.get('/', (req, res) => {
    res.cookie('CSRF-TOKEN', req.csrfToken());
    res.sendFile(
      path.resolve(__dirname, '../frontend', 'build', 'index.html')
    );
  });

  // Serve the static assets in the frontend's build folder
  app.use(express.static(path.resolve("../frontend/build")));

  // Serve the frontend's index.html file at all other routes NOT starting with /api
  app.get(/^(?!\/?api).*/, (req, res) => {
    res.cookie('CSRF-TOKEN', req.csrfToken());
    res.sendFile(
      path.resolve(__dirname, '../frontend', 'build', 'index.html')
    );
  });
}
app.use((req, res, next) => {
  const err = new Error('Not Found');
    err.statusCode = 404;
    next(err);
  });

const serverErrorLogger = debug('backend:error');

app.use((err, req, res, next) => {
    serverErrorLogger(err);
    const statusCode = err.statusCode || 500;
    res.status(statusCode);
    res.json({
      message: err.message,
      statusCode,
      errors: err.errors
    })
  });

module.exports = app;
