import { View, Text, Button } from 'react-native'
import React from 'react'
import { connect, useDispatch, useSelector } from 'react-redux';
import { INCREMENT_COUNTER, DECREMENT_COUNTER } from './counterActionType';

const Counter = () => {

    const  { count }  = useSelector((state) => {
        console.log('====================================');
        console.log('state'+state);
        console.log('====================================');
        return {count:state}
    });
    const dispatch = useDispatch();
    console.log('====================================');
    console.log(count);
    console.log('====================================');
  return (
    <View style={{flex:1, alignItems:'center', justifyContent:'space-evenly'}}>
      <Text>Counter:</Text>
      <Button title='Increment' onPress={() => dispatch({type:INCREMENT_COUNTER, payload:1})}/>
      <Button  title='decrement' onPress={() => dispatch({type:DECREMENT_COUNTER, payload:1})}/>
    </View>
  )
}

export default Counter