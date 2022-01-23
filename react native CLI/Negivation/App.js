import React from 'react';

import {NavigationContainer} from '@react-navigation/native'; // import Navigation
import {createNativeStackNavigator} from '@react-navigation/native-stack'; // import stack naviator

// -----importing component----
import HomeScreen from './src/screens/HomeCompo';
// import Compo1 from './src/screens/Compo1';
// import Compo2 from './src/screens/Compo2';
import Profile from './src/screens/Profile';

const Stack = createNativeStackNavigator(); // create a stack for page nevigate

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerStyle: {backgroundColor: 'lightblue'}}}
        />

        {/* ------part1----------- */}
        {/*
         <Stack.Screen
          name="Compo1"
          component={Compo1}
          options={{headerStyle: {backgroundColor: 'blue'}}}
        />
        <Stack.Screen name="Compo2" component={Compo2} /> */}

        {/* part2 of  Nevigation*/}
        <Stack.Screen name="Profile" component={Profile} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
