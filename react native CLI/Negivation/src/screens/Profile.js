import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import { LogBox } from 'react-native';

LogBox.ignoreLogs([
 'Non-serializable values were found in the navigation state',
]);

export default function Profile({route}) {
  /* 2. Get the param */
  const {userName, userEmail, userPassword} = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={style.heaading}>Details Of User</Text>
      <Text style={style.text}>Username: {JSON.stringify(userName)}</Text>
      <Text style={style.text}>Email: {JSON.stringify(userEmail)}</Text>
      <Text style={style.text}>Password: {JSON.stringify(userPassword)}</Text>
      {/* <Text>{JSON.stringify(route.params)}</Text> */}
    </View>
  );
}

const style = StyleSheet.create({
  heaading:{
    fontSize: 25,
    fontWeight: 'bold',
    color: 'red',
  },
  text:{
    margin: 10,
    color: 'black',
    fontWeight: 'bold',
  }
})