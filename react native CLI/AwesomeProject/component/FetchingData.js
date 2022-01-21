import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {
  FlatList,
  View,
  Image,
  StyleSheet,
  Text,
  ScrollView,
} from 'react-native';
import {albumsurl} from '../src/utils/url';

// we need axios package for fetching data
export default function FetchingData() {
  // State variables
  const [data, setdata] = useState([]);
  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = async () => {
    try {
      const response = await axios.get(albumsurl);
      setdata(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  // console.log('data: ', data != [] ? 'yes' : 'no');
  return (
    <View style={styles.container}>
      <ScrollView>
        {data.map(item => {
          return (
            <View style={styles.box} key={item.id}>
              <Image style={styles.card} source={{uri: item.url}} />
              <Text style={styles.text}>{item.title}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  box: {
    // borderWidth: 1,
    borderRadius: 20,
    backgroundColor: 'lightblue',
    margin: 15,
    shadowOffset:{
      width: 0, 
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 5,
  },
  card: {
    // borderWidth: 1,
    borderRadius: 20,
    margin: 14,
    height: 300,
    backgroundColor: '#E60965',
  },
  text: {
    padding: 14,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

// {"albumId": 1,
// "id": 1,
// "thumbnailUrl": "https://via.placeholder.com/150/92c952",
//  "title": "accusamus beatae ad facilis cum similique qui sunt",
//  "url": "https://via.placeholder.com/600/92c952"}
