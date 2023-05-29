import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react';

const styles = StyleSheet.create({
    input:{
        borderWidth:1,
        borderColor:'#1b1b33',
        borderRadius:8,
        height:35,
        fontSize:16,
        marginBottom:20,
        paddingLeft:10
    }
})

const Input = (props) => {
    const {placeholder, lable} = props;
  return (
    <>
      <Text style={{fontWeight:'bold'}}>{lable}</Text>
      <TextInput {...props} placeholder={placeholder} style={styles.input} />
    </>
  )
}

export default Input
