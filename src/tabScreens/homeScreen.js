import React from 'react';
import { ScrollView, View, Text,Button,TouchableOpacity,StyleSheet } from "react-native";
import {getAuth } from "firebase/auth";
import { SafeAreaView } from 'react-native-safe-area-context';

export const HomeScreen = ({navigation}) => {

    const auth = getAuth();
    const user = auth.currentUser;
    return (
      <SafeAreaView>
        <ScrollView>
          <View style={styles.top}>
            <View style={styles.userPic}>
              <Text>대충 사진</Text>
            </View>
            <View style={styles.userName}>
              <Text>{user.email}님 안녕하세요!</Text>
              <Text>ㅇㅎㅇㅇ</Text>
            </View>
            <View style={styles.myPoint}>
              <Text>이번 달 점수</Text>
              <Text style={{fontSize:40}}>98</Text>
            </View>
          </View>
          <View style={styles.mid}>

          </View>
        </ScrollView>
      </SafeAreaView>
    );
}
export default HomeScreen;
const styles = StyleSheet.create({
  top : {
      alignItems : 'center',
      paddingLeft: 10,
      width: '100%',
      height: 100,
      justifyContent:'center',
      flexDirection : 'row',
  },    
  mid : {
      height: 80,
      backgroundColor:'blue',
  },  
  userPic : {
    width:100,
    height:100,
    backgroundColor:"yellow",
  },
  userName : {

    height:100,
    backgroundColor:"orange",
  },
  myPoint : {
    width:100,
    height:100,
    backgroundColor:"yellow",
    justifyContent:'center',
    alignItems:'center',
    fontSize: 30,
  },
})