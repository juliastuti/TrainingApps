import React, {useState, useEffect, useReducer} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Auth from './page/Auth';
import Login from './page/Login';
import SignUp from './page/SignUp';
import Home from './page/Home';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AuthContext} from './context/AuthContext';

const Stack = createNativeStackNavigator();

const App = () => {
  const authInitState = {
    token: null,
  };

  const authReducer = (state, action) => {
    switch (action.type) {
      case 'RESTORE_TOKEN':
        return {...state, token: action.token};
      case 'LOGIN':
        return {...state, token: action.token};
      case 'SIGN_UP':
        return {...state, token: action.token};
      case 'LOGOUT':
        return {...state, token: null};
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(authReducer, authInitState);
  const getToken = () => {
    AsyncStorage.getItem('TOKEN').then(res => {
      console.log(res);
      if (res) {
        dispatch({type: 'RESTORE_TOKEN', token: res});
      }
    });
  };

  useEffect(() => {
    getToken();
  }, []);

  return (
    <AuthContext.Provider value={[state, dispatch]}>
      <NavigationContainer>
        <Stack.Navigator>
          {state.token == null ? (
            <>
              <Stack.Screen
                name="Auth"
                component={Auth}
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
            </>
          ) : (
            <Stack.Screen
              name="Home"
              component={Home}
              options={{headerShown: false}}
            />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default App;
