import React, { useState} from "react";
import {Alert,View,Text,TextInput,StyleSheet,} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
//import { signIn, signUp } from "../../lib/auth";

function LoginScreen() {
    /*
    const [from,setForm] = useState({
        email : "",
        password : "",
        confirmPassword : "",
    });

    const resultMessages = {
        "auth/email-already-in-use": "이미 가입된 이메일입니다.",
        "auth/wrong-password": "비밀번호가 틀렸습니다.",
        "auth/user-not-found": "계정이 존재하지 않습니다.",
        "auth/invalid-email": "유효하지 않은 이메일 주소입니다."
    }

    const singUpSubmit = async() => {
        const {email, password} = form;
        const info = {email, password};
        try{
            const {user} = await signUp(info);
            console.log(user);
        }catch (e) {
            Alert.alert("회원가입에 실패했습니다.");
        }
    }

    const singInSubmit = async() => {
        const {email, password} = form;
        const info = {email, password};
        try {
            const {user} = await signIn(info);
            console.log(user);
        } catch (e) {
            console.log(e);
            Alert.alert("로그인을 실패했습니다.");
        }
    }*/
    return(
    <View style = {{alignItems:'center', paddingTop: 100,flex:1}}>

        <TextInput type="text" placeholder="이메일"style = {styles.input} />
        <TextInput  type="password" placeholder="비밀번호" style = {styles.input} />
        <TouchableOpacity style= {styles.loginButton} onPress={()=>Alert.alert("로그인을 누르셨네요?","왜눌렀지",
        [
            {
                text: '누르지 마세요',
                onPress: ()=> Alert.alert("누르지 말라니까")
            },
            {
                text: '안누를게요'
            }
        ],
        {cancelable:false}
        )}>
            <Text> 로그인하기</Text>
        </TouchableOpacity>
    </View>
    );
}

const styles = StyleSheet.create({
    input : {
        width: 300,
        marginTop : 20,
        height: 50,
        borderColor : 'gray',
        borderRadius : 10,
        borderWidth: 2,
        fontSize: 20,
        paddingLeft: 20,
    },
    loginButton : {
        marginTop: 30,
        backgroundColor: "#FFB2B2",
        borderColor : 'gray',
        borderWidth: 3,
        borderRadius: 10,
        width: 300,
        height: 100,
        alignItems: 'center',
        justifyContent : 'center',
        
    }
})


export default LoginScreen;