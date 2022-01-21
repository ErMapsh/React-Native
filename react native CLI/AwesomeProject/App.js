import React, {useState} from 'react';
import {View} from 'react-native';
import {styles} from './style';

//------components--------
// import InputTextFile from './component/InputTextFile';
// import UseStateHook from './component/UseStateHook';
// import ArrayList from './component/ArrayList';
// import FlatListCompo from './component/FlatListCompo';
// import TouchableCompo from './component/TouchableCompo';
import FetchingData from './component/FetchingData';


export default function App() {
  const [counter, setcounter] = useState(0);
  const [flag, setflag] = useState(false);

  const plus = () => {
    // console.log("Addition");
    setcounter(counter + 1);
    setflag(false);
  };
  const minus = () => {
    if (counter > 0) {
      setcounter(counter - 1);
      setflag(false);
      // console.log("minus");
    } else {
      console.log('Value must greater than 0');
      setflag(true);
    }
  };
  return (
    <View style={styles.container}>
      {/* <UseStateHook plus={plus} minus={minus} flag={flag} counter={counter} /> */}
      {/* <InputTextFile /> */}
      {/* <ArrayList/> */}
      {/* <TouchableCompo /> */}
      <FetchingData/>
    </View>
  );
}
