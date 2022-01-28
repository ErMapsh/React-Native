import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

// import screens
import HomeScreen from '../Screens/HomeScreen';
import Profile from '../Screens/Profile';
import Setting from '../Screens/Setting';
import { StatusBar } from 'react-native';


export default function BottomNavigation() {
    const Tab = createMaterialBottomTabNavigator();
  return(
      <Tab.Navigator>
          <Tab.Screen name='HomeScreen' component={HomeScreen}/>
          <Tab.Screen name='Profile' component={Profile}/>
          <Tab.Screen name='Setting' component={Setting}/>
      </Tab.Navigator>
  )
}
