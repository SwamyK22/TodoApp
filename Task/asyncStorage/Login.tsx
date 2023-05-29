import { View, Text, StyleSheet, Image, TextInput, Pressable, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    mainImage:{
        width:150,
        height:80,
    },
    inputBox:{
      borderWidth:1,
      width:'70%',
      padding:5,
      fontSize:16,
      fontWeight:'500',
      borderRadius:5,
      marginVertical:10
    },
    loginContainer:{
      width:'100%',
      height:'40%',
      display:'flex',
      alignItems:'center',
    },
    loginBtn:{
      backgroundColor:'#2242F8',
      borderRadius:5,
      width:100,
      height:40,
      justifyContent:'center',
      alignItems:'center'
    },
    btnTxt:{
      fontSize:18,
      fontWeight:'bold',
      color:'#ffffff',
    }
})

const Login = ({navigation}) => {
  const [name, setName] = useState('')
  const [mobile, setMobile] = useState('');

  useEffect(() => {
    getData()
  },[])

  const setData = async () => {

    if (name.length == 0 || mobile.length == 0) {
        Alert.alert('Input feild should not be empty')
    } 
    else {
      try {
        let user = {name, mobile}
        await AsyncStorage.setItem('user', JSON.stringify(user));
        navigation.navigate('home');
      
      } catch (error) {
      console.log('====================================');
      console.log(error);
      console.log('====================================');
      }
  }
  }

  const getData = async () =>{
    try {
      await AsyncStorage.getItem('user').then((val) => {
        if (val != null){
          navigation.navigate('home');
        }
      })
    } catch (error) {
      console.log('====================================');
      console.log(error);
      console.log('====================================');
    }
  }
  return (
    <View style={styles.mainContainer}>
        <View style={styles.loginContainer}>
        <Image source={require('./login.png')} style={styles.mainImage} />
        <TextInput defaultValue={name} onChangeText={(name) => setName(name)} style={styles.inputBox} placeholder='Name'/>
        <TextInput defaultValue={mobile} onChangeText={(mobile) => setMobile(mobile)} style={styles.inputBox} placeholder='Mobile'/>
        
        <Pressable style={styles.loginBtn} onPress={setData}>
          <Text style={styles.btnTxt}>Login</Text>
        </Pressable>
        </View>
    </View>
  )
}

export default Login;