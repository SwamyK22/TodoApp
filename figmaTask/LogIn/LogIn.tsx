import { View, Text, Image, StyleSheet, TextInput, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import Checkbox from 'expo-checkbox';
import styles from './styles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const inputList = ['Email address', 'Password']
const renderItem = ({item}) => (
    <View style={styles.inputContainer}>
                <Text style={styles.inputLable}>{item}</Text>
                <TextInput placeholder={item} style={styles.inputBox}/>
                {item.includes('assword') && <Image source={require('../SignUp/hidden.png')} style={{width:25, height:25, position:'absolute', right:10, top:20}} />}
                {/* {item.includes('assword') && <FontAwesome5 name='eye-slash' style={{width:35, height:35, position:'absolute', right:10, top:20}}/>} */}

    </View>
)
const LogIn = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
        <View style={styles.subContainer1}> 
            <Text style={styles.signText}>Login</Text>
            <View style={{flexDirection:'row', justifyContent:'space-between', width:'80%'}}>
            <Text style={styles.welcomeText}>Welcome back</Text>
            <Image source={require('../SignUp/hand.png')} />
            </View>
            <Text style={styles.crText}>Enter your Email and password to continue</Text>
        </View>
        <View style={styles.subContainer2}>
        <FlatList 
         data={inputList}
         renderItem={renderItem}
         keyExtractor={(item, index) => item + index}
        />
        <TouchableOpacity>
        <Text style={{fontSize:13, color:'#2242D8', marginLeft:20, fontWeight:'500'}}>Forgot password?</Text>
        </TouchableOpacity>
        </View> 
        <View style={{flexDirection: 'row', alignItems: 'center',}}>
            <View style={{flex: 1, height: 1, backgroundColor: '#EBEEFC'}} />
            <View>
             <Text style={{width: 20, textAlign: 'center', color:'#6881F4', fontSize:16}}>or</Text>
            </View>
            <View style={{flex: 1, height: 1, backgroundColor: '#EBEEFC'}} />
        </View>
        <View style={{display:'flex', alignItems:'center', justifyContent:'center', height:'25%'}}>
            <TouchableOpacity>
            <Text style={{color:'#2242D8', fontWeight:'500', fontSize:16}}>Login with Mobile no.</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.subContainer3}>
            <View style={{flexDirection:'row', alignItems:'center'}}>
            <Text style={{fontSize:13, color:'#6C6C6C'}}>Already have an account? 
            </Text>
                <TouchableOpacity
                onPress={() => navigation.navigate('signup')}
                >
                    <Text style={{color:'#2242D8', fontWeight:'bold'}}>Signup</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.nextBtn}>
                <Text style={styles.nxtTxt}>Login</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default LogIn