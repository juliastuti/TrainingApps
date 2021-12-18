import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default function Auth({navigation}) {
  return (
    <View
      style={{
        display: 'flex',
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 16,
      }}>
      <View style={{marginBottom: 16}}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'normal',
            color: 'black',
            textAlign: 'center',
            marginBottom: 40,
          }}>
          Training App
        </Text>
        <TouchableOpacity
          style={{backgroundColor: '#1644BD', padding: 12, marginBottom: 16}}
          onPress={() => navigation.navigate('SignUp')}>
          <Text style={{color: 'white', textAlign: 'center'}}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderColor: '#1644BD',
            borderStyle: 'solid',
            borderWidth: 1,
            padding: 12,
            marginBottom: 16,
          }}
          onPress={() => navigation.navigate('Login')}>
          <Text style={{color: '#1644BD', textAlign: 'center'}}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
