import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  Button,
} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {IMAGES} from '../assets';

const Book = () => {
  return (
    <SafeAreaView style={styles.mainview}>
      <ScrollView>
        <View
          style={styles.main}>
          <Entypo name="menu" size={30} color={'black'} />
          <Text style={{fontSize: 20, color: 'black', fontWeight: 'bold'}}>
            All Books
          </Text>
          <AntDesign name="search1" size={30} color={'black'} />
        </View>
        <View style={styles.book}>
          <View>
            <TouchableOpacity
              style={{
                backgroundColor: '#fff',
                width: 170,
                borderRadius: 10,
                alignItems: 'center',
                height: 48,
              }}>
              <Text style={{color: 'black', fontSize: 20, marginVertical: 10}}>
                Ebook
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity>
              <Text style={{color: 'black', fontSize: 20}}>Audiobooks</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.second}>
          <View style={styles.book1}>
            <View>
              <Image source={IMAGES.Book1} style={styles.img} />
            </View>
            <View>
              <Image source={IMAGES.Book2} style={styles.img} />
            </View>
          </View>
          <View style={styles.book1}>
            <View>
              <Image source={IMAGES.Book3} style={styles.img} />
            </View>
            <View>
              <Image source={IMAGES.Book4} style={styles.img} />
            </View>
          </View>
          <View style={styles.book1}>
            <View>
              <Image source={IMAGES.Book5} style={styles.img} />
            </View>
            <View>
              <Image source={IMAGES.Book6} style={styles.img} />
            </View>
          </View>
          <View style={styles.button}>
            <Button title='Next page'/>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Book;

const styles = StyleSheet.create({
    main:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
    },
  book: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: `#f6f6f6`,
    width: 320,
    marginHorizontal: 50,
    height: 60,
    alignItems: 'center',
    marginTop: 10,
    borderRadius: 10,
  },
  book1: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 5,
    marginHorizontal: 10,
  },
  img: {
    borderRadius: 15,
    height: 280,
    width: 170,
  },
  second:{
    marginVertical:15,

  },
  mainview:{
    backgroundColor:'white',
  },
  button:{
    marginTop:10,
    marginHorizontal:30,

  }
});
