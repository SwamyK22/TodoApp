import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartUpdateBtn from '../CartUpdateBtn/CartUpdateBtn'

const AddCartBtn = ({product}) => {

    const cartItem = useSelector((state) => state.Cart.find((x) => x.productId === product?.id))
    const dispatch = useDispatch();

     //-----addCart-----
    const addCart = (id) => {
            dispatch({type:'ADD_CART', payload: {productId: id, quantity: 1}})
    };

  return (
    <View style={styles.container}>
           {cartItem ? (
            <CartUpdateBtn product={cartItem} />
           ) : ( <TouchableOpacity
                style={styles.addBtn}
                onPress={() => addCart(product.id)}
            >
                <Text style={styles.btnText}>Add to cart</Text>
            </TouchableOpacity>)}
    </View>
  )
}

export default AddCartBtn

const styles = StyleSheet.create({
    addBtn: {
        backgroundColor:'#99f505',
        width:'100%',
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'center',
        height:45,
    },
    btnText: {
        color:'#ffff',
        fontSize:24,
        fontWeight:'bold'
    },
    container:{
        position:'relative',
        bottom:0
    }
})