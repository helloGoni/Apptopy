import React from "react";
import { ScrollView } from 'react-native-gesture-handler';
import RecordList from '../calendarComponents/recordList';
import MonthInfo from '../calendarComponents/monthInfo';
import CalendarTreat from '../calendarComponents/calendarTreat';

export const CalendarScreen = () => {  
    return (
      <ScrollView>
        <MonthInfo/>
        <CalendarTreat/>
        <RecordList/>
      </ScrollView>  
    );
  }

  export default CalendarScreen;