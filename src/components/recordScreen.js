import React, {useState} from 'react';
import { View, Text, Button,TextInput, Keyboard,StyleSheet } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';

function RecordScreen() {
    const [content, setContent] = useState('');
    const onPress = () => {
      saveRecord(content);
      setContent('');
      Keyboard.dismiss();
    }
    const saveRecord = async (content) => {
      try{
        await AsyncStorage.setItem("@hello",JSON.stringify(content))
        console.log(await AsyncStorage.getItem("@hello"));
      } catch (e) {
        console.log('실패');
      }

    } 
    return (
      <>
        <View style={{justifyContent:'center',alignItems:'center'}}>
          <Text>오늘의 점수</Text>
          <TextInput
            placeholder='뭐든 입력하세요!'
            style={styles.contentInput}
            value={content}
            onChangeText={setContent}
            onSubmitEditing={onPress} //엔터누르면 키보드 사라짐
            returnKeyType="done" //엔터타입지정
          />
        </View>
      
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