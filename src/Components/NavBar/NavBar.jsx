import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { useSelector } from 'react-redux'


const NavBar = ({setVisible}) => {

  const count = useSelector((state) => state.Cart?.reduce((p, c) => p + c.quantity, 0))

  return (
    <View style={styles.nav}>
            <Text style={{color:'orange', fontSize:20, fontWeight:'bold'}}>Shopping Cart</Text>
            <FontAwesome5 name='shopping-cart' style={styles.cartIcon} size={20}/>
              <View style={styles.cartCount}>
              <Text style={styles.cartContText}>{count}</Text>
              </View>
            <TouchableOpacity style={{paddingHorizontal:8}}
            onPress={() => setVisible(true)}
            >
            <Image source={require('../../assests/signin/account.png')} style={{width:30, height:30, tintColor:'#7eef72d9'}} />
            </TouchableOpacity>
     </View>
  )
}
const styles = StyleSheet.create({
    nav:{
        backgroundColor:'#123',
        width:'100%',
        height:50,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    cartCount: {
        position:'absolute',
        right:58,
        top:8,
        backgroundColor:'red',
        width:16,
        height:16,
        borderWidth:2,
        borderColor:'#ffff',
        borderRadius:8,
    },
    cartContText:{
        color:'#ffff',
        fontSize:8.5, 
        textAlign:'center', 
        fontWeight:'bold',
    },
    cartIcon:{
        color:'#ffff',
        position:'absolute',
        right:70,
    }
})
export default NavBar