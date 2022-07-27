import { NavigationContainer } from '@react-navigation/native';
import StackScreen from './navigator/StackScreen';
import React, {useState} from 'react';
import { Component } from 'react/cjs/react.production.min';


export default class App extends Component {
  state = {
    isLogin : false,
  }
  render() {
    return(
      <NavigationContainer>
        <StackScreen/>    
      </NavigationContainer>
    )
  }
}

