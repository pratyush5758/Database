import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


import Routes from './src/Routes';
import { Data, Home, Login } from './src/screen';

const Stack = createNativeStackNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <Routes/>
    </NavigationContainer>
     
  );
};

export default App;
