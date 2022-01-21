import React, { useState } from "react";
import { StyleSheet, View, Text, Button, TextInput } from "react-native";

export default function Textinput() {
  const [name, setname] = useState(null);
  const [age, setage] = useState(null);
  const [info, setinfo] = useState(false);
  return (
    <View style={styles.header}>
      <TextInput
        multiline
        style={styles.input}
        name="inputName"
        placeholder="e.g. John Twist"
        onChangeText={(val) => {
          setname(val);
        }}
      ></TextInput>

      <TextInput
        style={styles.input}
        keyboardType="numeric"
        name="inputAge"
        placeholder="e.g. 21"
        onChangeText={(val) => {
          setage(val);
        }}
      ></TextInput>
      
      {info && (
        <Text>
          Name:{name} and Age:{age}
        </Text>
      )}

      <View style={styles.buttonContainer}>
        <Button
          title="update Information"
          onPress={() => {
            setinfo(true);
          }}
        />
      </View>
    </View>
  );
}

//we can use style using importing StyleSheet class form react-native package
//we need to import stylesheet and create a stylesheet and wrap object with thier poperties in {} brackets
const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontStyle: "normal",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "green",
  },
  fontColor: {
    backgroundColor: "pink",
    fontWeight: "bold",
    color: "black",
    fontSize: 25,
    padding: 30,
  },
  header: {
    backgroundColor: "white",
    padding: 30,
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
    borderRadius: 4,
  },
});
