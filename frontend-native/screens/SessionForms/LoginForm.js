
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login, clearSessionErrors } from '../../store/session';
import { Pressable, Text, View, TextInput } from 'react-native';


function LoginForm ({navigation}) {
  const dispatch = useDispatch();
  const errors = useSelector(state => state.errors.session);


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState('');

  useEffect(() => {
    return () => {
      dispatch(clearSessionErrors());
    };
  }, [dispatch]);

  const update = (field, text) => {
    const setState = field === 'email' ? setEmail : setPassword;
    return e => setState(text);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
    navigation.push('Events');
  }

  return (
    <View className='login_page'>
      <View className='session_wrapper login flex-col justify-center'>
        <Text className='text-center'>Log In</Text>
        <View className='session_content flex-row justify-center align-center'>
          <View className="session-form flex-col" > 
            <View className="errors">
              <Text>{errors?.email}</Text> 
              </View>
              <Text>Email</Text>
              <TextInput 
                autoCapitalize={'none'} 
                onChangeText={text => update('email', text)}
                placeholder="Email"
              />
            <View className="errors">
              <Text>{errors?.password}</Text>
              </View>
              <Text>Password</Text>
              <TextInput 
                secureTextEntry={true}
                autoCapitalize={'none'} 
                onChangeText={text => update('password', text)}
                placeholder="Password"
              />
            <Pressable onPress={handleSubmit}>
              <Text>Login!</Text>
            </Pressable>
          </View>
          <View className='border'></View>
          <View className='create_account_wrapper'>
            <Text>New to Treasure?</Text>
            <Pressable onPress={()=>navigation.push('Signup')}>
              <Text>Create an account</Text>
            </Pressable>
        </View>
        </View>
      </View>
      {/* <Footer /> */}

    </View>
  );
}

export default LoginForm;