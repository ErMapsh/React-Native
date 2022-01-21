import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default function HomeScreen({navigation}) {
  const handleOnClick = CompoName => {
    // console.log(CompoName);
    navigation.navigate(CompoName)
  };

  
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <TouchableOpacity
        style={styles.touch}
        onPress={() => handleOnClick('Compo1')}>
        <Text>Compo1</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.touch}
        onPress={() => handleOnClick('Compo2')}>
        <Text>Compo2</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  touch: {
    backgroundColor: 'lightblue',
    margin: 15,
    padding: 15,
  },
});
