import React from 'react';
import { ScrollView, View, Text,Button } from "react-native";

export const HomeScreen = ({navigation}) => {
    return (
      <ScrollView>
        <View style={{ justifyContent:'center',alignItems:'center'}}>
          <Text>어서오세요</Text>
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Text>Home!</Text>
          <Button title="dfdfd" onPress={()=>navigation.navigate('회원가입')}/>
        </View>
      </ScrollView>
    );
}

export default HomeScreen;