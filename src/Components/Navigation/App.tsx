import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import SignUp from '../../Screens/SignUp/SignUp';
import Login from '../../Screens/Login/Login';
import Home from '../../Screens/Home/Home';
import ProductInfo from '../../Screens/ProductInfo/ProductInfo';

const Stack = createNativeStackNavigator();

const ShoppingCart = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator
        screenOptions={{headerShown: false}}
        >
        <Stack.Screen name='login' component={Login} />
        <Stack.Screen name='register' component={SignUp}/>
        <Stack.Screen name='home' component={Home}/>
        <Stack.Screen name='product' component={ProductInfo} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default ShoppingCart