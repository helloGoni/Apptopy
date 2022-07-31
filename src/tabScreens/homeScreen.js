import React from 'react';
import { ScrollView, View, Text,Button,TouchableOpacity } from "react-native";
import {getAuth } from "firebase/auth";

export const HomeScreen = ({navigation}) => {

    const auth = getAuth();
    const user = auth.currentUser;
    return (
      <ScrollView>
        <View style={{ justifyContent:'center',alignItems:'center'}}>
          <Text>{user.email}님 어서오세요</Text>
          <Text>당신의 uid는 {user.uid}입니다</Text>
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Text>Home!</Text>          
        </View>
        <TouchableOpacity>          
          <Text>
              하이
          </Text>
        </TouchableOpacity>
      </ScrollView>
    );
}

export default HomeScreen;