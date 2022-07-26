import React from 'react';
import { View, Text, Button } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';

function NoticeScreen() {
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
          <Text>공지사항입니다</Text>
        </TouchableOpacity>
        
      </>
    );
}

export default NoticeScreen;