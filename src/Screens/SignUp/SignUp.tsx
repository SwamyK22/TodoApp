import { View, Text, FlatList, Image, TouchableOpacity, Pressable } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { Formik, } from 'formik';
import {SafeAreaView} from 'react-native-safe-area-context';
import { inputFields } from './InputFields';
import Input from '../../Components/Input/Input';
import { initValue } from './InputFields';
import axiosInstance from '../../utils/axiosInstance';
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserContext } from '../../Context/userContext';

const errorRemover = (dispatch) => {
  setTimeout(() => {
      dispatch({type:'ERROR', payload: null})
  }, 2000);
};

const validate = (values) => {
  const errors = {};
  if(!values.name){
    errors.name = '...Required'
  }
 
   if (!values.email) {
     errors.email = '...Required';
   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
     errors.email = '...Invalid email address';
   }
   if(!values.password){
    errors.password = '...Required'
  }
  if(!values.confirmPassword){
    errors.confirmPassword = '...Required'
  }
  else if(values.password !== values.confirmPassword){
    errors.confirmPassword = '...Password should match'
  }
 
 
   return errors;
}

const SignUp = ({navigation}) => {

  const error = useSelector((state) => state.Error.error)
  const dispatch = useDispatch();
  
  

  const register = async (values) => {
    // await AsyncStorage.setItem('users', JSON.stringify([]))
    const { confirmPassword, ...rest } = values;
    if(rest.name !== '' && rest.email !== '' && rest.password !== ''){
      if(rest.password.length > 3){
        const users = await AsyncStorage.getItem('users');
        const parseUser = JSON.parse(users)
        parseUser.push(rest)
        
        await AsyncStorage.setItem('users', JSON.stringify(parseUser))
        await AsyncStorage.setItem('token', JSON.stringify(rest));
        dispatch({type:'ADD_USER', paylaod:rest})
        navigation.navigate('home')
      }
      else {
        dispatch({type:'ERROR', payload:"Password too small"});
        errorRemover(dispatch)
      }
    }else {
      dispatch({type:'ERROR', payload:'Field should not be empty'});
      errorRemover(dispatch)
    }
      
  }
  
  // useEffect(() => {
  //   const token = AsyncStorage.getItem('token')
  //   console.log('====================================');
  //   console.log('token'+token);
  //   console.log('====================================');
  //   if(token) navigation.navigate('home')
  // }, []);


  return (
    <SafeAreaView className='flex min-h-full py-12 px-4'>
      <Image source={require('../../assests/signin/refer.png')} style={{width:50, height:50, alignSelf:'center'}}/>
        <Text className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Sign in to your account</Text>
        <TouchableOpacity 
        onPress={() => navigation.navigate('login')}
        className="my-2 flex-row" style={{alignSelf:'center'}}>
          <Text className='text-center text-sm text-gray-600 mx-4'>or</Text>
          <Text className="font-medium text-indigo-600 hover:text-indigo-500">Login here</Text>
        </TouchableOpacity>
    <Formik
    initialValues={initValue}
    onSubmit={(values) => register(values)}
    validate={validate}
    >{
        ({values, handleChange, handleBlur, handleSubmit, errors, touched, isSubmitting, isValid}) => (
          <View>
            {error && (
          <Text className="text-center text-red-500 text-sm font-medium mb-2">
            {error}
          </Text>
          )}
            <FlatList 
            data={inputFields}
            keyExtractor={(item, index) => index + item.name}
            renderItem={({item}) => (
              <>
                <Input 
                className={item.className} 
                placeholder={item.placeholder} 
                value={values[item.name]}
                onChangeText={handleChange(item.name)}
                onBlur={handleBlur(item.name)}
                />
                {errors[item.name] && touched[item.name] ? ( <Text 
                  style={{color:'red'}}
                  >{errors[item.name]}</Text>) : null}
              </>
            )}
            className="-space-y-px rounded-md shadow-sm"
            />
            <Pressable 
            onPress={handleSubmit}
            disabled={isSubmitting || !isValid}
            className='mt-6 group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:bg-slate-400 disabled:cursor-wait'>
              <Text className='text-white font-bold text-center'>Submit</Text>
            </Pressable>
            </View>
        )
    }</Formik>
    </SafeAreaView>
  )
}

export default SignUp