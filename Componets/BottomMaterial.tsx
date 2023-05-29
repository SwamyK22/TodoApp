import { View, Text } from 'react-native'
import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { NavigationContainer } from '@react-navigation/native';

const Tab = createMaterialBottomTabNavigator();

const HomeScreen =() => {
    return (
        <View>
            <Text>HomeScreen</Text>
        </View>
    )
}
const SettingScreen =() => {
    return (
        <View>
            <Text>SettingScreen</Text>
        </View>
    )
}

const BottomMaterial = () => {
  return (
    <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Setting" component={SettingScreen} />
        </Tab.Navigator>
    </NavigationContainer>
  )
}

export default BottomMaterial