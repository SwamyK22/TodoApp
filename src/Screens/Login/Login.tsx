import { View, Text, FlatList, Image, TouchableOpacity, Pressable } from 'react-native'
import React, { useContext, useEffect } from 'react'
import {SafeAreaView} from 'react-native-safe-area-context';
import { initValue, inputFields } from './initFields';
import Input from '../../Components/Input/Input';
import { Formik, Form } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { UserContext } from '../../Context/userContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

const errorRemover = (dispatch) => {
  setTimeout(() => {
      dispatch({type:'ERROR', payload: null})
  }, 2000);
};

const validate = (values) => {
  const errors = {};
 
   if (!values.email) {
     errors.email = '...Required';
   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
     errors.email = '...Invalid email address';
   }
   if(!values.password){
    errors.password = '...Required'
  }
   return errors;
}
const Login = ({navigation}) => {

  const error = useSelector((state) => state.Error?.error)
  const dispatch = useDispatch();


  const login = async (values) => {
    if(values.email !== '' && values.password !== ''){

      const users = await AsyncStorage.getItem('users');
        console.log(JSON.parse(users));
        const parseUser = JSON.parse(users)
        let ps;
        if(parseUser){
           ps = parseUser.find((x) => x.password === values.password && x.email === values.email)
        }
      if(ps){
        AsyncStorage.setItem('token', JSON.stringify(values));
        navigation.navigate('home')
      }
      else {
        dispatch({type:'ERROR', payload:"Input value miss match"});
        errorRemover(dispatch)
      }
    }else {
      dispatch({type:'ERROR', payload:'Field should not be empty'});
      errorRemover(dispatch)
    }
      
  }

  const addUser = async () => {
    const token = await AsyncStorage.getItem('token')
    if(token) {
      navigation.navigate('home');
    }
  }

  useEffect(() => {
    addUser()
  }, []);

  return (
    <SafeAreaView className='flex min-h-full py-12 px-4'>
      <Image source={require('../../assests/signin/refer.png')} style={{width:50, height:50, alignSelf:'center'}}/>
        <Text className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Login to your account</Text>
        <TouchableOpacity 
        onPress={() => navigation.navigate('register')}
        className="mb-4 mt-2 flex-row" style={{alignSelf:'center'}}>
          <Text className='text-center text-sm text-gray-600 mx-4'>or</Text>
          <Text className="font-medium text-indigo-600 hover:text-indigo-500">Register here</Text>
        </TouchableOpacity>
    <Formik
    initialValues={initValue}
    onSubmit={(values, { resetForm }) =>{ 
      login(values);
      resetForm();
    }}
    validate={validate}
    >{
        ({values, handleChange, handleBlur, handleSubmit, errors, touched}) => (
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
                <Input className={item.className} 
                placeholder={item.placeholder} 
                onChangeText={handleChange(item.name)}
                onBlur={handleBlur(item.name)}
                value={values[item.name]} />
                {errors[item.name] && touched[item.name] ? ( <Text 
                  style={{color:'red'}}
                  >{errors[item.name]}</Text>) : null}
                </>
            )}
            className="-space-y-px rounded-md shadow-sm"
            />
            <Pressable 
            onPress={handleSubmit}
            className='mt-6 group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:bg-slate-400 disabled:cursor-wait'>
              <Text className='text-white font-bold text-center'>login</Text>
            </Pressable>
            </View>
        )
    }</Formik>
    </SafeAreaView>
  )
}

export default Login