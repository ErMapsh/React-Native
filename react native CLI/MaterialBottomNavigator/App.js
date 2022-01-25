import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

// importing bottom
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

// importing screens
import About from './src/Screen/About';
import Home from './src/Screen/Home';
import Profile from './src/Screen/Profile';
import Setting from './src/Screen/Setting';

// setup for icon
import Ionicons from "react-native-vector-icons/Ionicons"
export default function App() {
  const Tab = createMaterialBottomTabNavigator();
  return (
    <NavigationContainer shifting={true}>
      <Tab.Navigator initialRouteName='Home' activeColor='white' barStyle={{backgroundColor: '#1A1A40'}}>
        <Tab.Screen name="Home" component={Home} options={{tabBarIcon: ()=> <IconContainer name="home"/> , tabBarColor: 'red'}}/>
        {/* we can also add animation to the tab screen */}
        <Tab.Screen name="Setting" component={Setting} options={{tabBarIcon: ()=> <IconContainer name="cog"/> , tabBarColor: 'orange'}}/>
        <Tab.Screen name="Profile" component={Profile} options={{tabBarIcon: ()=> <IconContainer name="person"/> , tabBarColor: 'purple'}}/>
        <Tab.Screen name="About" component={About} options={{tabBarIcon: ()=> <IconContainer name="help-circle"/> , tabBarColor: 'green'}}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const IconContainer = (props) =>{
  return <Ionicons name={props.name} size={26} color={'white'}/>
}