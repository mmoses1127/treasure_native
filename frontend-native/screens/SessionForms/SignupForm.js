import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { signup, clearSessionErrors, updateUserImage } from '../../store/session';
import UploadImages from '../AWSTest/ImageUploader';
import Footer from '../NavBar/Footer';
import { useHistory } from 'react-router-dom';
import { getCurrentUser } from '../../store/session';

function SignupForm () {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [imageFile, setImageFile] = useState('');
  const history = useHistory()
  const errors = useSelector(state => state.errors.session);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(clearSessionErrors());
    };
  }, [dispatch]);

  const updateImage = async (e) => {
    setImageFile(e.target.files[0])
  };


  const update = field => {
    let setState;

    switch (field) {
      case 'email':
        setState = setEmail;
        break;
      case 'username':
        setState = setUsername;
        break;
      case 'password':
        setState = setPassword;
        break;
      case 'password2':
        setState = setPassword2;
        break;
      default:
        throw Error('Unknown field in Signup Form');
    }
    return e => setState(e.currentTarget.value);
  }

  const usernameSubmit = async e => {
    e.preventDefault();

    if (imageFile) {
      const allowedExtensions = /(\.jpg|\.jpeg|\.png)$/i;
      if (!allowedExtensions.exec(imageFile.name)) {
        alert('Invalid file type, please upload a .jpeg, .jpg, or .png');
        return;
      }
    }

    const formData = new FormData();
    formData.append("images", imageFile);

    const user = {
      email,
      username,
      password
    };

    dispatch(signup(user))
    .then((newUser) => {
      if (newUser.currentUser) {
        dispatch(updateUserImage(newUser.currentUser._id, formData) )
        setTimeout(function(){
          history.push('./profile')
        }, 1000);
      }
    })
  }

  return (
    <View className='signup_page'>
      <View className='session_wrapper flex-col justify-center align-center'>
      <Text className='text-center'>Sign Up</Text>
        <View className='session_content flex-row align-center'>
          <View className="session-form flex-col" 
            onSubmit={usernameSubmit} encType="multipart/form-data">
              <Text>Email</Text>
              <TextInput type="email"
                value={email}
                onChange={update('email')}
                placeholder="Email"
              />
            <View className="errors">{errors?.email}</View>
              <Text>Username</Text>
              <TextInput type="text"
                value={username}
                onChange={update('username')}
                placeholder="Username"
              />
            <View className="errors">{errors?.username}</View>
              <Text>Password</Text>
              <TextInput type="password"
                value={password}
                onChange={update('password')}
                placeholder="Password"
              />
            <View className="errors">{errors?.password}</View>
              <Text>Confirm Password</Text>
              <TextInput type="password"
                value={password2}
                onChange={update('password2')}
                placeholder="Confirm Password"
              />
            <View className="errors">
              {password !== password2 && 'Confirm Password field must match'}
            </View>
            <TextInput type="file" onChange={updateImage} multiple />
            <TextInput
              type="submit"
              id='file2'
              value="Sign Up"
              accept=".jpg, .jpeg, .png"
              disabled={!email || !username || !password || password !== password2}
            />
          </View>
          
        </View>
      </View>
      <Footer />
    </View>
  );
}

export default SignupForm;


