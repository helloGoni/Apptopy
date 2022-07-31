import React,{Component} from 'react';
import { StyleSheet, Text, View, } from 'react-native';


export default class Loading extends Component {
    render() {
        return (
            <View style={styles.loading}>
                <Text style={styles.loadingText}>안녕!</Text>
            </View>
        );
    }
}


const styles= StyleSheet.create({
    loading : {
        justifyContent :'center',
        backgroundColor: "#FFB2B2",
        alignItems:'center',
        flex : 1,
    },
    loadingText : {
        fontSize :150,
        fontWeight : 'bold',
        color : "white",
    }
})