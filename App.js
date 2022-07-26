import { NavigationContainer } from '@react-navigation/native';
import StackScreen from './navigator/StackScreen';
import React from 'react';



export default function App() {
  return (
    <NavigationContainer>
      <StackScreen/>
    </NavigationContainer>
  );
}

