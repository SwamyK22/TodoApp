import { View, Text, StyleSheet, TextInput, FlatList } from 'react-native'
import React from 'react'

const styles = StyleSheet.create({
    mainContainer:{
        backgroundColor:'#ffff',
        alignItems:'center'
    },
    input:{
        width:325,
        height:50,
        borderRadius:20,
        backgroundColor:'#ffff',
        borderWidth:1,
        borderColor:'rgba(34, 66, 216, 0.5)',
        paddingHorizontal:15,
        color:'#2242D8',
        fontSize:14,
        fontWeight:'bold'
    },
    Bio:{
        width:325,
        height:100,
        textAlignVertical:'top',
        borderRadius:20,
        backgroundColor:'#ffff',
        borderWidth:1,
        borderColor:'rgba(34, 66, 216, 0.5)',
        paddingHorizontal:15,
        paddingVertical:10
    },
});

const list = ['Card name', 'Personal details', 'Company details']

const renderItem = ({item}) => {
    return item.includes('Company') ? (
        <View>
            <Text style={{fontSize:14, fontWeight:'bold', marginVertical:10}}>{item}</Text>
        <TextInput style={{...styles.input, marginBottom:10}} placeholder={item}/>
        <TextInput style={{...styles.input, marginBottom:10}} placeholder='Designation'/>
        <TextInput style={{...styles.input, marginBottom:10}} placeholder='Department'/>
        <TextInput style={styles.Bio} multiline numberOfLines={4} placeholder='Bio'/>
        </View>
    ) : (
        <View>
        <Text style={{fontSize:14, fontWeight:'bold', marginVertical:10}}>{item}</Text>
        <TextInput style={styles.input} placeholder={item}/>
      </View>
    )
}
const General = () => {
  return (
    <View style={styles.mainContainer}>
      <FlatList 
      data={list}
      renderItem={renderItem}
      keyExtractor={(item, index) => item + index}
      />
    </View>
  )
}

export default General