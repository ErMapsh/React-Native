import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {style} from '../../styles/HomeScreenStyle';

import {useNavigation} from '@react-navigation/native';

export default function HomeScreen() {
  const Navigation = useNavigation();

  const HandleSetting = () => {
    Navigation.navigate('Setting');
  };
  const HandleProfile = () => {
    Navigation.navigate('Profile');
  };
  return (
    <View style={style.container}>
      <TouchableOpacity
        onPress={() => {
          HandleSetting();
        }}>
        <Text style={style.btn}>Setting</Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        onPress={() => {
          HandleProfile();
        }}>
        <Text style={style.btn}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
}
