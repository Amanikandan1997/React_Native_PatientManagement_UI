import { StyleSheet,  View,ProgressBarAndroid ,Text,Pressable} from 'react-native'
import React from 'react'
import { Card } from 'react-native-paper';
import { MaterialIcons } from "@expo/vector-icons";
import UserAvatar from 'react-native-user-avatar';
import { useNavigation } from '@react-navigation/native';


const Homepage = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, backgroundColor: "white", alignItems: "center" }}>
      <View>
      <Text style={{ fontWeight:"600",fontSize:20,paddingRight:130}}>Hello , Manikandan!</Text>
      <Text style={{ color: "gray",paddingRight:130}}>Here's an overview of your account.</Text>
      
    </View>
     <View style={{ width: '90%', padding: 40,margin:10, backgroundColor: '#f0fff0', borderRadius: 10,display:"flex",alignItems:"center",justifyContent:"center",height:"20%" }}>
     <Text style={{ fontWeight:"600",fontSize:20}}>Welcome to md4now</Text>
     <Text style={{fontWeight:"800"}}>Thanks your registration</Text>
     <Text style={{fontSize:13,fontWeight:"800"}} >Please update your complete profile & Health</Text>
     <ProgressBarAndroid styleAttr="Horizontal" style={{color:"green",width:"70%"}} />
     <Text>35% Completed</Text>
     </View>

     <View>
      <Text style={{ fontWeight:"600",fontSize:20,paddingRight:130, marginLeft:7}}>Quick Link</Text>
      <Text style={{ color: "gray",paddingRight:130, marginLeft:7}}>Here's an overview of your account list.</Text>
      <View style={{display:"flex", flexDirection:"row", padding:3}}>
      <Card style={{width:"29%", margin:8,height:"80%", backgroundColor:"white"}}>
    <Card.Content>
    <MaterialIcons name="manage-accounts" size={50} color="#00ced1" style={{alignItems:"center",display:"flex",justifyContent:"center",paddingLeft:20}} />
      <Text variant="bodyMedium">Complete you 
Profile</Text>
    </Card.Content>
  </Card>
  <Card style={{width:"29%", margin:8 ,height:"80%", backgroundColor:"white"}}>
    <Card.Content>
    <MaterialIcons name="manage-accounts" size={50} color="#00ced1" style={{alignItems:"center",display:"flex",justifyContent:"center",paddingLeft:20}} />
      <Text variant="bodyMedium">Add Your Health 
Informatio</Text>
    </Card.Content>
  </Card>
  <Card style={{width:"29%", margin:8, height:"80%", backgroundColor:"white"}}>
    <Card.Content>
    <MaterialIcons name="manage-accounts" size={50} color="#00ced1" style={{alignItems:"center",display:"flex",justifyContent:"center",paddingLeft:20}} />
      <Text variant="bodyMedium">Add 
Appointments</Text>
    </Card.Content>
  </Card>
  </View>

  <View style={{flexDirection:"row", justifyContent:"space-between"}}>
  <Text style={{ fontWeight:"600",fontSize:20, marginLeft:8}}>Your Doctor</Text>
  <Pressable
          
          style={{
            width: 180,
            marginRight:10,
            height:35,
            backgroundColor: "#1e90ff",
            borderRadius: 18,
           
          }}
          onPress={() => navigation.navigate("app")}
        >
          <Text style={{ textAlign: "center", color: "white", fontSize: 16, fontWeight: "bold",padding:5 }}>View Doctor Profile</Text>
        </Pressable>
  </View>
  <View style={{marginTop:4, display:'flex', flexWrap:'wrap', alignItems:'center',justifyContent:"center",  flexDirection:"row"}}>
  <Card style={{width:"90%",padding:20, margin:10, backgroundColor:"white"}}>
    <Card.Content style={styles.avatarContainer}>
   
          <UserAvatar size={60} name="Sri " style={styles.avatar} />
          <View style={styles.userInfo}>
            <Text style={styles.username}>Dr.Sri MD</Text>
            <Text style={{ color: "gray"}}>General Internal Medicine  Age:24</Text>
            <Text style={{ color: "gray"}}>Female Tenkasi</Text>
          </View>
    </Card.Content>
  </Card>
  <Pressable onPress={() => navigation.navigate("Login")} style={{ marginTop: 15 }}
  
  
  > 
   
          <Text style={{
            width: 350,
            backgroundColor: "white",
            color:"#1e90ff",
            textAlign: "center",
            borderRadius: 6,
            marginLeft: "auto",
            marginRight: "auto",
             padding:10,
             flexDirection:"row",
            fontWeight: "bold",
             borderColor: "#1e90ff",
            borderWidth: 1
          }}
          > Log out / Exit</Text>
        </Pressable>
  </View>
    </View>
   </View>
  )
}

export default Homepage

const styles = StyleSheet.create({
  avatarContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  avatar: {
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