import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { useNavigation } from '@react-navigation/native'

const Register = () => {
    const navigation = useNavigation()
    const[isLoggedin,setIsLoggedIn] = useState(false)
  return (
    <View>
     <TouchableOpacity>
        <Text>Click</Text>
     </TouchableOpacity>
    </View>
  )
}

export default Register

const styles = StyleSheet.create({})