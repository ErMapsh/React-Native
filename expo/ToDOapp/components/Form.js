import React, { useState } from 'react'
import { View, FlatList } from 'react-native';
import TouchableOpa from './TouchableOpa';

export default function Form(props) {
    const {ToDo, onpressHandler} = props;

    return (
        <View >
            <FlatList
                data={ToDo}
                renderItem={({ item }) => (
                    <TouchableOpa item={item} onpressHandler={onpressHandler} />
                )}
            />
        </View>
    )
}

