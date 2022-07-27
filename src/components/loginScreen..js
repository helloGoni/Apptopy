import React, { useState} from "react";
import {Alert,View,Text,TextInput,StyleSheet,} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
//import {getAuth, signInWithEmailAndPassword} from "firebase/auth";

function LoginScreen() {
    const [form, setForm] = useState({
        email: "",
        password: "",
    });
    
  /*  const loginSubmit = async () => {
        const {email,password} = form;
        const info = {email, password};
        const auth = getAuth();
        signInWithEmailAndPassword(auth,email,password)
        .then((userCredential) => {
            const user = userCredential.user;
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
          });
    }*/

    return(
    <View style = {{alignItems:'center', paddingTop: 100,flex:1}}>

        <TextInput type="text" placeholder="이메일"style = {styles.input} />
        <TextInput  type="password" placeholder="비밀번호" style = {styles.input} />
        <TouchableOpacity style= {styles.loginButton}>
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