import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Flash = ({navigation}) => {
    setTimeout(() => {
        navigation.navigate('Home');
    },3000);
  return (
    <View style={styles.mainContainer}>
      <Image source={require('../../assets/weather-app.png')} style={{width:100, height:100}}/>
      <Image source={require('../../assets/weatherApi.png')} style={{width:100, height:100, position:'absolute', bottom:0}}/>
    </View>
  )
}

export default Flash

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#ffffff'
    }
})