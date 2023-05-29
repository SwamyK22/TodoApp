import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const Screen1 = () => {
    return (
        <View>
            <Text>Screen1</Text>
        </View>
    )
}

const Screen2 = () =>{
    return(
        <View>
            <Text>Scren2</Text>
        </View>
    )
}

const BottomTabs = () => {

  return (
    <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name="Screen-1" component={Screen1} />
            <Tab.Screen name="Screen-2" component={Screen2} />
        </Tab.Navigator>
    </NavigationContainer>
  )
}

export default BottomTabs;