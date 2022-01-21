import React, {useState} from 'react';
import {View, FlatList, Text} from 'react-native';
import {listStyle} from '../style';

//while using flatlist, we dont scrollview, specify uniqe key  beacause flatlist manged the uniqe by index id

export default function FlatListCompo() {
  const [datalist, setdatalist] = useState([
    {id: 1, name: "mahesh"},
    {id: 2, name: "mahesh1"},
    {id: 3, name: "mahesh2"},
    {id: 4, name: "mahesh3"},
    {id: 5, name: "mahesh4"},
    {id: 6, name: "mahesh5"},
    {id: 7, name: "mahesh6"},
    {id: 8, name: "mahesh7"},
    {id: 9, name: "mahesh8"},
    {id: 10, name: "mahesh9"},
    {id: 11, name: "mahesh10"},
  ]);

  return (
    <View style={listStyle.container}>
      <FlatList
        numColumns={2} // if we want columns
        data={datalist}
        keyExtractor={item => item.id} // if we want assign specific key as unique key
        // ----rendering List item----
        renderItem={({item}) => {
          return (<Text style={listStyle.text}>{item.name}</Text>);
        }}
        />r
    </View>
  );
}
