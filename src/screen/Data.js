import {View, Text, StyleSheet, Image, ScrollView, Button} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import {IMAGES} from '../assets';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Data = () => {
  const route = useRoute();
  console.log(route);
  return (
    <ScrollView>
    <View style={styles.img}>
          <Image source={IMAGES.Flash} style={styles.img} />
        </View>
      <View >
        <View style={styles.maincontainer}>
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
          <View style={styles.secondcontainer}>
            <View style>
              <Text style={styles.NameText}>Email</Text>
              <Text style={styles.text}>{route.params.email}</Text>
            </View>
            <View>
              <Text style={styles.NameText}>Date OF Birth</Text>
              <Text style={styles.text}>{route.params.dateofbirth}</Text>
            </View>
          </View>
          <View style={styles.thirdcontainer}>
            <View>
              <Text style={styles.NameText}>Phone Number</Text>
              <Text style={styles.text}>{route.params.phonenumber}</Text>
            </View>
            <View>
              <Text style={styles.NameText}>State</Text>
              <Text style={styles.text}>{route.params.state}</Text>
            </View>
          </View>
          <View style={styles.fourthcontainer}>
            <View>
              <Text style={styles.NameText}>City</Text>
              <Text style={styles.text}>{route.params.city}</Text>
            </View>
            <View>
              <Text style={styles.NameText}>Pincode</Text>
              <Text style={styles.text}>{route.params.pincode}</Text>
            </View>
          </View>
          <View style={styles.fivethcontainer}>
            <View>
              <Text style={styles.NameText}>Plot No</Text>
              <Text style={styles.text}>{route.params.plotno}</Text>
            </View>
            <View>
              <Text style={styles.NameText}>Address</Text>
              <Text style={styles.text}>{route.params.address}</Text>
            </View>
          </View>
          <View>
            <Text style={styles.NameText}>Country Name</Text>
            <Text style={styles.text}>{route.params.countryname}</Text>
          </View>
        </View>
        
        <View >
          <View style={styles.button}>
            <Button title="Next" color={'#7460ff'} />
            
            {/* <AntDesign name="arrowright" size={30} color={'black'} /> */}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Data;
const styles = StyleSheet.create({
  text: {
    // borderBottomWidth:1,
    marginTop: 4,
    fontWeight: 'bold',
    // textAlign:'center',
    color: 'black',
    lineHeight: 30,
  },
  NameText: {
    fontWeight: 'bold',
    color: 'blue',
    fontSize: 17,
    marginTop: 10,
    width: 230,
    // textAlign: 'center',
  },
  FirstNameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  secondcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  thirdcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  fourthcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  fivethcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  maincontainer: {
    padding: 20,
    shadowColor: '#000',
    marginTop: -80,
    backgroundColor: '#fff',
    // borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4.84,

    elevation: 5,
    borderTopLeftRadius:25,
    borderTopRightRadius:25
  },
  img: {
    alignItems: 'center',
  },
  button: {
    padding: 10,
    shadowOpacity: 0.25,
    shadowRadius: 4.84,
    elevation: 5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    // alignItems: 'center',
    // flexDirection: 'row',
    // justifyContent:'space-around',
    // width:280
    
  },
});
