import { View, Text, Image, StyleSheet, TextInput, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Checkbox from 'expo-checkbox';
import styles from './styles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Input from '../Input/Input';

const isValidObjField = (obj) => {
    return Object.values(obj).every((x) => x)
  };
  
  const isValidEmail = (value) => {
    const rgx = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    return rgx.test(value)
  }
  const updateErr = (error, stateUpdater) => {
    stateUpdater(error);
    setTimeout(() => {
      stateUpdater('')
    }, 2500);
  }

const LogIn = ({navigation}) => {
    const [iconChnge, setIconChange] = useState({
        eye:false,
        val:''
    });
    const [userInfo, setUserInfo] = useState({
        Name:'',
        Email:'',
        Password:'',
      });
      const [error, setError] = useState('')
    
      const {Name, Email, Password} = userInfo;
    
      const handleChangeFn = (value, fieldName) => {
        setUserInfo({...userInfo, [fieldName]:value})
      };
    
      const isValidForm = () => {
        if(!isValidObjField(userInfo)) return updateErr('Required all fields!', setError);
        if(!Name.trim() || Name.length < 3 ) return updateErr('Invalid Name!', setError);
        if(!isValidEmail(Email)) return updateErr('Invalid Email!', setError);
        if(!Password.trim() || Password.length < 8) return updateErr('Password should contains minimum 8 charecter!', setError);
        return true;
      }
    
      const submitForm = () => {
        if(isValidForm()){
          console.log('====================================');
          console.log(userInfo);
          console.log('====================================');
        }
      }

  const inputList = [{lable:'Email', val:Email}, {lable:'Password', val:Password}]
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
        keyExtractor={(item, index) => item.lable + index}
        data={inputList}
        renderItem={({item}) => {
        const icon = iconChnge.eye && iconChnge.val === item.lable ? 'eye' : 'eye-slash';

            return (
                <View style={styles.inputContainer}>
                <View style={{width:'80%'}}>
                <Text style={styles.inputLable}>{item.lable}</Text>
                <Input
                value={item.val}
                secureTextEntry={icon === 'eye-slash' && item.lable.includes('assword')} 
                placeholder={item.lable}
                onChangeText={(value) => handleChangeFn(value, item.lable)}
                style={styles.inputBox} />
                </View>
                {item.lable.includes('assword') && <FontAwesome5 onPress={() => setIconChange({...iconChnge, eye:!iconChnge.eye, val:item.lable})} name={icon} size={20}/>}
                </View>
            )
        }}
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