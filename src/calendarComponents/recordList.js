import React from 'react';
import {View, Text,StyleSheet} from 'react-native'
import RecordItem from './recordItem';

export default function RecordList() {
    const rendering = () => {
        const renderResult = [];
        for(let i=0;i<9;i++)
        {
            renderResult.push(<RecordItem/>)
        }
        return renderResult;
      }

    return (
        <View style={styles.container}>
            {rendering()}
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flexDirection:'column',
    },
})