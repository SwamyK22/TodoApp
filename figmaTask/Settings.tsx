import { View, Text, Pressable, FlatList } from 'react-native'
import React, { useState } from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import styles from './SettingsStyle'
import ModalBox from './Modal/ModalBox';

const val = ['Profile', 'Share app', 'Rate us', 'About app', 'Contact us', 'Privacy Policy']
const renderItem = ({item}) => (
  <Pressable style={styles.options} >
    <Text style={styles.optionText}>{item}</Text>
    <FontAwesome5 name='chevron-right' style={{color: '#2242D8'}} />
  </Pressable>
)
const Settings = ({navigation}) => {
  const [visible, setVisible] = useState(false);
  return (
    <View style={styles.mainContainer}>
      <View style={styles.tabContainer}></View>
      <FlatList
       data={val}
       renderItem={renderItem}
       keyExtractor={(item, index) => item + index}
      />
    <Pressable onPress={() => setVisible(true)}>
        <Text style={styles.logoutText}>Logout?</Text>
      </Pressable>
      <ModalBox visible={visible} setVisible={setVisible} navigation={navigation} />
    </View>
  )
}

export default Settings