import React from 'react';
import { View, Text, Button, Alert,TextInput, StyleSheet } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';

function InquiryScreen({navigation}) {
    return (
      <View style={styles.inquiryBox}>

        <TouchableOpacity onPress={()=> alert('dfdfdf')}style={{justifyContent: 'center', alignItems: 'center' }}>
          <Text>문의하기입니다</Text>
        </TouchableOpacity>

        <TextInput style ={styles.inquiryInput}/>

        
      </View>
    );
}

const styles = StyleSheet.create({
  inquiryInput : {
    backgroundColor: "black",
    width: 300,
    height : 300,
    color : 'white',
    borderColor : 'blue',
    borderWidth: 3,
    borderRadius: 10,    
    },
  inquiryBox : {
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default InquiryScreen;