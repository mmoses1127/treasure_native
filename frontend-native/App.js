import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import { NativeRouter, Routes, Route, Redirect } from 'react-router-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import configureStore from './store/store';
import { Provider } from 'react-redux';
import MainPage from './screens/MainPage/MainPage';
import DemoLobby from './screens/DemoLobby/DemoLobby';
import OnlineGameMap from './screens/Maps/NativeOnlineMaps/DummyOnlineGameMap';
import LoginForm from './screens/SessionForms/LoginForm';
import SignupForm from './screens/SessionForms/SignupForm';
import EventIndex from './screens/Events/EventIndex';

export default function App() {
  const store = configureStore();
  const Stack = createNativeStackNavigator();
  return (
  <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName='MainPage'>
      <Stack.Screen name="MainPage" component={MainPage} />
      <Stack.Screen name="DemoLobby" component={DemoLobby} />
      <Stack.Screen name="OnlineGame" component={OnlineGameMap} />
      <Stack.Screen name="Login" component={LoginForm} />
      <Stack.Screen name="Signup" component={SignupForm} />
      <Stack.Screen name="Events" component={EventIndex} />
      </Stack.Navigator>
    </NavigationContainer>
  </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
