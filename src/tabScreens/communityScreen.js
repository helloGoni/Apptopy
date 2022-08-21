import { ScrollView, View, Text,Button,StyleSheet } from "react-native";
import { getDatabase, ref, onValue, set} from "firebase/database";
import React, { Component } from 'react'
import { useEffect } from "react";



export const CommunityScreen = ({navigation}) => {
  const state ={
    board : [
      {
        boardOwner : 'test',
        boardTitle : '안녕',
        boardDate : '22:23',
        boardComment : '3',
        boardView: '327',
        boardLike: '223',
      },
      {
        boardOwner : 'test',
        boardTitle : '안녕',
        boardDate : '22:23',
        boardComment : '3',
        boardView: '327',
        boardLike: '223',
      }
    ]
  }
    const database = getDatabase();


    return (
      <ScrollView>
        <View style={styles.topMenu}>
          <Text>전체글 인기글 공지</Text>
        </View>
        <View style={styles.boardContent}>
          <View>
            <Text style={styles.board}>안녕하세요!</Text>
          </View>
          <View>
            <Text style={styles.board}></Text>
          </View>
          <View>
            <Text style={styles.board}>하이</Text>
          </View>
          <View>
            <Text style={styles.board}>하이</Text>
          </View>
        </View>
        <Button title="글쓰기"
                
                onPress={()=>navigation.navigate("글쓰기")}
        />
      </ScrollView>
    );
  }
export default CommunityScreen;

const styles = StyleSheet.create({
  topMenu : {
    height: 30,
    width: '100%',
    justifyContent:'center',
  },
  boardContent : {
    width : '100%',
  },
  board : {
    height : 60,
    width: '100%',        
  }
})