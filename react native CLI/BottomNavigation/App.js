import React from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

// setup for bottom navigator
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

//importing screen
import HomeScreen from './src/Screens/HomeScreen';
import ProfileScreen from './src/Screens/ProfileScreen';
import SettingScreen from './src/Screens/SettingScreen';

// for icon setup
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: () => <BottomIcon name="home" />,
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: () => <BottomIcon name="person" />,
          }}
        />
        <Tab.Screen
          name="Setting"
          component={SettingScreen}
          options={{
            tabBarIcon: () => <BottomIcon name="cog" />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const BottomIcon = props => {
  return <Ionicons name={props.name} size={25}/>;
};
