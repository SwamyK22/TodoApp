import { View, Text, Image, StyleSheet, FlatList } from 'react-native'
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
    },
    changePhotoBox:{
        width:130,
        height:40,
        backgroundColor:'#E9ECFB',
        borderRadius:27,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly',
        marginLeft:30
    },
    profileContainer:{
        flexDirection:'row',
        height:70,
        alignItems:'center',
        justifyContent:'center'
    },
    cardColorContainer:{
        backgroundColor:'#ffff',
        width:325,
        height:50,
        borderRadius:20,
        alignSelf:'center',
        flexDirection:'row',
        alignItems:'center',
        overflow:'hidden'
    },
    addColor:{
        backgroundColor:'#EAEDFB',
        width:34,
        height:34,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:17,
        marginLeft:8,
    },
    logCardBox:{
        width:70,
        height:70,
        backgroundColor:'#EAEDFB',
        borderWidth:1,
        borderRadius:14,
        borderColor:'#2242D8',
        justifyContent:'center',
        alignItems:'center',
        position:'absolute',
        left:25
    }
});

const colorList = ['#2242D8', '#92CAFF', '#EEFF00', '#00FA00', '#F910EB', '#8D0077', '#FFACAC']

const Display = () => {
  return (
    <View style={styles.mainContainer}>
        <View style={{marginVertical:13}}>
            <Text style={{fontSize:14, fontWeight:'bold',marginLeft:25, marginBottom:15}}>Profile photo</Text>
            <View style={styles.profileContainer}>
                <Image source={require('../images/profilePhoto.png')} style={{position:'absolute', left:25}}/>
                <View style={styles.changePhotoBox}>
                    <FontAwesome5 name='pen' style={{color:'#2242D8'}} />
                    <Text style={{fontSize:12, fontWeight:'400'}}>Change photo</Text>
                </View>
            </View>
        </View>
        <View style={{marginVertical:13}}>
            <Text style={{fontSize:14, fontWeight:'bold',marginLeft:25, marginBottom:15}}>Card color</Text>
            <View style={styles.cardColorContainer}>
                <View style={styles.addColor}>
                    <Text style={{color:'#7B88FF', fontSize:20}}>+</Text>
                </View>
                <View style={{height:34, width:1.5, backgroundColor:'#EAEDFB', marginHorizontal:6}}></View>
                <FlatList 
                horizontal
                data={colorList} 
                keyExtractor={(item, index) => index + item}
                renderItem={({item}) => (
                    <View style={{width:34, height:34, borderRadius:17, backgroundColor:item, marginRight:8}}></View>
                )}
                />
            </View>
        </View>
        <View style={{marginVertical:13}}>
            <Text style={{fontSize:14, fontWeight:'bold',marginLeft:25, marginBottom:15}}>Logo</Text>
            <View style={styles.profileContainer}>
                <View style={styles.logCardBox}>
                    <Image source={require('../images/cards.png')} />
                </View>
                <View style={styles.changePhotoBox}>
                    <FontAwesome5 name='pen' style={{color:'#2242D8'}} />
                    <Text style={{fontSize:12, fontWeight:'400'}}>Change photo</Text>
                </View>
            </View>
        </View>
    </View>
  )
}

export default Display