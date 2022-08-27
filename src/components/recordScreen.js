import React, {useState} from 'react';
import { View, Text, Button,TextInput, Keyboard,StyleSheet, TouchableOpacity } from "react-native";
import Slider from '@react-native-community/slider';
import { getDatabase, ref, set} from "firebase/database"


function RecordScreen() {
    const today = new Date();
    const database = getDatabase();
    const [todayValue, setValue] = useState(0);
    const [content, setContent] = useState('');
    function writeuserData() {

    }
    const onPress = () => {

    }
    
    return (
      <View>
        <View style={{justifyContent:'center',alignItems:'center'}}>
          <Text>오늘의 점수</Text>
          <Text style={styles.valueFont}>{todayValue}</Text>
          <Slider
            style={{height:40,width:300}}
            value={todayValue}
            onValueChange={(value)=>setValue(value)}
            minimumValue={0}
            maximumValue={100}
            maximumTrackTintCOlor='red'
            minimumTrackTintColor='blue'
            step={1}
          />
          <TextInput
            placeholder='오늘 하루를 기록하세요!'
            style={styles.contentInput}
            value={content}
            onChangeText={(content)=>setContent(content)}
            multiline={true}
            //onSubmitEditing={onPress} //엔터누르면 키보드 사라짐
            //returnKeyType="go" //엔터타입지정
          />
          <TouchableOpacity 
            style={styles.submitButton}
            onPress={onPress}
            >
            <Text>저장하기</Text>
          </TouchableOpacity>
        </View>      
      </View>
    );
}
const styles = StyleSheet.create({
  contentInput : {
    marginTop:30,
    marginBottom:30,
    backgroundColor : '#FCFCFC',
    borderWidth: 1,
    borderColor: '#C5C5C5',
    height: '40%',
    width: '100%',
    textAlign:'center',
    flexShrink:1,
    
  },
  valueFont : {
    fontSize: 60,
  },
  submitButton : {
    alignItems:'center',
    justifyContent:'center',
    height: 50,
    width: 130,
    borderWidth: 1,
    borderColor: '#C5C5C5',
    backgroundColor:'#ffb2b2',
    color: 'white',
  },
})


export default RecordScreen;