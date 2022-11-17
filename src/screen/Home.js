import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Home = () => {
  const navigation = useNavigation()
  return (
    <View>
      <Text>Home Screen</Text>
      <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
        <Text>Click</Text>
     </TouchableOpacity>
    
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})