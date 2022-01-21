import React from 'react'
import {Text, View, StyleSheet, TextInput } from 'react-native';

export default function Body() {
    return (
        <View style={styles.forBody}>
            <Text style={styles.fontstyle}>this is my text in body</Text>
            <TextInput></TextInput>
        </View>
    )
}

const styles = StyleSheet.create({
    fontstyle:{
        fontFamily: 'monospace',
        fontWeight: 'bold',
    },
      forBody:{
        backgroundColor: 'yellow',
        padding: 35
      }
})