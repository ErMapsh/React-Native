import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Dimensions,
} from 'react-native';



export default function HomeScreen({navigation}) {

  // const handleOnClick = CompoName => {
  //   console.log(navigation);
  //   // console.log(CompoName);
  //   navigation.navigate(CompoName);
  // };

  // State Variable for storing information
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');

  const SubmitData = () => {
    navigation.navigate('Profile', {
      userName: name,
      userEmail: email,
      userPassword: password,
    });
    // console.log("Data:", name, email, password);
  }

  return (
    // <View style={styles.container}>
    //   <Text>Enter Your Name:</Text>
    //   <TextInput style={Style1.input} />

    //    <TouchableOpacity
    //     style={styles.touch}
    //     onPress={() => handleOnClick('Compo1')}>
    //     <Text>Compo1</Text>
    //   </TouchableOpacity>

    //   <TouchableOpacity
    //     style={styles.touch}
    //     onPress={() => handleOnClick('Compo2')}>
    //     <Text>Compo2</Text>
    //   </TouchableOpacity>
    // </View>

    <View style={styles.container}>
      <Text style={Style1.text}>Enter Your Information</Text>
      <TextInput
        style={Style1.input}
        placeholder="Enter Your Name"
        name="name"
        onChange={val => setname(val)}
      />
      <TextInput
        style={Style1.input}
        placeholder="Enter Your Email"
        name="email"
        onChange={val => setemail(val)}
      />
      <TextInput
        style={Style1.input}
        placeholder="Enter Your Password"
        secureTextEntry={true}
        name="password"
        onChange={val => setpassword(val)}
      />
      <TouchableOpacity onPress={() => SubmitData()}>
        <Text style={Style1.submitBtn}>SUBMIT</Text>
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
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// we can get dimension of user smartphone
const {width} = Dimensions.get('screen');

const Style1 = StyleSheet.create({
  input: {
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 10,
    width: width - 20,
    padding: 15,
    margin: 15,
  },
  text: {
    fontSize: 17,
  },
  submitBtn: {
    backgroundColor: '#1A1A40',
    paddingHorizontal: 40,
    paddingVertical: 20,
    borderRadius: 15,
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
