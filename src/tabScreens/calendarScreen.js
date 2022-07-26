import {Calendar, CalenderList, Agenda, LocaleConfig} from 'react-native-calendars';
import { View, Text } from "react-native";




LocaleConfig.locales['fr'] = {
    monthNames: ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'],
    monthNamesShort: ['Janv.','Févr.','Mars','Avril','Mai','Juin','Juil.','Août','Sept.','Oct.','Nov.','Déc.'],
    dayNames: ['일요일','월요일', '화요일','수요일','목요일','금요일','토요일'],
    dayNamesShort: ['일', '월','화','수','목','금','토'],
    today: "Aujourd'hui"
  };  
  LocaleConfig.defaultLocale ='fr';  

export const CalendarScreen = () => {
    return (
      <>
        <View>          
        <Calendar
    // 날짜를 눌렀을 때 실행되는 함수, Default = undefined
    onDayPress={(day) => {console.log('selected day', day)}}
    monthFormat={'yyyy MM'}
    // 달력에서 보이는 월이 바뀔때 실행되는 함수, Default = undefined
    onMonthChange={(month) => {console.log('month changed', month)}}
    hideExtraDays={true}
    disableMonthChange={true}    
    firstDay={7}    
    onPressArrowLeft={subtractMonth => subtractMonth()}    
    onPressArrowRight={addMonth => addMonth()}
    />
        </View>
        <View>
          <Text>오늘 먹은 음식</Text>
        </View>
        <View>
          <Text>특이사항</Text>
        </View>  
      </>  
    );
  }

  export default CalendarScreen;