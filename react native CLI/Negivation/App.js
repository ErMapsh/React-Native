import React from 'react';

import {NavigationContainer} from '@react-navigation/native'; // import Navigation
import {createNativeStackNavigator} from '@react-navigation/native-stack'; // import stack naviator

// -----importing component----
import HomeScreen from './src/screens/HomeCompo';
import Compo1 from './src/screens/Compo1';
import Compo2 from './src/screens/Compo2';

const Stack = createNativeStackNavigator(); // create a stack for page nevigate

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerStyle: {backgroundColor: 'lightblue'}}}
        />
        <Stack.Screen
          name="Compo1"
          component={Compo1}
          options={{headerStyle: {backgroundColor: 'blue'}}}
        />
        <Stack.Screen name="Compo2" component={Compo2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
