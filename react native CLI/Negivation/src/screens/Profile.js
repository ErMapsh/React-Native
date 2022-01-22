import React from 'react';
import {View, Text} from 'react-native';

export default function Profile({route}) {
  /* 2. Get the param */
  const {userName, userEmail, userPassword} = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Of User:</Text>
      <Text>Username: {JSON.stringify(userName)}</Text>
      <Text>Email: {JSON.stringify(userEmail)}</Text>
      <Text>Password: {JSON.stringify(userPassword)}</Text>
    </View>
  );
}
