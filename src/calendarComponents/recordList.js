import { stringLength } from '@firebase/util';
import React from 'react';
import {View, Text,StyleSheet} from 'react-native'

export default function RecordList() {
    return (
        <View style={styles.container}>
            <Text>하이</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    record : {
        height: 100,
        width : '80%',
        backgroundColor: 'blue',
    },
    container : {
        flexDirection:'row',
    },
})