import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet , Text , View } from 'react-native';
import MyStack from './navigation';
import Home from './screens/home';

const App = () => {
  return(
   
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    
  )
}

export default App;

const styles = StyleSheet.create({
  container:{
    paddingTop:40,
    paddingHorizontal:16,
  },
});