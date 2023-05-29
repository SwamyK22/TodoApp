import { View, Text, Pressable, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

const styles = StyleSheet.create({
    backBtn:{
      backgroundColor:'orange',
      borderRadius:5,
      width:100,
      height:40,
      justifyContent:'center',
      alignItems:'center',
      marginVertical:15
    },
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    mainTxt:{
        fontSize:30,
        fontWeight:'bold'
    }
})

const Home = ({navigation}) => {
    const [user, setUser] = useState({name:'', mobile:''});
    useEffect(() => {
        getData()
    },[])
    const getData = async () =>{
        try {
          await AsyncStorage.getItem('user').then((val) => {
            if (val != null){
              setUser(JSON.parse(val));
            }
          })
        } catch (error) {
          console.log('====================================');
          console.log(error);
          console.log('====================================');
        }
      }
  return (
    <View style={styles.container}>
        <View style={{display:'flex', height:'15%', justifyContent:'space-around'}}>
      <Text style={styles.mainTxt}>Name: <Text style={{color:'#43ff0dd9'}}>{user.name}</Text></Text>
      <Text style={styles.mainTxt}>MobileNo: <Text style={{color:'#43ff0dd9'}}>{user.mobile}</Text></Text>
      </View>
      <Pressable style={styles.backBtn} onPress={() => {
        AsyncStorage.clear()
            navigation.navigate('login')
    }}>
        <Text>back to login</Text>
      </Pressable>
    </View>
  )
}

export default Home