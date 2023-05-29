import React, { useState } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import CheckBox  from 'expo-checkbox';

const TodoApp1 = () => {

    const [txt, setText] = useState('')
    const [todoList, setTodoLst] = useState([{
       text:'swamy',
       isChecked:false,
       id:1
    },
    {
        text:'Akshay',
        isChecked:false,
        id:1
     }
])

  return (
    <View>
      {/* <Text>TodoApp</Text>
     <TextInput />
     <Pressable>
     <Text>Add</Text>
     </Pressable>
     <View>
    <CheckBox />
    <Text></Text>
    <Pressable>Delete</Pressable>
     </View>
     <View>
      <Pressable>
        <Text>All</Text>
      </Pressable>
      <Pressable>
        <Text>Pending</Text>
      </Pressable>
      <Pressable>
        <Text>Completed</Text>
      </Pressable>
     </View> */}
     <Text>hello</Text>
    </View>
  );
}

export default TodoApp1;
