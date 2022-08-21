import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import NoticeScreen from '../src/components/noticeScreen';
import InquiryScreen from '../src/components/inquiryScreen';
import AppinfoScreen from '../src/components/appinfoScreen';
import BottomTabs from './BottomTabs';
import SignupScreen from '../src/components/signupScreen';
import RecordScreen from '../src/components/recordScreen';
import Login from '../src/components/Login';
import WriteScreen from '../src/communityComponents/writeScreen';

const Stack = createStackNavigator();

const StackScreen = () => {
    return (
      <Stack.Navigator             
      screenOptions={{
        tabBarActiveTintColor :"white" ,
        tabBarInactiveTintColor : "white",
        headerStyle:{backgroundColor:'#ffb2b2'},
        headerTintColor:'white',
        headerTItleStyle:{fontWeight:'bold'},
        tabBarStyle : {backgroundColor:"#ffb2b2"}             
      }}>
        <Stack.Screen name="로그인페이지" component={Login} options={{headerShown:false}}/>
        <Stack.Screen name="뒤로"component={BottomTabs} options={{headerShown:false}}/>
        <Stack.Screen name="공지사항" component={NoticeScreen}/>
        <Stack.Screen name="문의하기" component={InquiryScreen}/>
        <Stack.Screen name="앱정보" component={AppinfoScreen}/>
        <Stack.Screen name="회원가입" component={SignupScreen}/>
        <Stack.Screen name="새로운 기록" component={RecordScreen}/>
        <Stack.Screen name="글쓰기" component={WriteScreen}/>
      </Stack.Navigator>
    );
}


//FFB2B2
export default StackScreen; 