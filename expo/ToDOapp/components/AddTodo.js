import React from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

export default function AddTodo(props) {
    const { Submit, ChangeHandler } = props;
    return (
        <View>
            <Text style={styles.font}>Add:</Text>
            <TextInput
                style={styles.textip}
                placeholder='Add Your Task'
                onChangeText={(val) => { ChangeHandler(val) }} />

            <Button title="Add Todo" onPress={Submit}/>
        </View>
    )
}


const styles = StyleSheet.create({

    font: {
        fontSize: 20,
        fontWeight: "bold",
    },
    textip: {
        borderWidth: 1,
        borderRadius: 4,
        padding: 15,
        marginBottom: 10,
    },
});