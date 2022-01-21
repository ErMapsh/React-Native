import React, { useState } from 'react';
import { Alert, StyleSheet, View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import AddTodo from './components/AddTodo';
import Form from './components/Form';
import Header from './components/Header';

export default function App() {
  const [text, settext] = useState("");//default value
  const [ToDo, setToDo] = useState([
    { text: 'die for you', key: 1 },
    { text: 'buy fruits for me', key: 2 },
    { text: 'buy cat is so cute', key: 3 },
    { text: 'i like valorant', key: 4 },
    { text: 'buy for u', key: 5 },
    { text: 'buy for u', key: 6 },
    { text: 'buy for u', key: 7 },
  ])

  //for removing a todo
  const onpressHandler = (key) => {
    setToDo((newList) => {
      return newList.filter((item) => item.key != key)
    })
  }

  //change a text
  const ChangeHandler = (val) => {
    settext(val)
  }

  //submit a todo
  const Submit = () => {
    if (text.length > 3) {//validation for text
      setToDo((PrevToDo) => {
        return [
          { text: text, key: Math.random(0, 1000).toString() },
          ...PrevToDo//means all item from list
        ]
      })
    } else {
      Alert.alert("OOPS!!", "ToDos must be over 3 char long", [
        { text: "Understood" }
      ])
    }
  }


  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
    }}>
      <View style={styles.container}>
        <Header />
        <View style={styles.contain}>
          <AddTodo Submit={Submit} settext={settext} ChangeHandler={ChangeHandler} />
          <Form ToDo={ToDo} onpressHandler={onpressHandler} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  contain: {
    padding: 20,
  },
});
