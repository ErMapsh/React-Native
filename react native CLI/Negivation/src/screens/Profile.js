import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
//route nad useRoute is same


export default function Profile({route}) {
  // part 2
  // const {userName, userEmail, userPassword} = route.params;

  // part 3
  const routeHook = useRoute();
  // console.log(routeHook)
  const {userName, userEmail, userPassword} = routeHook.params;
  
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={style.heaading}>Details Of User</Text>
      <Text style={style.text}>Username: {userName}</Text>
      <Text style={style.text}>Email: {userEmail}</Text>
      <Text style={style.text}>Password: {userPassword}</Text>
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