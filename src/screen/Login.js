import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  Button,
} from 'react-native';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import { IMAGES } from '../assets';

const Login = () => {
  
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [dateOfbirth, setDateofbirth] = useState();
  const [phoneNumber, setPhonenumber] = useState();
  const [state, setState] = useState();
  const [city, setCity] = useState();
  const [pincode, setPincode] = useState();
  const [plotNo, setPlotno] = useState();
  const [address, setAddress] = useState();
  const [countryName, setCountryname] = useState();
  // console.log(firstName);
  // console.log(lastName);
  // console.log(email);
  // console.log(dateOfbirth);
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{backgroundColor:'black'}}>
    <ScrollView>

      <View style={styles.main}>
        <AntDesign name="arrowleft" size={30} color='white' onPress={()=>navigation.goBack()}/>
        <Text style={{marginLeft: 60, fontWeight: 'bold', fontSize: 20, color:'white'}}>
          Create New Account
        </Text>
      </View>
      <View style={{alignItems:'center'}}>
        <Image source={IMAGES.LOGIN} style={styles.img}/>
      </View>
      <View style={styles.second}>
        <Text style={styles.text}>FIRST NAME</Text>
        <TextInput
          style={styles.input}
          value={firstName}
          onChangeText={fn => setFirstName(fn)}
        />
      </View>
      <View style={styles.second}>
        <Text style={styles.text}>LAST NAME</Text>
        <TextInput
          style={styles.input}
          value={lastName}
          onChangeText={fn => setLastName(fn)}
        />
      </View>
      <View style={styles.second}>
        <Text style={styles.text}>EMAIL</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={fn => setEmail(fn)}
        />
      </View>
      <View style={styles.second}>
        <Text style={styles.text}>DATE OF BIRTH</Text>
        <TextInput
          style={styles.input}
          value={dateOfbirth}
          onChangeText={fn => setDateofbirth(fn)}
        />
      </View>
      <View style={styles.second}>
        <Text style={styles.text}>PHONE NUMBER</Text>
        <TextInput
          style={styles.input}
          value={phoneNumber}
          onChangeText={fn => setPhonenumber(fn)}
          keyboardType={'number-pad'}
        />
      </View>
      <View style={styles.second}>
        <Text style={styles.text}>STATE</Text>
        <TextInput
          style={styles.input}
          value={state}
          onChangeText={fn => setState(fn)}
          
        />
      </View>
      <View style={styles.second}>
        <Text style={styles.text}>CITY</Text>
        <TextInput
          style={styles.input}
          value={city}
          onChangeText={fn => setCity(fn)}
        />
      </View>
      <View style={styles.second}>
        <Text style={styles.text}>PINCODE</Text>
        <TextInput
          style={styles.input}
          value={pincode}
          onChangeText={fn => setPincode(fn)}
          keyboardType={'number-pad'}
        />
      </View>
      <View style={styles.second}>
        <Text style={styles.text}>PLOT NO</Text>
        <TextInput
          style={styles.input}
          value={plotNo}
          onChangeText={fn => setPlotno(fn)}
        />
      </View>
      <View style={styles.second}>
        <Text style={styles.text}>ADDRESS</Text>
        <TextInput
          style={styles.input}
          value={address}
          onChangeText={fn => setAddress(fn)}
        />
      </View>
      <View style={styles.second}>
        <Text style={styles.text}>COUNTRY NAME</Text>
        <TextInput
          style={styles.input}
          value={countryName}
          onChangeText={fn => setCountryname(fn)}
        />
      </View>
      <View style={styles.third}>
        <TextInput style={styles.textinput} />
        <Text style={{marginLeft: 10, textAlign: 'center', fontWeight: 'bold', color:'white'}}>
          By signing up, you agree to Terms of use{' '}
        </Text>
      </View>
      {/* <TouchableOpacity
       onPress={()=>navigation.navigate('Data',{firstname:firstName,lastname:lastName,email:email,dateofbirth:dateOfbirth,phonenumber:phoneNumber,state:state,city:city,pincode:pincode,plotno:plotNo,address:address,countryname:countryName})}
        style={{
          backgroundColor: '#F93C64',
          marginHorizontal: 40,
          alignItems: 'center',
          marginTop: 20,
          borderRadius: 10,
          marginTop: 40,
        }}>
        <Text style={{color: 'white', paddingVertical: 10, fontSize: 20}}>
          Continue
        </Text>
      </TouchableOpacity> */}
      <View style={{paddingVertical:20}}>

      <Button
      onPress={()=>navigation.navigate('Data',{firstname:firstName,lastname:lastName,email:email,dateofbirth:dateOfbirth,phonenumber:phoneNumber,state:state,city:city,pincode:pincode,plotno:plotNo,address:address,countryname:countryName})}
        title='Continue'
        disabled={!firstName || !lastName || !email || !dateOfbirth || !phoneNumber || !state || !city || !pincode || !plotNo || !address || !countryName ?true:false}
      />
      </View>
    </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
    marginVertical: 20,
  },
  input: {
    borderWidth: 1,
    width: 370,
    marginHorizontal: 20,
    marginTop: 10,
    borderRadius:5,
    color:'white',
    borderColor:'white',
  },
  text: {
    marginHorizontal: 20,
    color: 'white',
  },
  second: {
    marginVertical: 10,
  },
  textinput: {
    borderWidth: 1,
    width: 20,
    height: 10,
    color:'white',
    borderColor:'white',

    borderRadius: 5,
  },
  third: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
    marginTop: 20,
  },
  img:{
    
    
  }
});
