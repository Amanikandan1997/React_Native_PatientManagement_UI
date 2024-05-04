import { StyleSheet,  View,ProgressBarAndroid ,Text,Pressable,TouchableOpacity,DatePickerAndroid, TimePickerAndroid} from 'react-native'
import React, { useCallback, useState ,usem} from 'react'
import { Card } from 'react-native-paper';
import { MaterialIcons } from "@expo/vector-icons";
import UserAvatar from 'react-native-user-avatar';
import { useNavigation } from '@react-navigation/native';
import Datepicker from './Datepicker';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AppoinmentBar from './AppoinmentBar';


const Appoinment = () => {
    const navigation = useNavigation();
    
    

    

  return (
    <View style={{marginTop:4,padding:10, display:'flex', flexWrap:'wrap', alignItems:'center',justifyContent:"center",  flexDirection:"row"}}>
 
    
   
          <UserAvatar size={80} name="Sri " style={styles.avatar} />
          <View style={styles.userInfo}>
            <Text style={styles.username}>Dr.Sri MD</Text>
            <Text style={{ color: "gray"}}>Radialogy|General Internal Medicine  </Text>
            
          </View>
    <View style={{backgroundColor:"white",height:100, padding:20}}>
    <Pressable onPress={() => navigation.navigate("Login")} style={{ marginTop: 15 }}
  
  
  > 
   
          <Text style={{
            width: 350,
            height:40,
            backgroundColor: "white",
            color:"#1e90ff",
            textAlign: "center",
            borderRadius: 15,
            marginLeft: "auto",
            marginRight: "auto",
             padding:10,
             flexDirection:"row",
            fontWeight: "bold",
             borderColor: "#1e90ff",
            borderWidth: 1
          }}
          > View Doctor Profile </Text>
        </Pressable>
        <View style={{display:"flex" ,flexDirection:"row", alignItems:"center",justifyContent:"center",padding:6,backgroundColor:"white"}}>

        </View>
              

        <Card style={{ margin: 20, padding:20,width:370,height:150,backgroundColor:"white", borderColor:"lightgray", borderRadius:7}}>
        <Card.Content style={{display:"flex" ,flexDirection:"row", alignItems:"center",justifyContent:"center",padding:6,backgroundColor:"white"}}>
        <Text style={{fontSize:20}}>Appoinment ID </Text>
        <Text style={{fontWeight:"bold",fontSize:20}}>#873948203 </Text>
    
        </Card.Content>
        <View style={{flexDirection:"column", alignItems:"center",justifyContent:"center"}}>
      <AppoinmentBar/>
      <Text>Doctor expected Join soon..</Text>  
      <Text>your Appoinment with Dr.Sri </Text> 
      </View>
      
            
      </Card>
      
    
    </View>
    
    <View style={{padding:200, justifyContent:"space-evenly"}}>
    <Datepicker />
  
    <Pressable onPress={() => navigation.navigate("Login")} 
  style={{marginBottom:-12,padding:30, height:90, paddingBottom:70}}
  
  > 

   
          <Text style={{
            width: 350,
            height:40,
            backgroundColor: "white",
            color:"#1e90ff",
            textAlign: "center",
            borderRadius: 18,
            marginLeft: "auto",
            marginRight: "auto",
            height:50,
            width:300,
          
            fontSize:18,
             padding:10,
             flexDirection:"row",
            fontWeight: "bold",
             borderColor: "#1e90ff",
            borderWidth: 1
          }}
          ><MaterialCommunityIcons name="share-all-outline" size={24} color="#1e90ff" /> Share Link </Text>
        </Pressable>
        <Pressable
        onPress={() => navigation.navigate("Login")} 
          style={{
           
            width: 350,
            height:45,
            backgroundColor: "#1e90ff",
            borderRadius: 12,
            textAlign:"center",
            marginLeft: "auto",
            marginRight: "auto",
           
          }}
        >
          <Text style={{ textAlign: "center", color: "white", fontSize: 20, fontWeight: "bold", display:"flex", justifyContent:"center", alignItems:"center", padding:6}}>Join Appoinment Call</Text>
        </Pressable>
        </View>
   

  </View>
  
  
  )
}

export default Appoinment

const styles = StyleSheet.create({
    avatarContainer: {
      flexDirection: 'row',
      alignItems: 'center'
    },
    avatar: {
        marginLeft:-40,
      marginRight: 10,
      borderRadius: 50,
      backgroundColor: 'lightgray',
      borderColor:"#1e90ff",
      borderWidth:2
    },
    userInfo: {
      justifyContent: 'center',
      alignItems: 'flex-start'
    },
    username: {
      fontSize: 18,
      fontWeight: 'bold'
    },
    email: {
      fontSize: 14,
      color: 'blue'
    }
  })