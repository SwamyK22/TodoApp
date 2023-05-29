import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const styles = StyleSheet.create({
    btn:{
        height:45,
        backgroundColor:'rgba(27,27,51,0.4)',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:8
    }
})

const SubmitButton = ({title, onPress}) => {
  return (
    <TouchableOpacity style={styles.btn} onPress={onPress}>
        <Text style={{fontSize:18, color:'#ffff'}}>{title}</Text>
    </TouchableOpacity>
  )
}

export default SubmitButton