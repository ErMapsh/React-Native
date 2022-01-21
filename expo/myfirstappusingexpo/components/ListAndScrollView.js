import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView} from 'react-native';
export default function ListAndScrollView() {
    const [personinfo, setpersoninfo] = useState([
        { name: "ErMapsh", age: '21' , key:"1"},
        { name: "ErMapsh1", age: '211' , key:"2"},
        { name: "ErMapsh12", age: '2112' , key:"3"},
        { name: "ErMapsh31", age: '2132' , key:"4"},
        { name: "ErMapsh32", age: '2131' , key:"41"},
        { name: "ErMapsh33", age: '2134' , key:"411"},
        { name: "ErMapsh34", age: '2132' , key:"412"},
    ])

    return (
        <View>
            <ScrollView>
            {personinfo.map((person) => {
                // if (person.name != "ErMapsh") {//if specific name not valid
                    return (//every function return something or none
                        <View>
                            <Text style={styles.fontColor} key={person.key}>{person.name} and {person.age}</Text>
                        </View>
                    )
                // }
            })}
            </ScrollView>
        </View>
    )
}


//we can use style using importing StyleSheet class form react-native package
//we need to import stylesheet and create a stylesheet and wrap object with thier poperties in {} brackets
const styles = StyleSheet.create({
    container: {
      flex: 1,
      fontStyle: 'normal',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: "green"
    },
    fontColor: {
      backgroundColor: "lightpink",
      fontWeight: 'bold',
      color: 'black',
      fontSize: 25,
      padding: 30, 
      margin: 25
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
