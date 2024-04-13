import React, { useState, useRef } from 'react';
import { View, TextInput, Button, Modal, Text, TouchableOpacity ,Pressable} from 'react-native';
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';


const OTPScreen = () => {
  const navigation = useNavigation();
  const [otp1, setOtp1] = useState('');
  const [otp2, setOtp2] = useState('');
  const [otp3, setOtp3] = useState('');
  const [otp4, setOtp4] = useState('');
  const [isVerified, setIsVerified] = useState(false);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  // Refs for focusing on the next input field
  const otp2Ref = useRef(null);
  const otp3Ref = useRef(null);
  const otp4Ref = useRef(null);

  const handleVerifyOTP = () => {
    // Combine OTP digits
    const enteredOTP = otp1 + otp2 + otp3 + otp4;

    // Here you can add your logic to verify the OTP
    // For demonstration, I'm just checking if the OTP is '1234'
    if (enteredOTP === '1234') {
      setIsVerified(true);
      setShowSuccessAlert(true);
    } else {
      setShowSuccessAlert(false);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', backgroundColor: "white", alignItems: 'center' }}>
      <View style={{ alignItems: "center" }}>
        <Text
          style={{
            fontSize: 25,
            fontWeight: "500",
            marginTop: 10,
            color: "#041E42",
          }}
        >
        Verify Code
        </Text>
        <Text>Please enter the code we just sent the email</Text>
        <Text style={{color:"#1e90ff"}}>mani@kitecareer.com</Text>
        </View>
      <View style={{ flexDirection: 'row',padding:20 }}>
        <TextInput
          style={{ marginRight: 10, paddingHorizontal: 10, height: 40, width: 50, borderColor: 'gray', borderWidth: 1,borderRadius:10,height:50 }}
          placeholder="0"
          keyboardType="numeric"
          maxLength={1}
          value={otp1}
          onChangeText={text => {
            setOtp1(text);
            if (text.length === 1) otp2Ref.current.focus();
          }}
        />
        <TextInput
          ref={otp2Ref}
          style={{ marginRight: 10, paddingHorizontal: 10, height: 40, width: 50, borderColor: 'gray', borderWidth: 1 ,borderRadius:10,height:50}}
          placeholder="0"
          keyboardType="numeric"
          maxLength={1}
          value={otp2}
          onChangeText={text => {
            setOtp2(text);
            if (text.length === 1) otp3Ref.current.focus();
          }}
        />
        <TextInput
          ref={otp3Ref}
          style={{ marginRight: 10, paddingHorizontal: 10, height: 40, width: 50, borderColor: 'gray', borderWidth: 1 ,borderRadius:10,height:50}}
          placeholder="0"
          keyboardType="numeric"
          maxLength={1}
          value={otp3}
          onChangeText={text => {
            setOtp3(text);
            if (text.length === 1) otp4Ref.current.focus();
          }}
        />
        <TextInput
          ref={otp4Ref}
          style={{ paddingHorizontal: 10, height: 40, width: 50, borderColor: 'gray', borderWidth: 1,borderRadius:10,height:50 }}
          placeholder="0"
          keyboardType="numeric"
          maxLength={1}
          value={otp4}
          onChangeText={text => setOtp4(text)}
        />
      </View>
      <Text>Didn’t receive OTP?</Text>
        <Text style={{color:"#1e90ff"}}>Resend code</Text>

      <Pressable  title="Verify OTP"
        onPress={handleVerifyOTP}
        disabled={!otp1 || !otp2 || !otp3 || !otp4 || isVerified}style={{ marginTop: 15 }}>
          <Text style={{
            width: 350,
            backgroundColor: "#1e90ff",
            color:"white",
            textAlign: "center",
            borderRadius: 6,
            marginLeft: "auto",
            marginRight: "auto",
           
            padding: 15,
            borderColor: "#1e90ff",
            borderWidth: 1
          }}>Verify</Text>
        </Pressable>
      <Modal
        animationType="slide"
        transparent={true}
        visible={showSuccessAlert}
        onRequestClose={() => setShowSuccessAlert(false)}
      >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <View style={{ backgroundColor: 'white', padding: 20, alignItems: 'center', borderRadius: 10 ,width:300}}>

            <MaterialIcons style={{ marginLeft: 8 }} name="verified" size={90} color="#008000" />
            <Text style={{ fontSize: 16, fontWeight: 'bold', alignItems: 'center' }}>Congrats! </Text>
            <Text style={{ fontSize: 16, fontWeight: 'bold', alignItems: 'center' }}>Your MD4Now account</Text>
            <Text style={{ fontSize: 16, fontWeight: 'bold', alignItems: 'center' }}>created successfully.</Text>
            <TouchableOpacity onPress={() => setShowSuccessAlert(false)} style={{ marginTop: 20 }}>
            <Pressable onPress={() => navigation.navigate("Login")} style={{ marginTop: 15 }}>
          <Text style={{
            width: 90,
            backgroundColor: "#1e90ff",
            color:"white",
            textAlign: "center",
            borderRadius: 6,
            marginLeft: "auto",
            marginRight: "auto",
           
            padding: 15,
            borderColor: "#1e90ff",
            borderWidth: 1
          }}>Login</Text>
        </Pressable>
              <Text style={{ color: 'blue', fontSize: 16 ,textAlign:"center" }}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default OTPScreen;
