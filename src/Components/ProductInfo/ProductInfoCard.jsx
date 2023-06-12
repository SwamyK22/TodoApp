import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Dimensions } from 'react-native'
import React, { useEffect } from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Review from '../Review/Review'
import { useSelector } from 'react-redux'
import Address from '../Address/Address'

const ProductInfoCard = ({product, navigation}) => {

    const cartItem= useSelector((state) => state.Cart.find((x) => x.productId === product?.id))


  return (
    <ScrollView style={styles.infoContainer}>
            <Image source={{uri:product?.image}} style={styles.img}/>
            <View style={styles.reviewContainer}>
                <Review {...product?.rating}/>
                <TouchableOpacity
                onPress={() => navigation.navigate('home')}
                style={styles.backBtn}>
                    <Text style={{color:'#ffff', fontWeight:'bold'}}>Back to Home</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.cetagory}>{product?.category}</Text>
            <Text style={styles.title}>{product?.title}</Text>
            <View style={styles.priceContainer}>
            <Text style={styles.price}> <FontAwesome5 name='rupee-sign' size={25} /> 
              {' '}{product?.price}</Text>
             <View style={styles.qty}>
                <Text style={styles.qtyText}>Qty: </Text><Text style={{...styles.qtyText, color: '#fa0728', fontSize:20}}>{cartItem?.quantity > 0 ? cartItem?.quantity : 0}</Text>
             </View>
            </View>
            <Address />
            <View>
                <Text style={styles.desTxt}>Description</Text>
                <Text style={styles.dis}>{product?.description}</Text>
            </View>
            
        </ScrollView>
  )
}

const styles = StyleSheet.create({
    img:{
        width: '90%',
        height:Dimensions.get('window').height / 2,
        alignSelf:'center',
        resizeMode:'contain',
        marginVertical:10
    },
    container:{
        width:Dimensions.get('window').width ,
    },
    price:{
        fontWeight:'bold',
        fontSize:35,
    },
    title:{
        fontSize:22,
        fontWeight:'bold',
        paddingHorizontal:5
    },
    dis:{
        fontSize:16,
        fontWeight:'400',
        marginVertical:5
    },
    cetagory:{
        fontSize:12,
        fontWeight:'400',
        paddingHorizontal:5,
        marginTop:10
    },

    infoContainer: {
        paddingHorizontal:5,
    },
    reviewContainer: {
        flexDirection:'row',
        width:'95%',
        alignItems:'center',
        justifyContent:'space-between',
        marginVertical:5
    },
    backBtn:{
        backgroundColor:'#2242D8',
        height:30,
        justifyContent:'center',
        borderRadius:8,
        paddingHorizontal:10
    },
    qty:{
        width:'18%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
        marginHorizontal:35,
        borderWidth:1,
        borderRadius:5,
        paddingHorizontal:5
    },
    priceContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
    },
    qtyText:{
        fontSize:18,
        fontWeight:'bold',
    },
    line:{
        width:Dimensions.get('window').width,
        height:1,
        backgroundColor:'#123',
        marginVertical:10
      },
      desTxt:{
        fontSize:20,
        fontWeight:'bold',
      },
      
      
})

export default ProductInfoCard