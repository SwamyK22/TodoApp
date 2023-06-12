import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const CartUpdateBtn = ({product}) => {

    const cart = useSelector((state) => state.Cart);
    
    const dispatch = useDispatch();

    //----UpdateCart----
    const updateCart = (item) => {
        dispatch({type:'UPDATE_CART', payload:{...item, quantity: item.quantity + 1}})
    }

    //----DeleteCart------
    const deleteCart = (item) => {
        if(item.quantity === 1) {
            dispatch({type:'DELETE_CART', payload: item})
        } else {
            dispatch({type:'UPDATE_CART', payload:{...item, quantity: item.quantity - 1}})
        }
    }
  return (
    <View style={styles.container}> 
        <Pressable style={({pressed}) => [{backgroundColor: pressed ? '#780aa3' : '#ad4ff0'}, styles.cartBtns]}
            onPress={() => deleteCart(product)}
        >
            <Text style={styles.btnText}>-</Text>
        </Pressable>
        <Pressable style={({pressed}) => [{backgroundColor: pressed ? '#780aa3' : 'orange'}, styles.cartBtns]}
        onPress={() => updateCart(product)}
        >
            <Text style={styles.btnText}>+</Text>
        </Pressable>
    </View>
  )
}
const styles = StyleSheet.create({
    cartBtns: {
        alignItems:'center',
        justifyContent:'center',
        height:40,
        width:'50%',
    },
    container: {
        flexDirection:'row',
        alignItems:'center',
        width:'100%',
        alignSelf:'center',
    },
    btnText: {
        color:'#ffff',
        fontSize:24,
        fontWeight:'bold'
    },
})

export default CartUpdateBtn
