import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';

const DetailsScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  console.log(route);
  return (
    <SafeAreaView>
      <View style={styles.icons}>
        <AntDesign name="left" size={25} color={'black'} />
        <Entypo name="dots-three-horizontal" size={25} color={'black'} />
      </View>
      <View>
        <View style={styles.history}>
          <Text style={styles.pre}>{route.params.pratyuh.history}</Text>
        </View>
        <View style={styles.title}>
          <Text style={styles.pretitle}>{route.params.pratyuh.title}</Text>
        </View>
        <View style={styles.publish}>
          <View>
            <Text style={styles.maintext}>
              {route.params.pratyuh.published}
            </Text>
          </View>
          <View>
            <Text style={styles.maintext}>{route.params.pratyuh.date}</Text>
          </View>
        </View>
        <View style={styles.img}>
          <Image source={route.params.pratyuh.Image} style={styles.images} />
        </View>
        <View style={styles.rate}>
          <Text style={styles.prerate}>{route.params.pratyuh.rate}</Text>
          <View style={styles.icon}>
            <Text style={{color: `#ffa500`}}>{route.params.pratyuh.icon}</Text>
            <Text style={{color: `#ffa500`}}>{route.params.pratyuh.icon}</Text>
            <Text style={{color: `#ffa500`}}>{route.params.pratyuh.icon}</Text>
            <Text style={{color: `#ffa500`}}>{route.params.pratyuh.icon}</Text>
            <Text>{route.params.pratyuh.icon}</Text>
          </View>
        </View>
        <View style={styles.review}>
          <Text style={styles.reviewtext}>{route.params.pratyuh.review}</Text>
        </View>
        <View style={styles.primary}>
          <Text style={styles.primarytext}>{route.params.pratyuh.text}</Text>
        </View>
        <View style={styles.footer}>
          <AntDesign name="home" size={30} color={'red'} />
          <AntDesign name="linechart" size={30} />
          <Entypo name="mic" size={30} />
          <Feather name="bookmark" size={30} />
          <Entypo name="user" size={30} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  icons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 5,
  },
  history: {
    marginTop: 10,
    marginHorizontal: 10,
  },
  pre: {
    fontWeight: 'bold',
    color: `#ff7f50`,
  },
  title: {
    marginTop: 10,
    marginHorizontal: 10,
  },
  pretitle: {
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 25,
    letterSpacing: 1,
    color: `#6a5acd`,
  },
  publish: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginTop: 15,
  },
  maintext: {
    fontWeight: 'bold',
    fontSize: 15,
    color: 'black',
  },
  img: {
    marginTop: 30,
    alignItems: 'center',
    // marginHorizontal: 100,
  },
  images: {
    // width: 320,
    // height: 180,
    // borderBottomLeftRadius: 15,
    // borderTopLeftRadius: 15,
    borderRadius: 10,
  },
  icon: {
    flexDirection: 'row',
    marginLeft: 7,
  },
  rate: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginTop: 30,
    alignItems: 'center',
  },
  prerate: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  review: {
    marginHorizontal: 10,
    marginTop: 5,
  },
  reviewtext: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  primary: {
    marginHorizontal: 10,
    marginTop: 15,
  },
  primarytext: {
    fontSize: 15,
    fontWeight: 'bold',
    lineHeight: 25,
    letterSpacing: 1,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginTop: 30,
  },
});
