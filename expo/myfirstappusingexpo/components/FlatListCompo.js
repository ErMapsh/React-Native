import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';

export default function FlatListCompo() {
    const [personinfo, setpersoninfo] = useState([
        { name: "ErMapsh", age: '21', id: "1" },
        { name: "adi", age: '211', id: "2" },
        { name: "mahesh", age: '2112', id: "3" },
        { name: "mestri", age: '2132', id: "4" },
        { name: "daru", age: '2131', id: "5" },
        { name: "paru", age: '2134', id: "6" },
        { name: "karu", age: '2132', id: "7" },
    ])
    return (
        <View>
            {/* here we dont need to specify scrollview and key, beacause flatlist adjust tid*/}
            <FlatList 
                numColumns={2}
                keyExtractor={(item)=> item.id }
                data={personinfo}
                renderItem={({item})=>(
                <Text style={styles.fontColor}>{item.name}</Text>
                )}
            />
        </View>
    )
}

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
        fontSize: 20,
        padding: 32,
        margin: 30
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