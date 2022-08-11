import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default function MonthInfo(){
    return (            
        <View style={styles.wrap}>
            <View>
                <Text>이번 달의 가려움 점수</Text>
            </View>
            <View>
                <Text style={{fontSize: 50,}}>98</Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    wrap : {
        borderColor: 'black',
        borderWidth: 1,
        margin: 10,
        alignItems : 'center',
        justifyContent:'center',        
        height: 100,
        backgroundColor:'white',
    },    
})
