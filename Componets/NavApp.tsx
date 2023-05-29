import * as React from 'react';
import { View, Text, Button, Alert, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
       <View>
        <Text style={{
           fontSize: 30
        }}>Hello</Text>
       </View>
        <Text style={{
          fontSize: 20,
          fontWeight: 'bold',
          marginBottom: 20,
          marginTop: 10
        }}>Welcome to Store</Text>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Details')}
        />
      </View>
    );
  }
  function DetailsScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button
          title="Go to Home... again"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    );
  }

const Stack = createNativeStackNavigator();

function NavApp() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default NavApp;