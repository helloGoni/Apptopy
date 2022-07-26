
import { Feather } from '@expo/vector-icons';
import React from 'react';
import { TouchableOpacity, StyleSheet, View, Text, Button} from "react-native";
import { ScrollView } from 'react-native';

function MypageScreen({navigation}) {
    return (
      <ScrollView style={{backgroundColor:'#e2e2e2'}}>
        <View style={{ marginTop: 10, justifyContent: 'center', alignItems: 'center',backgroundColor:'white',
      height: 120, }}>
          <Text style={{fontSize: 30, fontWeight: '500'}}>로그인하기</Text>
          <TouchableOpacity>
            <Text>로그인</Text>
          </TouchableOpacity>
          
        </View>
        <View style={styles.smallOption}>
            <Text style={{fontSize: 15, fontWeight: '500'}}>내 정보</Text>
          </View>
          <View style={styles.smallOption}>
            <Text style={{fontSize: 15, fontWeight: '500'}}>쪽지함</Text>
          </View>

        <View style={styles.bigOption}>
          <Text style={{paddingLeft : 13, paddingBottom : 10, fontSize: 20, fontWeight:'900'}}>커뮤니티</Text>
          <View style={styles.smallOption}>
            <Text style={{fontSize: 15, fontWeight: '500'}}>내가 쓴 글</Text>
          </View>
          <View style={styles.smallOption}>
            <Text style={{fontSize: 15, fontWeight: '500'}}>내가 쓴 댓글</Text>
          </View>
          <View style={styles.smallOption}>
            <Text style={{fontSize: 15, fontWeight: '500'}}>좋아요 한 글</Text>
          </View>
        </View>

        <View style={styles.bigOption}>
          <Text style={{paddingLeft : 13, paddingBottom : 10, fontSize: 20, fontWeight:'900'}}>어플리케이션</Text>

          <TouchableOpacity activeOpacity ={0.8} style={styles.smallOption} onPress={()=>navigation.navigate('공지사항') }>
            <Text>공지사항</Text>
          </TouchableOpacity>


          <TouchableOpacity activeOpacity ={0.8}  style={styles.smallOption} onPress={()=>navigation.navigate('문의하기') }>
            <Text>문의하기</Text>
          </TouchableOpacity>
          
          <TouchableOpacity activeOpacity ={0.8} style={styles.smallOption} onPress={()=>navigation.navigate('앱정보') }>
            <Text>앱 정보 및 설정</Text>
          </TouchableOpacity>
          <View style={styles.smallOption}>
            <Text style={{fontSize: 15, fontWeight: '500'}}>테스트</Text>
          </View>
        </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
  bigOption : {
    backgroundColor : '#e2e2e2',
    color : 'white',
    paddingTop : 10,
    paddingBottom : 5,
    fontSize : 100,
  },
  smallOption : {
    backgroundColor : 'white',
    justifyContent: "center",
    color : 'black',
    marginTop : 1,
    paddingLeft : 20,
    height: 60,
    fontSize : 100,

  }
});
//FFB2B2
export default MypageScreen;