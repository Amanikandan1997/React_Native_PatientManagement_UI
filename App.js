
import { StyleSheet  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/Screens/LoginScreen';
import RegisterScreen from './src/Screens/RegisterScreen';
import VerifyScreen from './src/Screens/VerifyScreen';
import Profilescreen  from "./src/Screens/Profilescreen"
import Homepage from './src/Pages/Homepage';
import PersonalDetails from './src/Pages/PersonalDetails';
import Notification from './src/Pages/Notification';
import Insurance from './src/Pages/Insurance';
import Payment from './src/Pages/Payment';
import Refer from './src/Pages/Refer';



export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>

       
        <Stack.Screen name="Login" component={LoginScreen}   options={{ headerShown: false }} />
        <Stack.Screen name="Reg" component={RegisterScreen}   options={{ headerShown: false }} />
        <Stack.Screen name="profile" component={Profilescreen}   options={{ headerShown: false, headerTitle: 'Patient Dashboard'  }} />
        <Stack.Screen name="Verify" component={VerifyScreen}   options={{ headerShown: true , headerTitle: '' }} />
       

          
      </Stack.Navigator>
    </NavigationContainer>
     
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
