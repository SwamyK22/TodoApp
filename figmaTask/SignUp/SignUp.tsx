import { View, Text, Image, StyleSheet, TextInput, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Checkbox from 'expo-checkbox';
import styles from './styles';
import Input from '../Input/Input';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'


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
const SignUp = ({navigation}) => {
    const [iconChnge, setIconChange] = useState({
        eye:false,
        val:''
    });
    const [userInfo, setUserInfo] = useState({
        Name:'',
        Email:'',
        Password:'',
        confirmPassword:'',
      });
      const [error, setError] = useState('')
    
      const {Name, Email, Password, confirmPassword} = userInfo;
    
      const handleChangeFn = (value, fieldName) => {
        setUserInfo({...userInfo, [fieldName]:value})
      };
    
      const isValidForm = () => {
        if(!isValidObjField(userInfo)) return updateErr('Required all fields!', setError);
        if(!Name.trim() || Name.length < 3 ) return updateErr('Invalid Name!', setError);
        if(!isValidEmail(Email)) return updateErr('Invalid Email!', setError);
        if(!Password.trim() || Password.length < 8) return updateErr('Password should contains minimum 8 charecter!', setError);
        if(Password !== confirmPassword) return updateErr('Password does not match!', setError);
        return true;
      }
    
      const submitForm = () => {
        if(isValidForm()){
          console.log('====================================');
          console.log(userInfo);
          console.log('====================================');
        }
      }
  const inputList = [{lable:'Name', val:Name}, {lable:'Email', val:Email}, {lable:'Password', val:Password}, {lable:'Confirm password', val:confirmPassword}]
  return (
    <View style={styles.mainContainer}>
        <View style={styles.subContainer1}> 
            <Text style={styles.signText}>Sign up</Text>
            <View style={{flexDirection:'row', justifyContent:'space-between', width:'80%'}}>
            <Text style={styles.welcomeText}>Welcome to App</Text>
            <Image source={require('./hand.png')} />
            </View>
            <Text style={styles.crText}>Create your account to make your first business card</Text>
        </View>
        {error && <Text style={{fontSize:18, color:'red', textAlign:'center'}}>{error}</Text>}
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
        <View style={styles.checkBoxContainer}>
            <Checkbox />
            <Text style={{fontSize:13, color:'#6C6C6C'}}>I accepts the terms & conditions</Text>
        </View>
        </View> 
        <View style={styles.subContainer3}>
            <View style={{flexDirection:'row', alignItems:'center'}}>
            <Text style={{fontSize:13, color:'#6C6C6C'}}>Already have an account? 
            </Text>
                <TouchableOpacity
                onPress={() => navigation.navigate('login')}
                >
                    <Text style={{color:'#2242D8', fontWeight:'bold'}}>Login</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.nextBtn} onPress={submitForm}>
                <Text style={styles.nxtTxt}>Next</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default SignUp