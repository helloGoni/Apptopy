import { getAuth, signOut } from 'firebase/auth';
import React from 'react';
import { View, Text, Button, Alert } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';

function AppinfoScreen({navigation}) {

  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(()=>{
        navigation.reset({
          routes: [{
              name: '로그인페이지',
            }]
        })
      })
      .catch((error)=>{
        alert.apply(error.message)
      })
  }
    return (
      <>
        <View style={{justifyContent:'center',alignItems:'center'}}>
          <Text>하이</Text>
        </View>

        <TouchableOpacity onPress={handleSignOut}style={{justifyContent: 'center', alignItems: 'center' }}>
          <Text>로그아웃</Text>
        </TouchableOpacity>
        
      </>
    );
}

export default AppinfoScreen;