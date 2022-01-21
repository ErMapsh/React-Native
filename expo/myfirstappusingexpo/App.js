import React from 'react';
import { StyleSheet, View} from 'react-native';
import TouchableCompo from './components/TouchableCompo';

export default function App() {
  return (
    <View>
      <TouchableCompo />
    </View>
  );
}


//we can use style using importing StyleSheet class form react-native package
//we need to import stylesheet and create a stylesheet and wrap object with thier poperties in {} brackets
const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontStyle: 'normal',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "lightgreen"
  },
  fontColor: {
    backgroundColor: 'pink',
    fontWeight: 'bold',
    color: 'black',
    fontSize: 25,
    padding: 30
  },
  header: {
    backgroundColor: 'white',
    padding: 30
  },
  buttonContainer: {
    marginTop: 20,

  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    padding: 9,
    margin: 10,
    width: 200,
    borderRadius: 4
  }

});
