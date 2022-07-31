//import { useNavigation } from '@react-navigation/native';
import React, {useState, Component, useEffect} from 'react';
import {TextInput, StyleSheet, View, Text, Alert, Button,TouchableOpacity,KeyboardAvoidingView} from 'react-native';
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged} from "firebase/auth"
//import cookie from 'react-cookies'

const Login = ({navigation}) => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const messages = {
        'auth/email-already-in-use': '이미 가입된 이메일입니다.',
        'auth/wrong-password': '잘못된 비밀번호입니다.',
        'auth/user-not-found': '존재하지 않는 계정입니다.',
        'auth/invalid-email': '유효하지 않은 이메일 주소입니다.',
      };
    
    useEffect(()=> {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                navigation.navigate("뒤로");
            }
        })
    })
    const handleSignUp = () => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email,password)
            .then(userCredential => {
                const user = userCredential.user;
                console.log(user.email);
            })
            .catch((error) => {
                console.log(error.code)
                console.log(error.message)
            });
    }
    const handleSignIn = () => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth,email,password)
            .then(userCredential=> {
                const user = userCredential.user;
                console.log("Logged in with:",user.email);
            })
            .catch((error)=>{
                console.log(error.code)
                console.log(error.message)
            });
    }

    return (
        <KeyboardAvoidingView style={styles.container} behavior="padding">
            <Text style={styles.title}>APPTOPY</Text>
            <View style={styles.inputContainer}>
                <TextInput placeholder='email' 
                value={email} onChangeText={text=>setEmail(text)} 
                style={styles.input}/>
                <TextInput placeholder='password' 
                value={password} onChangeText={text=>setPassword(text)} 
                style={styles.input} secureTextEntry/>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={handleSignIn} style={styles.button}>
                    <Text>로그인</Text>
                </TouchableOpacity>     
                <TouchableOpacity onPress={handleSignUp} style={[styles.button,styles.buttonOutlineText]}>
                    <Text>회원가입</Text>
                </TouchableOpacity>               
            </View>
        </KeyboardAvoidingView>
    )
}



export default Login
const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: "#FFB2B2",
    },
    inputContainer : {
        width: '80%',
    },
    input : {
        backgroundColor:'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,        
    },
    buttonContainer : {
        width: '60%',
        justifyContent:'center',
        alignItems: 'center',
        marginTop: 40,
    },
    button : {
        backgroundColor: "white",
        width:'100%',
        padding: 15,
        borderRadius:10,
    },
    buttonOutLine : {
        backgroundColor: 'white',
        marginTop: 5,
        borderColor : 'black',
        borderWidth: 2,
    },
    buttonText: {
        color : 'white',
        fontWeight: '700',
        fontSize: 16,
    },
    buttonOutlineText: {
        color : 'blue',
        fontWeight: '700',
        fontSize:16, 
    },
    title : {
        fontSize : 30,
        color : 'white',
        marginBottom : 30,
    },
})