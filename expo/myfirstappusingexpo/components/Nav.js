import React from 'react'
import {Text, View, StyleSheet } from 'react-native';

export default function Nav() {
    return (
        <View style={styles.forNav}>
            <Text style={styles.FontPoperty}>this is my text in nav that i change using a style</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    FontPoperty:{
        color: "red",
        fontWeight: "bold",
        fontSize: 40
    },
    forNav:{
        backgroundColor: 'black',
        padding: 25
      }
})