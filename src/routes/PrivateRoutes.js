import { StyleSheet } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Data, Login } from '../screen';
import { Bottomtab } from './Layouts/Index';


const Stack = createNativeStackNavigator();
const PrivateRoutes = () => {
  return (
    <Stack.Navigator initialRouteName="Bottomtab">
    {/* <Stack.Screen name="Login" component={Login} />  */}
<Stack.Screen name='Bottomtab' component={Bottomtab}  options={{
            headerShown: false,
          }}/>
         <Stack.Screen name="Data" component={Data} />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        /> 
         
        {/* <Stack.Screen name="Checkout" component={Checkout} /> */}
        {/* <Stack.Screen name="About" component={About} /> */}
      </Stack.Navigator>
  )
}

export default PrivateRoutes

const styles = StyleSheet.create({})