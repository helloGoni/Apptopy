import { ScrollView, View, Text } from "react-native";

export const CommunityScreen = () => {
    return (
      <ScrollView>
        <View style={{ flex:1, justifyContent:'center',alignItems:'center',backgroundColor:"black"}}>
          <Text style={{color:"white"}}>하이</Text>
        </View>
        <View style={{ flex: 15, justifyContent: 'center', alignItems: 'center' }}>
          <Text>준비중입니다!</Text>
        </View>
      </ScrollView>
    );
  }
export default CommunityScreen;