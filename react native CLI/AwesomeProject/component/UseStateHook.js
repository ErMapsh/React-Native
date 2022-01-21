import React from 'react';
import {Text, View, StatusBar, TouchableOpacity} from 'react-native';
import {styles} from '../style';

export default function UseStateHook(props) {
  const {minus, plus, flag, counter} = props;
  return (
    <>
      <View style={styles.container}>
        <StatusBar backgroundColor={'#041562'} />

        {/* minus */}
        <TouchableOpacity
          onPress={() => {
            minus();
          }}>
          <View>
            <Text style={styles.button}>-</Text>
          </View>
        </TouchableOpacity>

        <Text style={styles.Text}>{counter}</Text>

        {/* plus */}
        <TouchableOpacity
          onPress={() => {
            plus();
          }}>
          <View>
            <Text style={styles.button}>+</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        {flag && <Text style={styles.Text}>Value must greater than 1</Text>}
      </View>
    </>
  );
}
