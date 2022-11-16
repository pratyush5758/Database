import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';

const Data = () => {
  const route = useRoute();
  console.log(route);
  return (
     <View style={{paddingHorizontal:10}}>
      <View style={{padding:20,shadowColor: "#000",
      marginTop:10,
      backgroundColor:'#fff',
      borderRadius:10,
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 4.84,

elevation: 5,}}>
      <View style={styles.FirstNameContainer}>
        <View>
          <Text style={styles.NameText}>First Name</Text>
          <Text style={styles.text}>{route.params.firstname}</Text>
        </View>
       <View>
        <Text style={styles.NameText}>Last Name</Text>
        <Text style={styles.text}>{route.params.lastname}</Text>
       </View>
      </View>
      <Text style={styles.text}>{route.params.email}</Text>
      <Text style={styles.text}>{route.params.dateofbirth}</Text>
      <Text style={styles.text}>{route.params.phonenumber}</Text>
      <Text style={styles.text}>{route.params.state}</Text>
      <Text style={styles.text}>{route.params.city}</Text>
      <Text style={styles.text}>{route.params.pincode}</Text>
      <Text style={styles.text}>{route.params.plotno}</Text>
      <Text style={styles.text}>{route.params.address}</Text>
      <Text style={styles.text}>{route.params.countryname}</Text>
    </View>
     </View>
  );
};

export default Data;
const styles = StyleSheet.create({
  text: {
    // borderBottomWidth:1,
    marginTop:4,
    fontWeight: 'bold',
  },
  NameText: {
    fontWeight: 'bold',
    color: 'blue',
    fontSize: 17,
  },
  FirstNameContainer:{
    flexDirection:'row',
    justifyContent:'space-between'
  }
});
