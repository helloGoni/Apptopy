import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {AntDesign, FontAwesome,MaterialCommunityIcons} from '@expo/vector-icons';
import { Button,View } from "react-native";
import HomeScreen from "../src/tabScreens/homeScreen";
import CalendarScreen from "../src/tabScreens/calendarScreen";
import CommunityScreen from "../src/tabScreens/communityScreen";
import MypageScreen from "../src/tabScreens/mypageScreen";

const Tab = createBottomTabNavigator();

const BottomTabs = ({navigation}) => {
    return (
          <Tab.Navigator
            screenOptions={{
              tabBarActiveTintColor :"white" ,
              tabBarInactiveTintColor : "white",
              headerStyle:{backgroundColor:'#ffb2b2'},
              headerTintColor:'white',
              headerTItleStyle:{fontWeight:'bold'},
              tabBarStyle : {backgroundColor:"#ffb2b2"}             
            }}
          >
            
            <Tab.Screen name="Home" component={HomeScreen} options={{
              tabBarLabel: "홈",   
              //headerShown: false,  
              tabBarIcon: () => (
                <AntDesign name="home" size={24} color="white" />
              )
            }}/>
            <Tab.Screen name="아토피 커뮤니티" component={CommunityScreen} options={{
              tabBarLabel: "게시판",
              tabBarIcon: () => (
                <MaterialCommunityIcons name="bulletin-board" size={24} color="white" />
              )
            }} />
            <Tab.Screen name="나의 아토피 기록" component={CalendarScreen} options={{
              tabBarLabel: "캘린더",
              headerRight : () => (
                <Button onPress={()=>navigation.navigate('새로운 기록')} title="+" />
                
              ),
              tabBarIcon: () => (
                <AntDesign name="calendar" size={24} color="white" />
              )
            }} />
            <Tab.Screen name="마이 페이지" component={MypageScreen} options={{
              tabBarLabel: "마이 페이지",
              tabBarIcon: () => (
                <FontAwesome name="user-o" size={24} color="white" />
              )
            }} />
          </Tab.Navigator>
      );
}

export default BottomTabs;