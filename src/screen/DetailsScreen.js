import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'



const DetailsScreen = () => {
    const navigation = useNavigation()
    const route = useRoute()
    console.log(route)
  return (
    <View>
    
      <Text>{route.params.pratyuh.id}</Text>
      <Image source={route.params.pratyuh.Image}/>
    </View>
  )
}

export default DetailsScreen

const styles = StyleSheet.create({})