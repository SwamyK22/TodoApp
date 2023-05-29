import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Settings from './Settings';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import About from './About';
import ScanCard from './ScanCard';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelCome from './welcomPage/WelCome';
import SignUp from './SignUp/SignUp';
import LogIn from './LogIn/LogIn';
import Contacts from './Contacts/Contacts';
import Scanned from './ScannedPage/Scanned';
import Cards from './Cards/Cards';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator()

const CamerPage = () => {
    return (
        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
            <Text style={{fontSize:20, fontWeight:'bold'}}>CamerPage</Text>
        </View>
    )
}

const ProfileSetting = () => {
  return (
        <Tab.Navigator screenOptions={({route}) => ({
            tabBarIcon: ({focused, size, color }) => {
                let iconName;
                if(route.name === 'Cards') {
                    (iconName ="credit-card"), (size = focused ? 25 :20)
                }
                if(route.name === 'Scan Cards') {
                    (iconName ="id-card"), (size = focused ? 25 :20)
                }
                if(route.name === 'Add Cards') {
                    (iconName ="plus-circle"), (size = focused ? 32 : 25), (color=focused ? '#2422E8' : 'gray')
                }
                if(route.name === 'Contacts') {
                    (iconName ="id-badge"), (size = focused ? 25 :20)
                }
                if(route.name === 'Settings') {
                    (iconName ="cog"), (size = focused ? 25 :20)
                }
                
                return <FontAwesome5 name={iconName} size={size} color={color} />
            }
        })}>
            <Tab.Screen name='Cards' component={Cards} options={{header:() => null}}/>
            <Tab.Screen name='Scan Cards' component={ScanCard} options={{headerTintColor: '#2242D8', headerTitleStyle: { fontSize:30, fontWeight:'bold'} }} />
            <Tab.Screen name='Add Cards' component={About} options={{header:() => null}}/>
            <Tab.Screen name='Contacts' component={Contacts} options={{header: () => null}} />
            <Tab.Screen name='Settings' component={Settings} options={{headerTintColor: '#2242D8', headerTitleStyle: { fontSize:30, fontWeight:'bold'} }} />
        </Tab.Navigator>
  )
}
const ScreenNavigation = () =>{
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='profile' component={ProfileSetting} options={{header:() => null}} />
                <Stack.Screen name='welcome' component={WelCome} options={{header: () => null}} />
                <Stack.Screen name='signup' component={SignUp} options={{title: null, headerTintColor:'#2242D8'}}/>
                <Stack.Screen name='login' component={LogIn} options={{title: null, headerTintColor:'#2242D8'}}/>
                <Stack.Screen name='Scanned' component={Scanned} options={{header: () => null}}/>
                <Stack.Screen name='scan' component={CamerPage} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default ScreenNavigation;