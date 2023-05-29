import { View, Text, Image, Pressable, StyleSheet } from 'react-native'
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const styles = StyleSheet.create({
    scanCardBtn:{
        borderWidth:1,
        borderColor:'rgba(34, 66, 216, 0.5)', 
        borderRadius:20,
        width:115, height:40,
        display:'flex', alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#F5F7FD'
    },
    mainContainer:{flex:1, backgroundColor:'#EAEDFB', marginTop:32, marginHorizontal:25, borderTopEndRadius:20, borderTopStartRadius:20, alignItems:'center'},
    scanContainer:{height:'60%', display:'flex', justifyContent:'space-evenly', alignItems:'center'},
    contactBtn:{width:300,
        height:80,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
        backgroundColor:'#FFFF',
        borderWidth:1,              
        borderColor:'rgba(34, 66, 216, 0.5)',
        borderRadius:20,
        position:'absolute', top:364
    }
})

const ScanCard = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.scanContainer}>
        <Image 
        source={require('./scan.png')} 
        style={{width:77, height:77}}
        />
        <Text style={{color:'#2242D8', fontSize:16, fontWeight:'500'}}>Scan a new card</Text>
        <Text style={{color:'#869BFF', fontSize:12, fontWeight:'500', width:180, textAlign:'center'}}>Just tap on card to add contact from physical card</Text>
        <Pressable
         style={styles.scanCardBtn}
         onPress={() => navigation.navigate('scan')}
        >
            <Text style={{color:'#2242D8', fontWeight:'500'}}>Scan card</Text>
        </Pressable>
      </View>
      <Pressable
      style={styles.contactBtn}
      >
        <View style={{width:45, height:45, borderRadius:20, backgroundColor:'#EAEDFB', display:'flex', alignItems:'center', justifyContent:'center',}}>
            <Image source={require('./contact.png')} style={{width:25, height:25, tintColor:'#2242D8'}} />
        </View>
        <Text style={{color:'#2242D8', fontSize:16, fontWeight:'500'}}>See scanned contacts</Text>
        <FontAwesome5 name='chevron-right' style={{color: '#2242D8'}} />
      </Pressable>
    </View>
  )
}

export default ScanCard;