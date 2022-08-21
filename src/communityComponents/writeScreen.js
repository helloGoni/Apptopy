import React,{useState} from 'react';
import { View, Text, Button,StyleSheet, TouchableOpacity } from "react-native";
import { getDatabase, ref, onValue, set} from "firebase/database";
import { TextInput } from 'react-native-gesture-handler';


function WriteScreen() {

    const [title,setTitle] = useState(''); 
    const [content,setContent] = useState('');

    function writing(userID, name, email) {
        const db =getDatabase();
        set (ref(db,'users/'+userID), {
          userName:name,
          email: email,
        });
      }
    const text = "하이";

    return (
      <View>       
        <View style={styles.bigWrap}>
            <View style={styles.titleWrap}>
                <TextInput 
                placeholder='제목'
                style={styles.titleInput}
                onChangeText={setTitle}
                />  
            </View>
            <View style={styles.contentWrap}>
                <TextInput 
                placeholder='내용을 입력하세요'
                style={styles.contentInput}
                onChangeText={setContent}
                />
            </View>
        </View>
        <View style={styles.submitWrap}>
            <TouchableOpacity
                    onPress={()=>writing(this.text,"heel","hel")}
                    style={styles.submitButton}>
                        <Text>작성완료</Text>
            </TouchableOpacity>
        </View>
      </View>
    );
}

export default WriteScreen;

const styles = StyleSheet.create({
    titleWrap : {
        height:100,
        width:'100%',

    },
    titleInput : {
        borderBottomColor:'gray',
        borderBottomWidth:1,
        height:100,
        width:'85%',
        fontSize:20,
        marginLeft: 30,
    },
    contentWrap : {
        height:100,
        width:300,
    },
    contentInput : {
        height:100,
        width:300,
        fontSize:20,
        marginLeft: 30,
    },
    submitWrap : {
        width: '50%',
        height:30,
        alignItems:'center',
        justifyContent:'center',
    },
    submitButton : {
        width: '50%',
        height: 30,
        backgroundColor:'orange',
        alignItems:'center',
        justifyContent:'center',
    },
})