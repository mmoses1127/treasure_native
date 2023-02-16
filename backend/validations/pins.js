const { check } = require("express-validator");
const handleValidationErrors = require('./handleValidationErrors');

// validateTweetInput is a combination Express middleware that uses the `check`
// middleware to validate the keys in the body of a request to create/edit
// a tweet
const validatePinInput = [
  check('location')
    .exists({ checkFalsy: true })
    .isLength(2)
    .withMessage('Location must have two values'),
  check('task')
    .isLength({ max: 1000 })
    .withMessage('Instructions must be less than 1000 characters'),
  check('supplies')
    .isLength({ max: 500 })
    .withMessage('Supplies must be less than 500 characters'),
  check('order')
    .exists({ checkFalsy: true })
    .withMessage('Pin must have an order'),
  check('directionToPin')
    .isLength({ min: 0, max: 500 })
    .exists({ checkFalsy: true })
    .withMessage('Directions must be less than 500 characters'),
  handleValidationErrors
];


module.exports = validatePinInput;