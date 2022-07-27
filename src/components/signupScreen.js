import React, { useState} from "react";
import {Alert,View,Text,TextInput,StyleSheet,TouchableOpacity,} from "react-native";
import { Component } from "react/cjs/react.production.min";
import {SignUp} from "../../firebase"

export default class SignupScreen extends Component {
    state = {
        email: "",
        password: "",
    };

    signUpSubmit = () => {
        this.setState({email: this.state.inputEmail, password: this.state.inputPW})
        try{
            SignUp(this.state.email,this.state.password);
            Alert.alert("음!!");
            console.log("성공");
        }catch (e) {
            const messages = {
                'auth/email-already-in-use': '이미 가입된 이메일입니다.',
                'auth/wrong-password': '잘못된 비밀번호입니다.',
                'auth/user-not-found': '존재하지 않는 계정입니다.',
                'auth/invalid-email': '유효하지 않은 이메일 주소입니다.',
              };
            console.log("실패");
            Alert.alert("회원가입~~~실패!!!!")
        }
    }

    render() {
        return  (
            <View style = {{alignItems:'center', paddingTop: 100,flex:1}}>
            <TextInput type="text" placeholder="이메일"
            onChangeText={(email)=> {this.setState({inputEmail: email})}} style = {styles.input} />
            <TextInput  type="password" placeholder="비밀번호" 
            onChangeText={(password)=> {this.setState({inputPW: password})}} style = {styles.input} />
            <TouchableOpacity style= {styles.loginButton} onPress={this.signUpSubmit} >
                <Text> 회원가입</Text>
            </TouchableOpacity>
        </View>
        );
    }



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
