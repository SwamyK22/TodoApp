import { View, Text, TextInput, Pressable, FlatList, Button } from 'react-native'
import React, { useState } from 'react';
import styles from './Style'
import { DataTable } from 'react-native-paper';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


const FormTask = () => {
    const [name, setName] = useState('');
    const [food, setFood] = useState('');
    const [mobile, setMobile] = useState('');
    const [cust, setCust] = useState([]);
const addCust = () => {
    const id = new Date().valueOf()
    setCust((cust) => [...cust, {name, food, id,}]);
    setFood('');
    setName('');
    setMobile('');
}
const deleteCust = (item) => {
    const index = cust.findIndex((x) => x.id === item.id);
    setCust((cust) => [...cust.slice(0,index), ...cust.slice(index + 1)])
}
const renderItem = ({item}) => (
    <DataTable.Row>
    <DataTable.Cell>{item.name}</DataTable.Cell>
    <DataTable.Cell>{item.food}</DataTable.Cell>
    <DataTable.Cell>
    <Pressable onPress={() => deleteCust(item)} style={{marginHorizontal:20}}>
        <FontAwesome5 name='trash' style={{color:'red',}} size={25} />
    </Pressable>
    </DataTable.Cell>
</DataTable.Row>
);

  return (
      <>
      <View style={styles.container}>
          <Text>Hello</Text>
          <TextInput style={styles.inputBox} defaultValue={name} onChangeText={(val) => setName(val)} placeholder="Name" />
          <TextInput style={styles.inputBox} defaultValue={food} onChangeText={(val) => setFood(val)} placeholder="Favourite Food" />
          <Pressable style={({ pressed }) => {
              return {
                  backgroundColor: pressed ? 'green' : 'orange',
                  borderRadius: 10,
                  paddingHorizontal: 20,
                  paddingVertical: 5
              };
          } }
          onPress={addCust}
          >
              <Text style={styles.btnText}>Add</Text>
          </Pressable>
      </View>
      <View>
        <DataTable>
            <DataTable.Header style={styles.tableHeader}>
                <DataTable.Title>Name</DataTable.Title>
                <DataTable.Title>Favourite Food</DataTable.Title>
                <DataTable.Title>Delete</DataTable.Title>
            </DataTable.Header>
            <FlatList
            data={cust}
            renderItem={renderItem}
            keyExtractor={(item, index) => item + index}
            /> 
        </DataTable>

        </View>
    </>
  )
}

export default FormTask;