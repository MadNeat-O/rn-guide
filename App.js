import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={{padding:30}}>
      <View
        style={{
          flexDirection:'row',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
        <TextInput
          placeholder="Enter your goal"
          style={{ width: '80%', borderColor:'black', borderWidth:1, padding:10 }}
        />
        <Button title="Add" />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
