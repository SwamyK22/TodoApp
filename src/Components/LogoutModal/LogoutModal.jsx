import { View, Text, Modal, TouchableOpacity, Pressable, StyleSheet } from 'react-native'
import React, { useState } from 'react'

const LogoutModal = (props) => {
    const {visible, setVisible, logout} = props;

  return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={visible}
        onRequestClose={() => {
          setVisible(!visible);
        }}>
        
          <TouchableOpacity style={styles.modalView} onPress={() => setVisible(false)}>
            <Pressable
              style={[styles.button, styles.buttonOpen]}
              onPress={logout}>
              <Text style={styles.textStyle}>Logout</Text>
            </Pressable>
          </TouchableOpacity>
      </Modal>
  )
}

const styles = StyleSheet.create({
    modalView: {
      backgroundColor: 'white',
      borderRadius: 10,
      width:150,
      height:100,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
      position:'absolute',
      right:5,
      top:40
    },
    button: {
        marginVertical:30,
        borderRadius: 10,
        paddingHorizontal:10,
        paddingVertical:5,
        elevation: 2,
        alignSelf:'center'
      },
      buttonOpen: {
        backgroundColor: '#F194FF',
      },
    
    textStyle: {
      fontWeight: 'bold',
      fontSize:16,
      textAlign:'center',
      color:'#ffff'
    },
});

export default LogoutModal;
