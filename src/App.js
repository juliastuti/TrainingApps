import * as React from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const Welcome = ({navigation}) => {
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
        <TouchableHighlight
          style={{backgroundColor: '#1644BD', padding: 12, marginBottom: 16}}
          onPress={() => navigation.navigate('SignUp')}>
          <Text style={{color: 'white', textAlign: 'center'}}>Register</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={{
            borderColor: '#1644BD',
            borderStyle: 'solid',
            borderWidth: 1,
            padding: 12,
            marginBottom: 16,
          }}
          onPress={() => navigation.navigate('Login')}>
          <Text style={{color: '#1644BD', textAlign: 'center'}}>Login</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

const SignUp = ({navigation}) => {
  return (
    <View>
      <TouchableHighlight onPress={() => navigation.navigate('Welcome')}>
        <Text>Sign Up</Text>
      </TouchableHighlight>
    </View>
  );
};

const Login = ({navigation}) => {
  return (
    <View>
      <TouchableHighlight onPress={() => navigation.navigate('Welcome')}>
        <Text>Login</Text>
      </TouchableHighlight>
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{title: 'SignUp'}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{title: 'Login'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
