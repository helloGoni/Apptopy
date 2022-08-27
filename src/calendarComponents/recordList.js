
import React,{useState} from 'react';
import {View, Text,StyleSheet} from 'react-native'
import RecordItem from './recordItem';

export default function RecordList() {
    const loadResult = [];
    const [record, setRecord] = useState('');

    const rendering = () => {
        for(let i=0;i<9;i++)
        {            
            loadResult.push(<RecordItem/>)
        }
        return loadResult;
      }
    return(
        <View style={styles.container}>
            <View style={{marginLeft:"4%", marginTop:20,marginBottom:5}}>
                <Text style={{fontSize: 17, fontWeight:"500"}}>이번 달의 아토피 기록</Text>
            </View>
            {rendering()}
            <Text>{record}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flexDirection:'column',
    },
})