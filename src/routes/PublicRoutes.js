import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Register } from '../screen';


const Stack = createNativeStackNavigator();
const PublicRoutes = () => {
  return (
    <Stack.Navigator initialRouteName="Register">
  
        <Stack.Screen
          name="Register"
          component={Register}
        />
      </Stack.Navigator>
  )
}

export default PublicRoutes

const styles = StyleSheet.create({})