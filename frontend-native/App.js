import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Routes, Route, Redirect } from 'react-router-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainPage from './screens/MainPage/MainPage';
import configureStore from './store/store';
import { Provider } from 'react-redux';

export default function App() {
  const store = configureStore();
  const Stack = createNativeStackNavigator();
  return (
  <Provider store={store}>
   <NavigationContainer>
      <Stack.Navigator initialRouteName='MainPage'>
      <Stack.Screen name="MainPage" component={MainPage} />
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
