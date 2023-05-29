import { View, Text, SectionList, TextInput, Pressable, Alert } from 'react-native'
import React, { useState } from 'react'
import styles from './SectionList';

const SectionListTask = () => {
    const [txt, setTxt] = useState('');
    const [user, setUser] = useState(null);
    const DATA = [
        {
        title: 'A',
        data:[{name: 'Akshay', mobile: 987654}]
        },
        {
        title: 'D',
        data:[{name: 'Darshan', mobile: 7654}]
        },
        {
        title: 'P',
        data:[{name: 'Prem', mobile: 997654}]
        },

        {
        title: 'S',
        data:[{name: 'Swamy', mobile: 987654},{name:'Shiva', mobile:9764579}]
        },
    ]
    //setUser
    const setItem = (name) => {
        const items = DATA.reduce((p, c) => [...p, ...c.data ],[]);
        const item = items.find((x) => x.name === name);
        if(item) setUser(item);
        else Alert.alert("User not found")
    }


    const sectinHeader = ({section: {title}}) => (
        <View style={{backgroundColor:'#E2D6D3'}}>
            <Text style={styles.headerTitle}>{title}</Text>
        </View>
    )

    const renderItem = ({item}) => {
        if(item.name.startsWith(txt)) {
           return (
                <View style={styles.renderItem}>
                    <Text style={styles.itemText} onPress={() => setItem(item.name)}>Name: {item.name}</Text>
                    <Text style={styles.itemText}>MobileNo:{item.mobile}</Text>
                </View>
            )
        }
    }
  return (
    <>
    <View style={styles.InputContainer}>
        <TextInput style={styles.InputBox} defaultValue={txt} onChangeText={(val) => setTxt(val)} placeholder='Search' />
    </View>
    {user ? (
        <View style={styles.userMain}>
            <Text style={styles.userText}>Name: {user.name}</Text>
            <Text style={styles.userText}>MobileNo: {user.mobile}</Text>
            <Pressable style={{backgroundColor:'orange', borderRadius:5, width:55}} >
                <Text style={{paddingHorizontal: 10, paddingVertical:5, color:'white', fontWeight:'bold'}} onPress={() => {setUser(null); setTxt('')}}>Back</Text>
            </Pressable>
        </View>
    ) : (
        <SectionList 
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderSectionHeader={sectinHeader}
        renderItem={renderItem}
        />
    )}
    </>
  )
}

export default SectionListTask