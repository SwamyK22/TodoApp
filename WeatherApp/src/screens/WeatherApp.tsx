import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Input from '../Components/Input'

const temList = [
    {time:12, temp:23.8},
    {time:1, temp:23.4},
    {time:2, temp:23.1},
    {time:3, temp:22.8},
    {time:4, temp:22.5},
    {time:5, temp:22.9},
];
const infoList = [
    {title:'Sunrise', val:'05:53 AM'},
    {title:'Wind', val:'13 km/h'},
    {title:'Precipitation', val:'0 mm'},
    {title:'Sunset', val:'06:43 PM'},
    {title:'Pressure', val:'1016 mb'},
    {title:'Humidity', val:'70%'},
];
const weekReport = [
    {day:'Satuerday', img: require('../../assets/sun.png'), temp:84.2, tempDown:72.7, tempUp:98.2},
    {day:'Sunday', img: require('../../assets/rainy-day.png'), temp:81.7, tempDown:73.9, tempUp:93.7},
    {day:'Monday', img: require('../../assets/rainy.png'), temp:80.4, tempDown:72.8, tempUp:93.2},
]

const WeatherApp = () => {
    const [flag, setFlag] = useState(false);
  return (
    <View
    style={styles.mainContainer}
    >
      {!flag && <Input placeholder='Search City'/>}
      {!flag ? (<Text style={styles.dateText}>Saturday, June 3</Text>):(
        <TouchableOpacity onPress={() => setFlag(false)}>
        <Image source={require('../../assets/down-arrow.png')} style={{...styles.downArrow, width:30, height:30, marginTop:40}}/>
        </TouchableOpacity>
      )}
      <Text style={styles.cityText}>Bangalore</Text>
      <Text style={styles.countryTxt}>India</Text>
      {!flag &&<View style={{alignItems:'center', marginVertical:10}}>
       <View style={styles.subContainer}>
        <View style={styles.tempContainer}>
            <Text style={styles.temp}>29&deg;</Text>
            <Text style={styles.feelsTxt}>Feels like 29.9&deg;</Text>
            <View style={styles.arrowBox}>
                    <Image source={require('../../assets/down-arrow.png')} style={styles.downArrow}/>
                <Text style={styles.degTxt}>
                    22.6&deg;
                </Text>
                    <Image source={require('../../assets/down-arrow.png')} style={styles.upArrow}/>
                <Text style={styles.degTxt}>
                    36.6&deg;
                </Text>
            </View>
        </View>
        <Image source={require('../../assets/partly-cloudy.png')} style={{width:100, height:100}} />
      </View>
      <Text style={styles.messageTxt}>Partly cloudy</Text>
      </View>}
      <View style={styles.bottomContainer}>
      <View 
      style={styles.timeList}
      >
      <FlatList 
      showsHorizontalScrollIndicator={false}
      horizontal
      data={temList}
      keyExtractor={(item, index) => index + ''}
      renderItem={({item}) => (
        <View style={styles.listItem}>
            <Text style={styles.timeTxt}>{item.time} AM</Text>
            <Text style={styles.tempTxt}>{item.temp}&deg;</Text>
        </View>
      )}
      />
      </View>
      {flag && <View style={{height:220}}>
            <FlatList 
            data={weekReport}
            keyExtractor={(item, index) => index + item.day}
            renderItem={({item}) => (
                <View style={styles.weekItem}>
                <Text style={{...styles.dateText, width:90}}>{item.day}</Text> 
                <Image source={item.img} style={{width:20, height:20}}/>
                <Text style={{fontWeight:'bold', color:'#ffff'}}>{item.temp}&deg;</Text>  
                <View style={styles.arrowBox}>
                    <Image source={require('../../assets/down-arrow.png')} style={styles.downArrow}/>
                <Text style={styles.degTxt}>
                    {item.tempDown}&deg;
                </Text>
                    <Image source={require('../../assets/down-arrow.png')} style={styles.upArrow}/>
                <Text style={styles.degTxt}>
                    {item.tempUp}&deg;
                </Text>
            </View>
                </View>
            )}
            />
        </View>}
      <View style={styles.timeContainer}>
        {infoList.map((x) => (
            <View style={styles.infoItem} key={x.title}>
            <Text style={styles.infoTitle}>{x.title}</Text>
            <Text style={styles.infoVal}>{x.val}</Text>
            </View>
        ))}
      </View>
      {!flag && <TouchableOpacity onPress={() => setFlag(true)}>
      <Image source={require('../../assets/down-arrow.png')} style={{...styles.upArrow, height:30, width:30,marginTop:30}}/>
      </TouchableOpacity>
      }
        
      </View>
    </View>
  )
}

export default WeatherApp

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        backgroundColor:'#19C3FB',
        alignItems:'center',
    },
    dateText:{
        fontSize:16,
        color:'#ffffff99',
        marginVertical:10
    },
    cityText:{
        fontSize:26,
        color:'#ffffff'
    },
    countryTxt:{
        color:'#ffffff99',
        marginVertical:10
    },
    temp:{
        fontSize:60,
        color:'#ffffff'
    },
    downArrow:{
        width:15,
        height:15,
        tintColor:'#ffffff99',
    },
    upArrow:{
        width:15,
        height:15,
        transform:[{rotate:'180deg'}],
        tintColor:'#ffffff99',
        marginLeft:10
    },
    subContainer:{
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center'
    },
    feelsTxt:{
        color:'#ffffff99',
        fontSize:12,
        marginVertical:5
    },
    degTxt:{
        color:'#ffffff',
        fontSize:16,
    },
    arrowBox:{
        flexDirection:'row',
        alignItems:'center',
    },
    tempContainer:{
        width:'30%',
        alignItems:'center'
    },
    bottomContainer:{
        width:'100%',
        alignItems:'center',
    },
    messageTxt:{
        color:'#ffffff',
        fontSize:25,
        fontWeight:'bold',
        marginVertical:15
    },
    timeList:{
        width:'100%',
        borderColor:'#ffffff99',
        borderTopWidth:1,
        borderBottomWidth:1,
        height:90
    },
    listItem:{
        alignItems:'center',
        marginHorizontal:10,
        justifyContent:'space-evenly'
    },
    timeTxt:{
        color:'#ffffff99',
        fontSize:12,
        textAlign:'center'
    },
    tempTxt:{
        fontSize:20,
        color:'#ffffff',
        textAlign:'center'
    },
    timeContainer:{
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-evenly',
    },
    infoItem:{
        marginHorizontal:5,
        width:100,
        height:40,
        marginVertical:15
    },
    infoTitle:{
        color:'#ffffff99',

    },
    infoVal:{
        color:'#ffffff',
        fontSize:20
    },
    weekItem:{
        flexDirection:'row',
        width:'100%',
        marginVertical:15,
        justifyContent:'space-evenly'
    }
})