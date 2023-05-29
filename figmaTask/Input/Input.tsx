import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react';

const Input = (props) => {
    const {placeholder, style} = props;
  return (
    
      <TextInput {...props} placeholder={placeholder} style={style} />
  )
}

export default Input
