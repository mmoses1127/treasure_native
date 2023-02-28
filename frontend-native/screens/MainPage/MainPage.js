// import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { login, clearSessionErrors } from '../../store/session';
// import Button from 'react-bootstrap/Button';
// import Footer from '../NavBar/Footer';
// import ManMap from './ManMapImg';
// import './MainPage.scss';
import {View, Button, Text, Pressable} from 'react-native';

function MainPage({navigation}) {

  const dispatch = useDispatch();
  const loggedIn = useSelector(state => !!state.session.user);
  const demoLogin = ()=> {
    console.log('demo login')
    dispatch(login({email: 'demo@user.io', password: 'password'}));
    navigation.push('DemoLobby');
  }

  const splashButtons = () => {
    if (loggedIn) {
      return (
        <View className='hero_button flex-row justify-start'>
          <Pressable className='demo-btn' onPress={demoLogin}> <Text>DEMO</Text></Pressable>
        </View>
      )
      
    } else {
      return (
        <View className='hero_button flex-row justify-start'>
          <Pressable className='border-btn' onPress={()=>navigation.push('Signup')}> 
            <Text>Sign up</Text>
          </Pressable>
          <Pressable className='border-btn' onPress={()=>navigation.push('Login')}>
            <Text>Log in</Text>
          </Pressable>
          <Pressable className='demo-btn' onPress={demoLogin}>
            <Text>DEMO</Text>
          </Pressable>
        </View>
      )
    }
  }

  return (
    <View className='main_page'>
      <View className='hero_wrapper'>
        <View className='hero flex-row justify-center align-center'>
          <View className='hero_title flex-col justify-center'>
            <Text>Create and organize your own scavenger hunt event.</Text>
            <Text>Create, invite guests, and track the status of your hunts &#8212; all in one app.</Text>
            {splashButtons()}
          </View>
          {/* <ManMap /> */}
        </View>
      </View>
      {/* <Footer /> */}
    </View>
  );
}
  
  export default MainPage;