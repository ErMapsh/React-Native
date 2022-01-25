import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {style} from '../style/Style';

export default function Home() {
  const Navigation = useNavigation();

  const handleOnSetting = ()=>{
    Navigation.navigate("Setting")
  }
  const handleOnAbout = ()=>{
    Navigation.navigate("About")
  }
  return (
    <View style={style.container}>
      <TouchableOpacity onPress={()=>{handleOnSetting()}}>
        <Text style={style.btn}>Go to Setting</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{handleOnAbout()}}>
        <Text style={style.btn}>Go to About</Text>
      </TouchableOpacity>
    </View>
  );
}
