import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { About, Home } from '../../screen';
const Tab = createBottomTabNavigator();
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'



const Bottomtab = () => {
  return (
     <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} options={{
          tabBarIcon:({ color, size }) => (
            <Ionicons name='home' size={size} color={color}/>
          ),
          tabBarLabelStyle:{
            fontSize:20
          }
        }}/>
        <Tab.Screen name="About" component={About} options={{
          tabBarIcon:({color, size }) => (
            <AntDesign name='home' size={size} color={color}/>
          ),
          tabBarLabelStyle:{
            fontSize:20
          }
        }}/>
      </Tab.Navigator> 
  )
}

export default Bottomtab