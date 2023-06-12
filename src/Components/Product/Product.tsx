import { View, Text, StyleSheet, Image, Dimensions, Pressable } from 'react-native'
import React from 'react'
import Review from '../Review/Review';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const Product = (props) => {

  const { product, addProduct } = props;

  return (
    <View key={product.id} style={styles.container}>
      <Pressable onPress={() => addProduct(product.id)}>
        <Image source={{uri:product.image}} style={styles.img}/>
      </Pressable>
        <View style={styles.info}>
          <Text style={styles.title} numberOfLines={2} ellipsizeMode='head'>{product.title}</Text>
          <Text style={styles.price}>
            <FontAwesome5 name='rupee-sign' size={15} /> 
          .{product.price}</Text>
          <Review {...product.rating}/>
        </View>
     <View style={styles.line} key={product.id}/>
    </View>
  
  )
}

const styles = StyleSheet.create({
  img:{
      width:'90%',
      height:200,
      resizeMode:'contain'
    },
    container: {
      width: Dimensions.get('window').width/2,
      height: Dimensions.get('window').height/2.3,
      marginVertical:10
    },
    info:{
      height:'30%',
      paddingHorizontal:5,
      marginVertical:5
    },
    price:{
      fontSize:18,
      fontWeight:'bold',
      paddingHorizontal:5
    },
    title:{
      fontWeight:'500',
      paddingHorizontal:5
    },
    line:{
      width:Dimensions.get('window').width/2,
      height:1,
      backgroundColor:'#123',
      position:'absolute',
      bottom:0
    }
    
})

export default Product