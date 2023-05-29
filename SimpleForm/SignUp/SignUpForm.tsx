import { View, Text } from 'react-native'
import React, { useState } from 'react'
import Input from '../Input/Input'
import SubmitButton from '../FormSubmitButton/SubmitButton';

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

const SignUpForm = () => {
  const [userInfo, setUserInfo] = useState({
    fullName:'',
    email:'',
    password:'',
    confirmPassword:''
  });
  const [error, setError] = useState('')

  const {fullName, email, password, confirmPassword} = userInfo;

  const handleChange = (value, fieldName) => {
    setUserInfo({...userInfo, [fieldName]:value})
  };

  const isValidForm = () => {
    if(!isValidObjField(userInfo)) return updateErr('Required all fields!', setError);
    if(!fullName.trim() || fullName.length < 3 ) return updateErr('Invalid Name!', setError);
    if(!isValidEmail(email)) return updateErr('Invalid Email!', setError);
    if(!password.trim() || password.length < 8) return updateErr('Password should contains minimum 8 charecter!', setError);
    if(password !== confirmPassword) return updateErr('Password does not match!', setError);
    return true;
  }

  const submitForm = () => {
    if(isValidForm()){
      console.log('====================================');
      console.log(userInfo);
      console.log('====================================');
    }
  }
  return (
    <View style={{flex:1, justifyContent:'center'}}>
      {error ? <Text style={{color:'red', fontSize:18, textAlign:'center'}}>{error}</Text>:null}
      <Input 
      value={fullName}
      onChangeText = {(value) => handleChange(value, 'fullName')}
      placeholder='Full Name' 
      lable='Name'/>
      <Input 
      value={email}
      onChangeText = {(value) => handleChange(value, 'email')}
      autoCapitalize='none' 
      placeholder='example@gmail.com' 
      lable='Email'/>
      <Input 
      value={password}
      onChangeText = {(value) => handleChange(value, 'password')}
      autoCapitalize='none' 
      secureTextEntry
      placeholder='********' 
      lable='Password'/>
      <Input 
      value={confirmPassword}
      onChangeText = {(value) => handleChange(value, 'confirmPassword')}
      autoCapitalize='none'
      secureTextEntry
      placeholder='********' 
      lable='ConfirmPassword'/>
      <SubmitButton title='Submit' onPress={submitForm} />
    </View>
  )
}

export default SignUpForm