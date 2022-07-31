
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function AuthLoadingScreen(props) {
    useEffect(() => {
        _bootstrapAsync = async () => {
            const cookie = await getData('cookie');
            if (cookie) {
              setCookie(cookie);
            }
          };
          _bootstrapAsync()
        
    },[])
    return(
        <View>

        </View> 

    );

}