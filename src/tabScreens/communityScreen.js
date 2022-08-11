import { ScrollView, View, Text,Button } from "react-native";
import { getDatabase, ref, onValue, set} from "firebase/database";

export const CommunityScreen = () => {
    const database = getDatabase();
    const title = ref(database, 'boardList/'+'hello');
    onValue (title, (snapshot) => {
      const data = snapshot.val();
    })
    //쓰기 완성입니다.
    function writing(userID, name, email) {
      const db =getDatabase();
      set (ref(db,'users/'+userID), {
        userName:name,
        email: email,
      });

    }

    return (
      <ScrollView>
        <View style={{ flex:1, justifyContent:'center',alignItems:'center',backgroundColor:"black"}}>
          <Text style={{color:"white"}}>하이</Text>
        </View>
        <View style={{ flex: 15, justifyContent: 'center', alignItems: 'center' }}>
          <Text>준비중입니다!</Text>
        </View>
        <View>
        <Text>{title.board}</Text>
        </View>
        <Button title="글쓰기"
                onPress={()=>writing("heell","heel","hel")}
        />
      </ScrollView>
    );
  }
export default CommunityScreen;