import { View, Text, Modal, TouchableOpacity, Alert, StyleSheet } from 'react-native'
import React from 'react'
import styles from './styles'
    
const ModalBox = ({setVisible, visible, navigation}) => {
  return (
    <Modal visible={visible} transparent animationType='slide'>
            <View
            style={styles.modalContainer}>
                <View 
                style={styles.smallBox}
                ></View>
              <Text
                style={styles.mainText}>
                Are you sure want to logout?
              </Text>
              <Text
              style={styles.subText}
              >You will need to again enter your details to login</Text>
             <View style={styles.btnContainer}>
             <TouchableOpacity
             style={styles.yesBtn}
             onPress={() => {navigation.navigate('welcome'), setVisible(false)}}
             >
                <Text
                style={styles.yesTxt}
                >Yes, I want to</Text>
             </TouchableOpacity>
             <TouchableOpacity
             style={styles.noBtn}
             onPress={() => setVisible(false)}
             >
                <Text
                style={styles.noTxt}
                >No, I don't want to</Text>
             </TouchableOpacity>
             </View>
            </View>
    </Modal>
  )
}

export default ModalBox