import React, {useEffect, useReducer} from 'react';
import {Button, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AuthContext} from './context';
import {
  AuthScreen,
  FeedScreen,
  HomeScreen,
  LoginScreen,
  MessageScreen,
  MyPageScreen,
  SignUpScreen,
} from './views';
import {AuthReducer} from './reducers';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  const [state, dispatch] = useReducer(AuthReducer, {token: null});
  const handleLogout = () => {
    AsyncStorage.removeItem('TOKEN').then(() => {
      dispatch({type: 'LOGOUT'});
    });
  };
  const getToken = () => {
    AsyncStorage.getItem('TOKEN').then(res => {
      // console.log(res);
      if (res) {
        dispatch({type: 'RESTORE_TOKEN', token: res});
      }
    });
  };

  useEffect(() => {
    getToken();
  }, []);

  const HomeNavigator = () => {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="FeedScreen"
          options={{title: 'TrainingApps', headerTitleAlign: 'center'}}
          component={FeedScreen}
        />
        <Tab.Screen
          name="MessageScreen"
          options={{title: 'TrainingApps', headerTitleAlign: 'center'}}
          component={MessageScreen}
        />
        <Tab.Screen
          name="MyPageScreen"
          options={{
            title: 'MyPageScreen',
            headerTitleAlign: 'center',
            headerRight: () => (
              <Text
                onPress={() => handleLogout()}
                style={{
                  paddingRight: 16,
                  color: '#1644BD',
                  fontWeight: 'bold',
                }}>
                Logout
              </Text>
            ),
          }}
          component={MyPageScreen}
        />
      </Tab.Navigator>
    );
  };

  return (
    <AuthContext.Provider value={[state, dispatch]}>
      <NavigationContainer>
        <Stack.Navigator>
          {state.token == null ? (
            <>
              <Stack.Screen
                name="AuthScreen"
                component={AuthScreen}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="SignUpScreen"
                component={SignUpScreen}
                options={{title: 'SignUp'}}
              />
              <Stack.Screen
                name="LoginScreen"
                component={LoginScreen}
                options={{title: 'Login'}}
              />
            </>
          ) : (
            <Stack.Screen
              name="HomeScreen"
              component={HomeNavigator}
              options={{headerShown: false}}
            />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default App;
