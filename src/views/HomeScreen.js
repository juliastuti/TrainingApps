import React, {useContext} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AuthContext} from '../context/AuthContext';

const HomeScreen = ({navigation}) => {
  const [state, dispatch] = useContext(AuthContext);
  const handleLogout = () => {
    AsyncStorage.removeItem('TOKEN').then(() => {
      dispatch({type: 'LOGOUT'});
    });
  };

  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}>Halo!</Text>
      <TouchableOpacity style={styles.button} onPress={() => handleLogout()}>
        <Text style={{color: 'white', textAlign: 'center'}}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  wrapper: {
    padding: 16,
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 20,
    alignContent: 'center',
  },
  button: {
    backgroundColor: '#1644BD',
    padding: 12,
    marginBottom: 16,
    marginTop: 16,
  },
});
