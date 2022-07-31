import React from 'react';
import { View, Text, Button,TextInput } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';

function RecordScreen() {

    const saveRecord = async (toSave) => {
        await AsyncStorage.setItem("@hello",JSON.stringify(toSave))
    }
    return (
      <>
        <View style={{justifyContent:'center',alignItems:'center'}}>

          <Text>오늘의 점수</Text>
          <TextInput></TextInput>
        </View>
        <TouchableOpacity onPress={()=> alert('dfdfdf')}style={{justifyContent: 'center', alignItems: 'center' }}>
          <Text>저장</Text>
        </TouchableOpacity>
        
      </>
    );
}

export default RecordScreen;