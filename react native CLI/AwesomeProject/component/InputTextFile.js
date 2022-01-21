import React, {useState} from 'react';
import {View, TextInput, Text} from 'react-native';
import {styles} from '../style';

export default function InputTextFile() {
  const [text, settext] = useState(null);
  return (
    <View>
      <Text style={styles.Inputlabel}>Name:</Text>
      <TextInput
        style={styles.textinput}
        placeholder="Enter Your Text"
        onChangeText={val => {
          settext(val);
        }}
      />
      <View>
        <Text style={styles.Text}>{text}</Text>
      </View>
    </View>
  );
}
