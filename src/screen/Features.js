import {View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';


const Discover = () => {
    // const navigation = useNavigation()
  return (
    <SafeAreaView>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 10,
          alignItems: 'center',
        }}>
        <Text style={styles.text}> Discover</Text>
        <View style={{flexDirection: 'row', marginRight: 10}}>
          <AntDesign
            name="search1"
            size={20}
            color="black"
            style={styles.icon}
          />
          <AntDesign
            name="bells"
            size={20}
            color="black"
            style={{backgroundColor: '#f0f0f0', borderRadius: 5}}
          />
        </View>
      </View>
      <View style={styles.nav}>
        <Text style={{color: 'black', fontSize: 20, fontWeight: 'bold'}}>
          Nike
        </Text>
        <Text style={{color: 'gray', fontSize: 20, fontWeight: 'bold'}}>
          Addidas
        </Text>
        <Text style={{color: 'gray', fontSize: 20, fontWeight: 'bold'}}>
          Jordan
        </Text>
        <Text style={{color: 'gray', fontSize: 20, fontWeight: 'bold'}}>
          Puma
        </Text>
        <Text style={{color: 'gray', fontSize: 20, fontWeight: 'bold'}}>
          Rebook
        </Text>
      </View>
      <View style={styles.primary}>
        <View style={{flexDirection: 'column', justifyContent: 'space-evenly'}}>
          <Text
            style={{
              transform: [{rotate: '270deg'}],
              fontSize: 15,
              marginBottom: 20,
              fontWeight: 'bold',
            }}>
            New
          </Text>
          <Text
            style={{
              transform: [{rotate: '270deg'}],
              fontSize: 15,
              fontWeight: 'bold',
            }}>
            Features
          </Text>
          <Text
            style={{
              transform: [{rotate: '270deg'}],
              fontSize: 15,
              fontWeight: 'bold',
              marginTop: 20,
            }}>
            Upcoming
          </Text>
        </View>
        <TouchableOpacity
        //  onPress={()=>navigation.navigate('DetailsScreen')}
          style={{
            backgroundColor: '#496EBF',
            height: 325,
            width: 250,
            borderRadius: 20,
            marginTop: 30,
            marginRight: 15,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: 10,
              marginTop: 10,
            }}>
            <Text style={{color: 'white', fontSize: 20}}>NIKE</Text>
            <AntDesign
              name="hearto"
              size={20}
              color="white"
              style={styles.icons}
            />
          </View>
          <Text
            style={{
              color: 'white',
              fontSize: 20,
              marginTop: 10,
              marginLeft: 10,
            }}>
            EPIC-REACT
          </Text>
          <Text
            style={{
              color: 'white',
              fontSize: 20,
              marginLeft: 10,
              marginTop: 10,
            }}>
            &#x24;130.00
          </Text>
          {/* <Image source={require('../Images/shoe.jpg')} style={styles.img} /> */}
          <AntDesign
            name="arrowright"
            color="white"
            size={30}
            style={styles.pra}
          />
        </TouchableOpacity>
        <View
          style={{
            backgroundColor: '#03ABB8',
            height: 325,
            width: 300,
            borderRadius: 20,
            marginTop: 30,
            marginLeft: 30,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: 10,
              marginTop: 10,
            }}>
            <Text style={{color: 'white', fontSize: 20}}>NIKE</Text>
            <AntDesign name="hearto" size={20} color="white" />
          </View>
          <Text
            style={{
              color: 'white',
              fontSize: 20,
              marginTop: 10,
              marginLeft: 10,
            }}>
            EPIC-REACT
          </Text>
          <Text
            style={{
              color: 'white',
              fontSize: 20,
              marginLeft: 10,
              marginTop: 10,
            }}>
            &#x24;130.00
          </Text>
          {/* <Image source={require('../Images/shoe.jpg')} style={styles.img} /> */}
        </View>
      </View>
      <View
        style={{
          marginTop: 25,
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 20,
        }}>
        <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
          More
        </Text>
        <AntDesign name="arrowright" color="black" size={30} />
      </View>
      <View style={{flexDirection:'row',marginTop:20}}>
        <View style={styles.section}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: 10,
              marginVertical: 10,
            }}>
            <Text style={styles.newtext}>NEW</Text>
            <AntDesign
              name="hearto"
              size={20}
              color="black"
              style={styles.icons}
            />
          </View>
          <View>
            {/* <Image source={require('../Images/shoe.jpg')} style={styles.img2} /> */}
            <Text style={{fontWeight: 'bold', textAlign: 'center'}}>
              NIKE AIR-MAX
            </Text>
            <Text style={{fontWeight: 'bold', textAlign: 'center'}}>
              &#x24;130.00
            </Text>
          </View>
        </View>
        <View style={styles.section}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: 10,
              marginVertical: 10,
            }}>
            <Text style={styles.newtext}>NEW</Text>
            <AntDesign
              name="hearto"
              size={20}
              color="black"
              style={styles.icons}
            />
          </View>
          <View>
            <Image source={require('../Images/shoe.jpg')} style={styles.img2} />
            <Text style={{fontWeight: 'bold', textAlign: 'center'}}>
              NIKE AIR-MAX
            </Text>
            <Text style={{fontWeight: 'bold', textAlign: 'center'}}>
              &#x24;130.00
            </Text>
          </View>
        </View>
        <View style={styles.section}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: 10,
              marginVertical: 10,
            }}>
            <Text style={styles.newtext}>NEW</Text>
            <AntDesign
              name="hearto"
              size={20}
              color="black"
              style={styles.icons}
            />
          </View>
          <View>
            {/* <Image source={require('../Images/shoe.jpg')} style={styles.img2} /> */}
            <Text style={{fontWeight: 'bold', textAlign: 'center'}}>
              NIKE AIR-MAX
            </Text>
            <Text style={{fontWeight: 'bold', textAlign: 'center'}}>
              &#x24;130.00
            </Text>
          </View>
        </View>
      </View>
      <View style={{flexDirection:'row', justifyContent:'space-around', marginTop:40}}>
        <AntDesign name='home'size={30} color='red'/>
        <AntDesign name='hearto'size={30} color='black'/>
       <Entypo name='location'size={30} color='black'/>
       <AntDesign name='shoppingcart'size={30} color='black'/>
       <AntDesign name='user'size={30} color='black'/>
      </View>
    </SafeAreaView>
  );
};

export default Discover;
const styles = StyleSheet.create({
  icon: {
    marginRight: 15,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 18,
    color: 'black',
  },
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 20,
    marginTop: 20,
  },
  primary: {
    flexDirection: 'row',
  },
  img: {
    height: 180,
    width: 350,
    marginLeft: 10,
  },
  pra: {
    marginLeft: 200,
  },
  section: {
    
    width: 160,
    height: 200,
    backgroundColor: 'white',
    borderRadius: 10,
    marginLeft: 10,
  },
  newtext: {
    transform: [{rotate: '270deg'}],
    backgroundColor: 'red',
    padding: 12,
    fontWeight: 'bold',
    color: 'black',
  },
  img2: {
    width: 100,
    height: 100,
    marginLeft: 25,
  },
});
