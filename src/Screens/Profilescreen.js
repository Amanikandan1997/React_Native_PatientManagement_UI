import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { MaterialIcons } from '@expo/vector-icons';
import Homepage from '../Pages/Homepage';
import md4now from "../../assets/md4now.png";
import PersonalDetails from '../Pages/PersonalDetails';
import Insurance from '../Pages/Insurance';
import Refer from '../Pages/Refer';
import Payment from '../Pages/Payment';
import Notification from '../Pages/Notification';
import LoginScreen from './LoginScreen';
import UserAvatar from 'react-native-user-avatar';
import Pic from '../Pages/Pic';
import { useNavigation } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props) => {
  const navigation = useNavigation();
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawerHeader}>
        <View style={styles.avatarContainer}>
          <UserAvatar size={100} name="Manikandan" style={styles.avatar} />
          <View style={styles.userInfo}>
            <Text style={styles.username}>Manikandan</Text>
            <Text style={styles.email}>123 45 678 90</Text>
          </View>
        </View>
      </View>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Logout"
        style={{ padding: 50, paddingBottom: 60 }}
        onPress={() => navigation.navigate("Login")}d
        icon={({ focused, color, size }) => (
          <MaterialIcons
            name={focused ? 'exit-to-app' : 'exit-to-app'}
            size={size}
            color="red" 
          />
        )}
      />
    </DrawerContentScrollView>
  );
};

const Profilescreen = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerPosition="right"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name="Home"
        component={Homepage}
        options={{
          headerShown: true,
          drawerIcon: () => <MaterialIcons style={{ marginLeft: 2 }} name="home" size={24} color="#00ced1" />,
          headerTitle: 'My Profile'
        }}
      />
      <Drawer.Screen
        name="My Insurance Details"
        component={Insurance}
        options={{
          headerShown: true,
          drawerIcon: () => <MaterialIcons style={{ marginLeft: 2 }} name="verified-user" size={24} color="#00ced1" />
        }}
      />
      <Drawer.Screen
        name="Personal Details"
        component={PersonalDetails}
        options={{
          headerShown: true,
          drawerIcon: () => <MaterialIcons style={{ marginLeft: 2 }} name="manage-accounts" size={24} color="#00ced1" />
        }}
      />
      <Drawer.Screen
        name="Payment Details"
        component={Payment}
        options={{
          headerShown: true,
          drawerIcon: () => <MaterialIcons style={{ marginLeft: 2 }} name="payment" size={24} color="#00ced1" />
        }}
      />
      <Drawer.Screen
        name="Notification"
        component={Notification}
        options={{
          headerShown: true,
          drawerIcon: () => <MaterialIcons style={{ marginLeft: 2 }} name="notifications" size={24} color="#00ced1" />
        }}
      />
      <Drawer.Screen
        name="Refer a friend / family"
        component={Refer}
        options={{
          headerShown: true,
          drawerIcon: () => <MaterialIcons style={{ marginLeft: 2 }} name="supervised-user-circle" size={24} color="#00ced1" />
        }}
      />
    </Drawer.Navigator>
  );
};

export default Profilescreen;

const styles = StyleSheet.create({
  drawerHeader: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  avatarContainer: {
    flexDirection: 'coloumn',
    alignItems: 'center'
  },
  avatar: {
    marginRight: 10,
    borderRadius: 50,
    backgroundColor: 'lightgray'
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
});
