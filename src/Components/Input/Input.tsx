import { TextInput, StyleSheet } from 'react-native'
import React from 'react'
import clsx from 'clsx';

const Input = (props) => {

    const { placeholder, className } = props;

  return (
    <TextInput
     {...props} 
     placeholder={placeholder} 
     className={clsx(
      'relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm',
      { [className]: !!className },
    )}
     />
  )
}

export default Input;

const styles = StyleSheet.create({
    input:{
        borderWidth:1
    }
})