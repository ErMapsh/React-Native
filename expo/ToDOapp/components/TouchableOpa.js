import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function TouchableOpa(props) {
    const { onpressHandler, item } = props
    return (
        <TouchableOpacity onPress={() => { onpressHandler(props.item.key) }}>
            <Text style={styles.list}>{item.text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    list: {
        padding: 16,
        marginTop: 16,
        borderWidth: 1,
        borderStyle: 'dashed',
        borderColor: 'black',
        borderRadius: 10,
    },
});