import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//compo
import BottomNavigater from './src/Navigation/BottomNavigater'
import SplashScreen from "./src/Screens/SplashScreen"


export default function App() {
  const Stack = createNativeStackNavigator();
  const [splash, setsplash] = useState(true);

  //useEffect for splash screen
  useEffect(() => {
    setTimeout(() => {
      setsplash(false)
    }, 2000);
  }, []);
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {splash && <Stack.Screen name="SplashScreen" component={SplashScreen} options={{headerShown: false}} />}
        <Stack.Screen name="BottomNavigater" component={BottomNavigater} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
