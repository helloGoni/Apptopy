import React,{useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function RecordItem(){
    return (        
        <View style={styles.wrap}>
            <TouchableOpacity style={styles.item} activeOpacity={0.7}>
                <View style={styles.point}>
                    <Text>96</Text>
                </View>
                <View>
                    <Text>내용</Text>
                </View>
            </TouchableOpacity>   
        </View>
    );
}
const styles = StyleSheet.create({
    wrap : {
        alignItems : 'center',
        width: '100%',
    },    
    item : {
        flexDirection: 'row',
        backgroundColor: 'yellow',
        justifyContent:'center',
        alignItems: 'center',
        borderColor: 'blue',
        borderWidth: 1,
        borderRadius: 10,
        width: '92%',
        height: 70,
        marginTop: 5,
    },
    point : {
        width:'20%',
        height: 70,
        justifyContent:'center',
        alignItems: 'center',
    },
})
