import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function RecordItem({}){
    return (        
        <View style={styles.wrap}>
            <TouchableOpacity style={styles.item} activeOpacity={0.7}>
                <View style={styles.point}>
                    <Text>점수</Text>
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
        borderWidth: 2,
        borderRadius: 3,
        width: '90%',
        height: 60,
        marginTop: 10,
    },
    point : {
        
    },
})
