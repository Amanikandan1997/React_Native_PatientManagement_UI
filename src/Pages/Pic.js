import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import UserAvatar from 'react-native-user-avatar';

const Pic = () => {
  return (
    <View>
         <UserAvatar size={50} name="John Doe" bgColors={['#ccc', '#fafafa', '#ccaabb']}/>
      <Text>Pic</Text>
    </View>
  )
}

export default Pic

const styles = StyleSheet.create({})