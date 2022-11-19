import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  Button,
  FlatList,
  Dimensions,
} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {IMAGES} from '../assets';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
const Book_1 = [
  {
    id: 'book1',
    Image: IMAGES.Book1,
  },
  {
    id: 'book2',
    Image: IMAGES.Book2,
  },
  {
    id: 'book3',
    Image: IMAGES.Book3,
  },
  {
    id: 'book4',
    Image: IMAGES.Book4,
  },
  {
    id: 'book5',
    Image: IMAGES.Book5,
  },
  {
    id: 'book6',
    Image: IMAGES.Book6,
  },
];
const Book = () => {
    const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.mainview}>
      {/* <ScrollView> */}
      {/* {
        Book_1.map(item=>(
            <>


            </>
        ))
      } */}
       
        <View style={{marginTop:20}}>
          <FlatList
          contentContainerStyle={{paddingBottom:20}}
        ListHeaderComponent={
            <>
                 <View style={styles.main}>
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
            </>
        }
            numColumns={2}
            data={Book_1}
            renderItem={({item,index}) => (
              <TouchableOpacity style={styles.book1} onPress={()=>navigation.navigate('DetailsScreen',{pratyuh:item})}>
                <View>
                  <Image style={styles.img} source={item?.Image} />
                </View>
              </TouchableOpacity>
            )}
            ListFooterComponent={
                <>
  <View style={styles.button}>
          <Button title="Next page" />
        </View>
        <View style={styles.icon}>
          <AntDesign name="home" size={30} color={'red'} />
          <AntDesign name="linechart" size={30} />
          <Entypo name="mic" size={30} />
          <Feather name="bookmark" size={30} />
          <Entypo name="user" size={30} />
        </View>
                </>
            }
          />
          {/* <FlatList
            horizontal={false}
            data={Book_2}
            renderItem={({item}) => (
              <TouchableOpacity>
                <View style={styles.book1}>
                  <Image style={styles.img} source={item?.Image} />
                </View>
              </TouchableOpacity>
            )}
          /> */}
        </View>

        {/* <View style={styles.second}>
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
        </View> */}
      
      {/* </ScrollView> */}
    </SafeAreaView>
  );
};

export default Book;

const styles = StyleSheet.create({
  main: {
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
    marginBottom:20
  },
  book1: {
    // flexDirection: 'row',
    // justifyContent: 'space-evenly',
    marginLeft:14,
    marginBottom:10,
    width: Dimensions.get('window').width/2.2
  },
  img: {
    borderRadius: 15,
    height: 280,
    width: 180,
  },
//   second: {
//     marginVertical: 15,
//   },
  mainview: {
    backgroundColor: 'white',
  },
  button: {
    marginTop: 10,
    marginHorizontal: 30,
  },
  icon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 30,
    marginTop:10
  },
  flatlist:{
    flexDirection: 'row',
    marginTop:15,
    marginHorizontal:20,
  },
});
