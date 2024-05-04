import React, { useState } from 'react';
import { View, TextInput, Platform, Text, Pressable } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { MaterialIcons } from "@expo/vector-icons";

const Datepicker = () => {
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const [mode, setMode] = useState('date');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowPicker(Platform.OS === 'ios');
    setDate(currentDate);
    if (mode === 'date') {
      setSelectedDate(currentDate.toLocaleDateString());
    } else {
      setSelectedTime(currentDate.toLocaleTimeString());
    }
  };

  const showDatepicker = (currentMode) => {
    setShowPicker(true);
    setMode(currentMode);
  };

  return (
    <View>
      <View style={{ padding:10 }}>
        <View style={{flexDirection:"row", justifyContent:"space-around", alignItems:"center",display:"flex", fontSize:18}}>
      <Text style={{fontSize:19}}>Date</Text>
      <Text style={{fontSize:19}}>Time</Text>
      </View>
        <View style={{flexDirection:"row", justifyContent:"space-between", paddingLeft:40, paddingBottom:60}}>

        <MaterialIcons name="date-range" size={24} color="black"  />
        <Pressable onPress={() => showDatepicker('date')} title="Select Date" >

          <TextInput
            style={{ borderColor: 'black', width: 100 ,color:"black", borderEndColor:"black", fontSize:18}}
            placeholder="Select Date"
            value={selectedDate}
            editable={false}
            
          />
          
        </Pressable>
        <MaterialIcons name="more-time" size={24} color="black" />
        <Pressable onPress={() => showDatepicker('time')} title="Select Time">
          <TextInput
            style={{ borderColor: 'gray',color:"black", width: 150 ,fontSize:18}}
            placeholder="Select Time"
            value={selectedTime}
            editable={false}
          />
        </Pressable>
        </View>
        
      </View>
      {showPicker && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};

export default Datepicker;
