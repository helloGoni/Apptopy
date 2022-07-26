import React from 'react';
import { View, Text, Button, Alert } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';

function AppinfoScreen({navigation}) {
    return (
      <>
        <View style={{justifyContent:'center',alignItems:'center'}}>
          <Text>하이</Text>
          <Button
          title = 'dfdfdf'
          onPress ={()=>alert('fddfdf')}
          />
        </View>

        <TouchableOpacity onPress={()=> alert('dfdfdf')}style={{justifyContent: 'center', alignItems: 'center' }}>
          <Text>문의하기입니다</Text>
        </TouchableOpacity>
        
      </>
    );
}

export default AppinfoScreen;