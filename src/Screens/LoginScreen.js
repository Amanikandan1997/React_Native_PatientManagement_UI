import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  KeyboardAvoidingView,
  TextInput,
  Pressable,
  StatusBar,
  Alert
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import md4now from "../../assets/md4now.png";
import axios from 'axios'; // Import Axios



const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Make sure both email and password are entered
  //   if (!email || !password) {
  //     Alert.alert('Error', 'Please enter both email and password');
  //     return;
  //   }

  //   // Dummy API URL
  //   const apiUrl = 'https://26c71b4308494f8da5266cb14ad0336e.api.mockbin.io/';

  //   // Send login request
  //   axios.get(apiUrl, { email, password })
  //     .then(response => {
  //       // Handle successful login response here
  //       console.log('Login successful:', response.data);
  //       navigation.navigate("verify");
      
  //       // You can navigate to another screen or do something else here
  //     })
  //     .catch(error => {
  //       // Handle login error
  //       console.error('Login error:', error);
  //       Alert.alert('Error', 'Login failed. .');
  //     });



   // Check if the entered credentials are correct
   if (email === "admin" && password === "1234") {
    // Navigate to the profile screen
    navigation.navigate("profile");
  } else {
    // If the credentials are incorrect, show an error message
    Alert.alert('Error', 'Invalid email or password. Please try again.');
  }
  };

  return (
  
    <View style={{ flex: 1, backgroundColor: "white", alignItems: "center" }}>
      <StatusBar barStyle="dark-content" />
      <View>
        <Image source={md4now} style={{ width: 150, height: 60, marginTop: 90 }} />
      </View>

      <KeyboardAvoidingView>
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              fontSize: 25,
              fontWeight: "300",
              marginTop: 12,
              color: "#041E42"
            }}
          >
            Hi, Welcome Back
          </Text>
        </View>

        <View style={{ marginTop: 10 }}>
          <Text style={{ fontWeight: "bold" }}>Email / Phone</Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              backgroundColor: "white",
              borderColor: "#ECECEC",
              borderWidth: 1,
              height: 38,
              width: "100%",
              paddingHorizontal: 3,
              paddingVertical: 2,
              borderRadius: 5,
              marginTop: 8
            }}
          >
            <MaterialIcons style={{ marginLeft: 8 }} name="email" size={24} color="#00ced1" />
            <TextInput
              style={{
                color: "gray",
                width: 300
              }}
              placeholder="Enter your Email"
              onChangeText={setEmail}
              value={email}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>
        </View>

        <View style={{ marginTop: 10 }}>
          <Text style={{ fontWeight: "bold" }}>Password</Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              backgroundColor: "white",
              borderColor: "#ECECEC",
              borderWidth: 1,
              height: 38,
              width: "100%",
              paddingHorizontal: 8,
              paddingVertical: 2,
              borderRadius: 5,
              marginTop: 8
            }}
          >
            <MaterialIcons style={{ marginLeft: 2 }} name="lock-person" size={24} color="#00ced1" />
            <TextInput
              secureTextEntry={true}
              style={{
                color: "gray",
                width: 300
              }}
              placeholder="Enter your Password"
              onChangeText={setPassword}
              value={password}
            />
          </View>
        </View>

        <View style={{ marginTop: 10, marginLeft: 230 }}>
          <Text style={{ color: "#007FFF", fontWeight: "500" }}>Forgot Password</Text>
        </View>
        <View style={{ marginTop: 10 }} />

        <Pressable
          onPress={handleLogin}
          style={{
            width: 350,
            backgroundColor: "#1e90ff",
            borderRadius: 6,
            marginLeft: "auto",
            marginRight: "auto",
            padding: 15
          }}
        >
          <Text style={{ textAlign: "center", color: "white", fontSize: 16, fontWeight: "bold" }}>Login</Text>
        </Pressable>

        <Pressable onPress={() => navigation.navigate("Reg")} style={{ marginTop: 15 }}>
          <Text style={{ textAlign: "center", color: "gray", fontSize: 16 }}>Don't have an account? Sign Up</Text>
        </Pressable>

        <Pressable
          onPress={() => navigation.navigate("Reg")}
          style={{
            width: 350,
            backgroundColor: "white",
            borderRadius: 6,
            marginLeft: "auto",
            marginRight: "auto",
            margin: 20,
            padding: 15,
            borderColor: "#1e90ff",
            borderWidth: 1
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: "#1e90ff",
              fontSize: 16,
              fontWeight: "bold"
            }}
          >
            Create an account
          </Text>
        </Pressable>
      </KeyboardAvoidingView>
    </View>
   
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
