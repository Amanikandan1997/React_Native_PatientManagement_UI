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
import { useNavigation } from "@react-navigation/native";
import md4now from "../../assets/md4now.png";

const RegisterScreen = () => {
  const navigation = useNavigation();
  const [Name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");


  const validateName = () => {
    if (!Name) {
      Alert.alert("Validation Error", "Name field cannot be empty.");
      return false;
    }
    // Additional email validation logic if needed
    return true;
  };

  const validateEmail = () => {
    if (!email) {
      Alert.alert("Validation Error", "Email field cannot be empty.");
      return false;
    }
    // Additional email validation logic if needed
    return true;
  };

  const validatePhone = () => {
    if (!phone) {
      Alert.alert("Validation Error", "Phone field cannot be empty.");
      return false;
    }
    // Additional phone validation logic if needed
    return true;
  };

  const validatePassword = () => {
    if (!password) {
      Alert.alert("Validation Error", "Password field cannot be empty.");
      return false;
    }
    if (password.length < 8) {
      Alert.alert("Validation Error", "Password must be at least 8 characters long.");
      return false;
    }
    // Additional password validation logic if needed
    return true;
  };

  const validateConfirmPassword = () => {
    if (!confirmPassword) {
      Alert.alert("Validation Error", "Confirm Password field cannot be empty.");
      return false;
    }
    if (confirmPassword !== password) {
      Alert.alert("Validation Error", "Passwords do not match.");
      return false;
    }
    // Additional confirm password validation logic if needed
    return true;
  };

  const handleRegister = () => {
    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isPhoneValid = validatePhone();
    const isPasswordValid = validatePassword();
    const isConfirmPasswordValid = validateConfirmPassword();

    if (isEmailValid && isPhoneValid && isPasswordValid && isConfirmPasswordValid) {
      // Proceed with registration logic
      navigation.navigate("Verify");
      console.log("Registration Successful!");
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
          <Text style={{ fontSize: 25, fontWeight: "300", marginTop: 12, color: "#041E42" }}>Create an account</Text>
        </View>

        <View style={{ marginTop: 10 }}>
          <View style={styles.inputContainer}>
            <MaterialIcons name="manage-accounts" size={24} color="#00ced1" />
            <TextInput
              style={styles.input}
              placeholder="Enter your Email"
              onChangeText={setName}
              value={Name}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>
        </View>

        <View style={{ marginTop: 10 }}>
          <View style={styles.inputContainer}>
            <MaterialIcons name="phone" size={24} color="#00ced1" />
            <TextInput
              style={styles.input}
              placeholder="Enter your Phone"
              onChangeText={setPhone}
              value={phone}
              keyboardType="phone-pad"
            />
          </View>
        </View>

        <View style={{ marginTop: 10 }}>
          <View style={styles.inputContainer}>
            <MaterialIcons name="email" size={24} color="#00ced1" />
            <TextInput
              style={styles.input}
              placeholder="Enter your Email"
              onChangeText={setEmail}
              value={email}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>
        </View>

        <View style={{ marginTop: 10 }}>
          <View style={styles.inputContainer}>
            <MaterialIcons name="lock-person" size={24} color="#00ced1" />
            <TextInput
              style={styles.input}
              placeholder="Enter your Password"
              onChangeText={setPassword}
              value={password}
              secureTextEntry
            />
          </View>
          <Text style={{ color: "gray" }}>Password must be at least 8 characters long</Text>
        </View>

        <View style={{ marginTop: 10 }}>
          <View style={styles.inputContainer}>
            <MaterialIcons name="lock-person" size={24} color="#00ced1" />
            <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              onChangeText={setConfirmPassword}
              value={confirmPassword}
              secureTextEntry
            />
          </View>
        </View>

        <View style={{ marginTop: 10 }}>
          <Pressable onPress={handleRegister} style={styles.button}>
            <Text style={styles.buttonText}>Create Account</Text>
          </Pressable>
        </View>

        <Pressable onPress={() => navigation.navigate("Login")} style={{ marginTop: 15 }}>
          <Text style={{ textAlign: "center", color: "gray", fontSize: 16 }}>Already have an account? Sign in</Text>
        </Pressable>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderColor: "#ECECEC",
    borderWidth: 1,
    height: 38,
    width: "100%",
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 5,
    marginTop: 8
  },
  input: {
    color: "gray",
    width: 300,
    marginLeft: 5
  },
  button: {
    width: 350,
    backgroundColor: "#1e90ff",
    borderRadius: 6,
    marginLeft: "auto",
    marginRight: "auto",
    padding: 15
  },
  buttonText: {
    textAlign: "center",
    color: "white",
    fontSize: 16,
    fontWeight: "bold"
  }
});

export default RegisterScreen;
