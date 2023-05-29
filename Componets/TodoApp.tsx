import React, { useState } from 'react';
import { Alert, FlatList, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import CheckBox  from 'expo-checkbox'
import styles from "./TodoStyle";

export default function TodoApp() {
    const [txt, setTxt] = useState('');
    const [fltStatus, setFltStatus] = useState('All')
    const [list, setList] = useState([
        {
        todoText: 'Hii Swamy..',
        isSelected: true,
        id:1,
        },
        {
        todoText: 'Hii Akshay..',
        isSelected: false,
        id:2,
        },
    ]);
    const addTodo = () => {
        let lastItem = list[list.length-1]
        setList((list) => [
            ...list,
            {
                todoText: txt,
                isSelected: false,
                id: lastItem.id + 1,
            },
        ]);
        setTxt('');
    } 

    const updateFiltrStatus = (flt) =>{
        switch (flt) {
            case 'All': 
                setFltStatus('All')
                break;
            case 'Pending':
                setFltStatus('Pending')
                break;
            case 'Completed':
                setFltStatus('Completed')  
                break;
            default:
                break;
        }
    }


    const deletTodo = (data) => {
        const index = list.findIndex((x) => x.id === data.id);
        setList((list) => [
            ...list.slice(0, index),
            ...list.slice(index+1)
         ])
    }
    const updateTodo = (data) => {
        const index = list.findIndex((x) => x.id === data.id);
        setList((list) => [
            ...list.slice(0, index),
            {
            ...data,
            isSelected: !data.isSelected
            },
            ...list.slice(index+1)
         ])
    }
    const renderItem = ({item}) => {
        if(fltStatus === 'All' || fltStatus === 'Pending' && item.isSelected || fltStatus === 'Completed' && !item.isSelected){
            return (
                <View style={styles.listItem}>
                <CheckBox 
                value={item.isSelected} 
                onValueChange={() => updateTodo(item)} 
                style={{marginHorizontal: 8}}/>
                <Text style={item.isSelected ? styles.listUpdTxt :{flex:1,}}>
                  {item.todoText}
                </Text>
                <Pressable style={({pressed}) =>{
              return {
                backgroundColor: pressed ? '#000099' : '#3333FF',
                borderRadius:5,
                marginRight: 8,
              }
            }}
            onPress={() => deletTodo(item)}
            >
              <Text style={{
                color: 'white',
                paddingVertical: 8,
                paddingHorizontal: 15,
                fontWeight: '500'
              }}>Delete</Text>
            </Pressable>
              </View>
            )

        }
    }
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.todoTitle}>TodoApp</Text>
      <View style={styles.todoContainer}>
        <TextInput style={styles.todoInput} defaultValue={txt} onChangeText={(val) => setTxt(val)} />
        <Pressable style={({pressed}) =>{
        return {
          backgroundColor: pressed ? '#000099' : '#3333FF',
          borderTopRightRadius:5,
          borderBottomRightRadius:5,
        }
        }}
        onPress={() => { txt   ? addTodo() : Alert.alert("Input can't be empty")}}
        >
        <Text style={{
          color: 'white',
          paddingVertical: 10,
          paddingHorizontal: 20
        }}>Add</Text>
        </Pressable>
      </View>
      <FlatList
        data={list}
        renderItem={renderItem}
        style={styles.todoList}
      />
      <View style={styles.filterContainer}>
        <Pressable 
        style={ {backgroundColor: fltStatus === 'All' ? 'orange' : 'blue',
        width: '33%',
        paddingVertical:10,
        borderRightWidth: 1,
        borderColor:'white'}}
        onPress={() =>updateFiltrStatus('All')}
        >
          <Text style={styles.filterBtnTxt}>All</Text>
          </Pressable> 
          <Pressable style={{
             backgroundColor: fltStatus === 'Pending' ? 'orange' : 'blue',
             width: '33%',
             paddingVertical:10,
             borderRightWidth: 1,
             borderColor:'white'
          }}
        onPress={() =>updateFiltrStatus('Pending')}
        >
          <Text style={styles.filterBtnTxt}>Pending</Text>
          </Pressable> 
          <Pressable style={{
              backgroundColor: fltStatus === 'Completed' ? 'orange' : 'blue',
              width: '33%',
              paddingVertical:10,
          }}
        onPress={() =>updateFiltrStatus('Completed')}
        >
          <Text style={styles.filterBtnTxt}>Completed</Text>
          </Pressable> 
      </View>
    </View>
  );
}