import AsyncStorage from "@react-native-async-storage/async-storage";

const axiosInstance = axios.create({
    baseURL: baseUrl,
    withCredentials: true,
  });

export const setCookie = cookie => {
    axiosInstance.defaults.headers.Cookies = JSON.parse(cookie);
}

export const storeData = async (key, value) => {
    try {
        await AsyncStorage.setItem(key,value);
    } catch (e) {
        console.log(e);
    }
}

export const signIn = async data => {
    
}