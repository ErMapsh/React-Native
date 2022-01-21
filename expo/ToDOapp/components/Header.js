import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.Text}>ToDo</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        height: 60,
        backgroundColor: "coral",
    },
    Text:{
        padding: 20,
        fontSize: 18,
        fontWeight: "bold", 
        textAlign:"center",
        color: "black"
    }
});