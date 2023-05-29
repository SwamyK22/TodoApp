import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from './Login';
import Home from './Home';

const Stack = createNativeStackNavigator();

const LogNavApp = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='login' component={Login} options={{header:() => null}} />
            <Stack.Screen name='home' component={Home} options={{header:() => null}}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default LogNavApp