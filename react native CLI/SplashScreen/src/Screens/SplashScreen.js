import React from 'react';
import {View, Text, StatusBar, Image, StyleSheet} from 'react-native';


export default function SplashScreen() {
  return (
    <View style={style.container}>
      <StatusBar hidden={true} />
      <View></View>
      <View>
      <Image source={require('../../assets/images/download.png')} style={style.image}/>
        <Text style={style.text}>Welcome</Text>
      </View>
      <View>
        <Text style={style.text}>Made By ErMapsh</Text>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'black',
  },
  text: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
  image:{
    height: 150,
    width: 150,
  },
  LogoContainer:{
    justifyContent: 'center'
  }
});
