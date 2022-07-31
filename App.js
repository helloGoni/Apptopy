import { NavigationContainer } from '@react-navigation/native';
import StackScreen from './navigator/StackScreen';
import React, {useState} from 'react';
import { Component } from 'react/cjs/react.production.min';
import Loading from './src/Loading';

export default class App extends Component {
  state = {
    isLogin : false,
    isLoading : true,
  }
  componentDidMount = async() => {
    setTimeout(()=>{this.setState({isLoading: false})},3000);
  }

  render() {
    if(this.state.isLoading) {return <Loading/>} 
    else {return(
    <NavigationContainer>
      <StackScreen/>    
    </NavigationContainer>
    ) }
  }
}

