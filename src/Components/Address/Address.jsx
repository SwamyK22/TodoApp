import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import SelectDropdown from 'react-native-select-dropdown'


const Address = () => {
    const user = useSelector((state) => state.User);
  return (
    <View style={styles.mainCntainer}>
        <View style={{flexDirection:'row', alignItems:'center'}}>
            <Image source={require('../../assests/delivery-truck.png')} style={styles.img} />
            <Text style={{fontSize:16, fontWeight:'bold', color:'#99f505', marginLeft:10}}>Free Delivery</Text>
        </View>
        <View style={styles.container}>
        
        <View>
            <View style={{flexDirection:'row', alignItems:'center'}}>
        <Text style={{fontSize:16}}>Delivered to: </Text>
        <Text style={{fontWeight:'bold', fontSize:20,}}> {user.name}</Text>
        </View>
        <Text style={styles.email}>{user.email}</Text>
        </View>
        <SelectDropdown 
        data={['Home', 'Office']}
        defaultValue='Home'
        buttonStyle={{width:70, height:30, borderRadius:5, marginHorizontal:25}}
        buttonTextStyle={{fontSize:12, fontWeight:'bold'}}
        rowStyle={{ height:30,}}
        rowTextStyle={{fontSize:12, fontWeight:'bold'}}
        />
    </View>
    </View>
    
  )
}

export default Address

const styles = StyleSheet.create({
    mainCntainer:{
        marginVertical:5,
        paddingHorizontal:5,
        borderTopWidth:1,
        borderBottomWidth:1,
        borderColor:'#123',
        paddingVertical:10,
        width:'100%'
    },
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        
      },
      email:{
        fontSize:18,
        color:'#bdb9b9',
        fontWeight:'bold'
      },
      img:{
        width:30,
        height:30
      },
      imgContainer: {
        flexDirection:'row',
        alignItems:'center'
      }
})