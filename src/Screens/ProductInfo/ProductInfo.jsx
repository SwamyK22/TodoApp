import { StyleSheet, Text, View, Image, ScrollView, Dimensions, TouchableOpacity } from 'react-native'
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context'
import NavBar from '../../Components/NavBar/NavBar';
import { useDispatch, useSelector } from 'react-redux';
import LogoutModal from '../../Components/LogoutModal/LogoutModal';
import AddCartBtn from '../../Components/AddCartBtn/AddCartBtn';
import ProductInfoCard from '../../Components/ProductInfo/ProductInfoCard';


const ProductInfo = ({navigation}) => {
  const [visible, setVisible] = useState(false);

  const {product, cart } = useSelector((state) => ({
    product: state.Product,
    cart: state.Cart,
}));

const cartItem = cart.find((x) => x.productId === product?.id)

   // ------ Logout ---------
   const logout = async () => {
    await AsyncStorage.removeItem('token');
    navigation.navigate('login');
}

  return (
    <SafeAreaView style={{flex:1, backgroundColor:'#ffff'}}>
      <NavBar setVisible={setVisible} />
      <LogoutModal visible={visible} setVisible={setVisible} logout={logout} />
        <ProductInfoCard product={product} navigation={navigation}/>
        <AddCartBtn product={product} />
    </SafeAreaView>
  )
}


export default ProductInfo

