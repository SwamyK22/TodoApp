import { View, Text, StyleSheet } from 'react-native'
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import General from './General';
import Display from './Display';
import Links from './Links';


const Tab = createMaterialTopTabNavigator();

const styles = StyleSheet.create({
    xIcon:{
        width:35,
        height:35,
        backgroundColor:'#EAEDFB',
        borderRadius:18,
        alignItems:'center',
        justifyContent:'center'
    },
    saveBox:{
        width:70,
        height:30,
        backgroundColor:'#EAEDFB',
        borderRadius:15,
        alignItems:'center',
        justifyContent:'center'
    },
    topContainer:{
        marginHorizontal:10,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        borderBottomWidth:1,
        borderColor:'#0000001a',
        height:65
    }
})

const EditCard = () => {
  return (
    <View style={{marginTop:30, flex:1}}>
      <View style={styles.topContainer}>
        <View style={styles.xIcon}>
            <FontAwesome5 name='times' style={{color:'#2242D8'}} size={20}/>
        </View>
        <Text style={{color:'#2242D8', fontSize:18, fontWeight:'bold'}}>Edit card</Text>
        <View style={styles.saveBox}>
            <Text style={{color:'#2242D8', fontSize:12, fontWeight:'bold'}}>Save</Text>
        </View>
      </View>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor:'#2242D8',
          tabBarInactiveTintColor:'#8D8D8D',
          swipeEnabled:false,
          tabBarLabelStyle: {
            backgroundColor: '#EEEEEE',
            width:100,
            padding:10,
            borderRadius:20,
            fontWeight:'bold'
          },
        }}
        sceneContainerStyle={{
          backgroundColor:'#ffff'
        }}
      >
        <Tab.Screen name='General' component={General} />
        <Tab.Screen name='Display' component={Display} />
        <Tab.Screen name='Links' component={Links} />
      </Tab.Navigator>
    </View>
  )
}

export default EditCard