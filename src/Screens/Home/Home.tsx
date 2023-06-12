import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import {SafeAreaView} from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Product from '../../Components/Product/Product';
import NavBar from '../../Components/NavBar/NavBar';
import LogoutModal from '../../Components/LogoutModal/LogoutModal';
import { useDispatch, useSelector } from 'react-redux';



const Home = ({navigation}) => {
  const [visible, setVisible] = useState(false);

  const products = useSelector((state) => state.Products)

  const dispatch = useDispatch();

  // ------ Logout ---------
  const logout = async () => {
        await AsyncStorage.removeItem('token');
        navigation.navigate('login');
    }

    // ------- Laod Products --------------
    const fetchData = async () => {
      try {
        const data = await fetch('https://fakestoreapi.com/products')
                .then((val) => val.json());
            dispatch({type:'ADD_PRODUCT', payload: data})
      } catch (error) {
        console.log('====================================');
        console.log(error);
        console.log('====================================');
      }

    }

    //----- addClicked Product --------
    const addProduct = (id) => {
      const item = products.find((x) => x.id === id);
      dispatch({type:'SET_PRODUCT', payload: item});
      navigation.navigate('product')
    }

    const addUser = async () => {
      const token = await AsyncStorage.getItem('token')
      const users = await AsyncStorage.getItem('users');
      const parseUser = JSON.parse(users)
      const parseToken = JSON.parse(token)
      const user = parseUser.find((x) => x.email === parseToken.email)
      if(token) {
        dispatch({type:'ADD_USER', payload:user})
      }
    }


    useEffect(() => {
      fetchData()
      addUser()
    }, [])


  return (
    <SafeAreaView style={{flex:1, backgroundColor:'#ffff'}}>
      <NavBar setVisible={setVisible} />
      <LogoutModal visible={visible} setVisible={setVisible} logout={logout} />
     <ScrollView>
     <View
      style={styles.list}
     >{
      products?.map((product) => (
        <Product product={product} navigation={navigation} addProduct={addProduct}/>
      ))
      }</View>
      </ScrollView>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
    list:{
      flexWrap:'wrap',
      flexDirection:'row'
    }
})

export default Home