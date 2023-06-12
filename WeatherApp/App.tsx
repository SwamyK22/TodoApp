
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Flash from './src/screens/Flash';
import WeatherApp from './src/screens/WeatherApp';

const Stack = createNativeStackNavigator()

export default function WeatherMainApp() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='flash' component={Flash} options={{header: () => null}} />
        <Stack.Screen name='Home' component={WeatherApp} options={{header: () => null}} />
      </Stack.Navigator>
    </NavigationContainer>
  )
  }