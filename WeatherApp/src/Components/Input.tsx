import { StyleSheet, Image, View, TextInput, Text } from 'react-native'
import React from 'react' 

const Input = ({placeholder}) => {
  return (
    <View style={styles.container}>
      <TextInput placeholder={placeholder} placeholderTextColor='#ffffff99' style={styles.input}/>
      <Text style={{color:'#ffffff', fontWeight:'bold', fontSize:20}}>&deg;C</Text>
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
    input:{
        color:'#ffff',
        width:'80%',
        backgroundColor:'#e3f4fe99',
        borderRadius:20,
        paddingHorizontal:10
    },
    container:{
        marginTop:40,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly',
        width:'100%'
    }
})