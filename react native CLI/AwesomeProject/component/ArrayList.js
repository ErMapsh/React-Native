import React, {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {listStyle} from '../style';

// when we use render list value like then we got out space list in screen, so recommended this
// u can use scroll view

export default function ArrayList() {
  const [data, setdata] = useState([
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
  return (
    <View style={listStyle.container}>
      <ScrollView>
        {data.map((ListData, index) => {
          return (
            <View key={ListData.id}>
              <Text style={listStyle.text}>{ListData.name}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}
