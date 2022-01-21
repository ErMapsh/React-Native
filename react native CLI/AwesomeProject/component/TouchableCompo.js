import React, {useState} from 'react';
import {View, FlatList, Text, TouchableOpacity} from 'react-native';
import {listStyle} from '../style';

export default function FlatListCompo() {
  const [datalist, setdatalist] = useState([
    {id: 1, name: 'mahesh'},
    {id: 2, name: 'mahesh1'},
    {id: 3, name: 'mahesh2'},
    {id: 4, name: 'mahesh3'},
    {id: 5, name: 'mahesh4'},
    {id: 6, name: 'mahesh5'},
    {id: 7, name: 'mahesh6'},
    {id: 8, name: 'mahesh7'},
    {id: 9, name: 'mahesh8'},
    {id: 10, name: 'mahesh9'},
    {id: 11, name: 'mahesh10'},
  ]);

  const click = Id => {
    // console.log(Id);
    setdatalist(PrevData => {
      return PrevData.filter(item => item.id != Id);
    });
  };

  {
    /*
    -----Note:-----
    <TouchableOpacity onPress={hello()}> // This means you are directly invoking the function when the component renders. It is called as soon as the render happens.
    
    <TouchableOpacity onPress={() => this.hello()}> // You are referencing a function to React to call later when the actual event happens.
  */
  }

  return (
    <View style={listStyle.container}>
      <FlatList
        data={datalist}
        renderItem={({item}) => {
          return (
            <TouchableOpacity onPress={() => click(item.id)}>
              <Text style={listStyle.text}>{item.name}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}
