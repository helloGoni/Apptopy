import React, {useState} from 'react';
import { View, Text, Button,TextInput, Keyboard,StyleSheet } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';

function RecordScreen() {
    const [text,setText] = useState('');

    const onPress = () => {
      onInsert(text);
      setText('');
      Keyboard.dismiss();
    }
    const saveRecord = async (toSave) => {
        await AsyncStorage.setItem("@hello",JSON.stringify(toSave))
    }
    return (
      <>
        <View style={{justifyContent:'center',alignItems:'center'}}>
          <Text>오늘의 점수</Text>
          <TextInput
            placeholder='뭐든 입력하세요!'
            style={styles.contentinput}
            value={text}
            onChangeText={setText}
            onSubmitEditing={onPress} //엔터누르면 키보드 사라짐
            returnKeyType="done" //엔터타입지정
          />
        </View>
        <TouchableOpacity onPress={()=> alert('dfdfdf')}style={{justifyContent: 'center', alignItems: 'center' }}>
          <Text>저장</Text>
        </TouchableOpacity>
        <Text>저장</Text>
        <TextInput></TextInput>
      </>
    );
}
const styles = StyleSheet.create({
  contentInput : {
    backgroundColor : 'yellow',
    height: 100,
    width: 100,
  },
})


export default RecordScreen;