import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, Modal } from 'react-native'
import React, { useState } from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'



const styles = StyleSheet.create({
    heyContainer:{
        width:115,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    imgContainer:{
        width:46,
        height:46,
        borderRadius:23,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#EAEDFB',
    },
    heyTxt:{
        fontSize:14,
        fontWeight:'bold',
        color:'#2242D8'
    },
    subContainer1:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        height:45,
        marginHorizontal:20
    },
    cards:{
        width:325,
        height:169,
        backgroundColor:'#F1F3FC',
        borderColor:'#59ACF3',
        borderWidth:1,
        borderRadius:20,
        alignSelf:'center',
        marginTop:15,
        justifyContent:'space-evenly',
    },
    cardSubContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginHorizontal:15
    },
    more:{
        width:45,
        height:25,
        borderWidth:0.5,
        borderColor:'#2242D8',
        borderRadius:35,
        backgroundColor:'#ffff',
        alignItems:'center',
        justifyContent:'center',
        display:'flex',
        marginRight:10
    },
    cardBtnContainer:{
        width:296,
        height:50,
        backgroundColor:'#ffff',
        borderColor:'rgba(34, 66, 216, 0.15)',
        borderWidth:1,
        borderRadius:20,
        alignSelf:'center',
        flexDirection:'row',
        alignItems:'center'
    },
    cardBtn:{
        flexDirection:'row',
        borderColor:'rgba(34, 66, 216, 0.15)',
        borderRightWidth:1,
        width:82,
        height:39,
        alignItems:'center',
        justifyContent:'center',
    },
    cardBtnPreview:{
        flexDirection:'row',
        borderColor:'rgba(34, 66, 216, 0.15)',
        borderRightWidth:1,
        width:125,
        height:39,
        alignItems:'center',
        justifyContent:'center',
    },
    cardBtnShare:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        width:82
    },
    smallBox:{
        width:60,
        height:7,
        backgroundColor:'#E5ECFF',
        borderRadius:42,
        marginVertical:20
    },
    modalBox:{
        width:'100%',
        height:183,
        backgroundColor:'#ffff',
        borderTopRightRadius:20,
        borderTopLeftRadius:20,
        position:'absolute',
        bottom:0,
        alignItems:'center',
    },
    modalSub:{
        width:93,
        height:93,
        backgroundColor:'#E9ECFB',
        borderRadius:20,
        alignItems:'center',
        justifyContent:'center',
        marginHorizontal:10,
        marginVertical:10
    }
});
const list = ['Personal card', 'Work card', 'Portfolio card'];
const modalList = [{text:'Write to NFC', img: require('./images/modal1.png')},{text:'Duplicate card', img: require('./images/Duplicate-card.png')},{text:'Delete card', img: null},]


const CardHomeScreen = ({navigation}) => {
  const [visible, setVisible] = useState(false);
  return (
    <View style={visible ? {marginTop:40, flex:1, opacity:0.1} : {marginTop:40, flex:1}}>
        <View style={styles.subContainer1}>
            <Image source={require('./images/cards.png')} />
            <View style={styles.heyContainer}>
                <Text style={styles.heyTxt}>Hey, John</Text>
                <View style={styles.imgContainer}>
                    <Image source={require('../Cards/model.png')} style={{width:26, height:26}} />
                </View>
            </View>
        </View>
        <FlatList 
        data={list}
        renderItem={({item}) => (
            <View style={item.includes('Personal') ? styles.cards : {...styles.cards, backgroundColor:'#F1FCF3', borderColor:'#4CD2DB'}}>
                    <View style={styles.cardSubContainer}>
                        <Image source={require('./images/Ellipse1.png')}/>
                        <View style={{position:'absolute', left:85}}>
                            <Text style={{color:'#2242D8', fontSize:18, fontWeight:'bold'}}>John ryan</Text>
                            <Text style={{color:'#5870E1', fontSize:12, fontWeight:'400', marginTop:3}}>{item}</Text>
                        </View>
                        <TouchableOpacity style={styles.more} onPress={() => setVisible(true)}>
                            <FontAwesome5 name='ellipsis-h' style={{color:'#2242D8', marginBottom:5}} size={23}/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.cardBtnContainer}>
                        <TouchableOpacity style={styles.cardBtn} onPress={() => navigation.navigate('Edit Card')}>
                            <FontAwesome5 name='pen' style={{color:'#2242D8'}} />
                            <Text style={{color:'#2242D8', fontSize:12, fontWeight:'bold', marginHorizontal:10}}>Edit</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.cardBtnPreview}>
                            <FontAwesome5 name='id-card' style={{color:'#2242D8'}} />
                            <Text style={{color:'#2242D8', fontSize:12, fontWeight:'bold', marginHorizontal:10}}>Preview card</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.cardBtnShare}>
                            <FontAwesome5 name='paper-plane' style={{color:'#2242D8'}} />
                            <Text style={{color:'#2242D8', fontSize:12, fontWeight:'bold', marginHorizontal:10}}>Share</Text>
                        </TouchableOpacity>
                    </View>
                </View>
        )}
        keyExtractor={(item, index) => item + index}
        />
        <Modal visible={visible} transparent animationType='slide'>
            <TouchableOpacity style={styles.modalBox} onPress={() => setVisible(false)}>
                <View 
                style={styles.smallBox}
                ></View>
                <FlatList 
                horizontal
                keyExtractor={(item, index) => index + item.text}
                data={modalList}
                renderItem={({item}) => (
                    <View style={item.text.includes('Delete') ? {...styles.modalSub, backgroundColor:'#FDEDED'} : styles.modalSub}>
                        {item.img != null ? <Image source={item.img} style={{width:27, height:27}}/> : <FontAwesome5 name='trash' style={{color:'red'}} size={22}/>}
                        <Text style={{fontSize:12, fontWeight:'500', marginVertical:10}}>{item.text}</Text>
                    </View>
                )}
                />
            </TouchableOpacity>
        </Modal>
    </View>
  )
}

export default CardHomeScreen