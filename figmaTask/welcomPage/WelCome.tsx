import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const styles = StyleSheet.create({
    mainText:{
        fontSize:20,
        width:250,
        textAlign:'center',
        fontWeight:'500',
        color:'#FFFF',
        marginTop:58, 
        marginVertical:10
    },
    mainContainer:{
        flex:1,
        backgroundColor:'#2242D8',
        alignItems:'center',
        overflow:'hidden'
    },
    bottomContainer:{
        width:'100%',
        height:413,
        position:'absolute',
        bottom:0,
        backgroundColor:'#ffff',
        borderTopEndRadius:20,
        borderTopStartRadius:20,
        display:'flex',
        alignItems:'center',
        justifyContent:'space-around'
    },

    btnContainer:{
        width:'100%',
        height:120,
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between'},
    yesTxt:{
        color:'#ffff',
        fontSize:16,
        fontWeight:'bold',
    },
    noTxt:{
        color:'#2242D8',
        fontSize:16,
        fontWeight:'bold'
    },
    yesBtn:{
        backgroundColor:'#2242D8',
        width:280,
        height:55,
        borderRadius:20,
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
     },
     noBtn:{
        backgroundColor:'#ffff',
        width:280,
        height:55,
        borderRadius:20,
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        borderWidth:1,
        borderColor:'#2242D8'
     },
     smallBox:{
        width:60,
        height:7,
        backgroundColor:'#E5ECFF',
        borderRadius:42
    },
    mediaBtn:{
        flexDirection:'row',
        width:280,
        height:45,
        alignItems:'center',
        borderWidth:1,
        borderRadius:20,
        justifyContent:'center',
        borderColor:'rgba(34, 66, 216, 0.5)',
        position:'relative'
    },
    mediaTxt:{
        color:'#2242D8',
        fontSize:14,
        fontWeight:'bold'
    },
    mediaContainer:{
        display:'flex',
        alignItems:'center',
        height:160,
        justifyContent:'space-between'
    },
    mContainer:{
        width:250,
        height:330,
        backgroundColor:'#ffff',
        borderWidth:5,
        borderColor:'#CCE5FF',
        borderTopRightRadius:80,
        overflow:'hidden',
    },
    photo:{
        width:65,
        height:65,
        position:'absolute',
        zIndex:1,
        top:105,
        left:35
    }
})

const WelCome = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.mainText}>Let's make your first digital business card</Text>
      <Image source={require('./photo.png')} style={styles.photo} />
      <View style={{position:'absolute', backgroundColor:'#54A4EE', borderRadius:20, zIndex:1, top:150}}>
        <Text style={{color:'#ffff', paddingHorizontal:20, paddingVertical:10, fontWeight:'500'}}>Ryan john</Text>
      </View>
      <View style={{position:'absolute', backgroundColor:'#CCE5FF', width:140, height:55,  borderRadius:30, display:'flex', justifyContent:'space-around', paddingVertical:5, paddingHorizontal:20, alignItems:'flex-end', zIndex:1, top:200, left:140}}>
        <Text style={{fontSize:12, fontWeight:'500'}}>software engineer</Text>
        <Text style={{ fontSize:13, color:'#2242D8', fontWeight:'bold'}}>At Google</Text>
      </View>
      <View style={styles.mContainer}></View>
      <View style={styles.bottomContainer}>
        <View style={styles.smallBox} />
        {/* signin and login btns */}
        <View style={styles.btnContainer}>
             <TouchableOpacity
             style={styles.yesBtn}
             onPress={() => navigation.navigate('signup')}
             >
                <Text
                style={styles.yesTxt}
                >Sign up</Text>
             </TouchableOpacity>
             <TouchableOpacity
             style={styles.noBtn}
             onPress={() => navigation.navigate('login')}
             >
                <Text
                style={styles.noTxt}
                >Login to App</Text>
             </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center',}}>
            <View style={{flex: 1, height: 1, backgroundColor: '#EBEEFC'}} />
            <View>
             <Text style={{width: 20, textAlign: 'center', color:'#6881F4', fontSize:16}}>or</Text>
            </View>
            <View style={{flex: 1, height: 1, backgroundColor: '#EBEEFC'}} />
        </View>
        {/* sosial Media Btns */}
        <View style={styles.mediaContainer}>
            <TouchableOpacity style={styles.mediaBtn}>
                <Image source={require('./google.png')} style={{width:25, height:25, position:'absolute', left:20}} />
                <Text style={styles.mediaTxt}>Continue with Google</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.mediaBtn}>
                <Image source={require('./facebook.png')} style={{width:25, height:25, position:'absolute', left:20}} />
                <Text style={styles.mediaTxt}>Continue with Facebook</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.mediaBtn}>
                <Image source={require('./apple.png')} style={{width:26, height:35, position:'absolute', left:20}} />
                <Text style={styles.mediaTxt}>Continue with Apple</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default WelCome;