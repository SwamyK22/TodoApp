import { StyleSheet, Text, View , Button, Pressable} from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const CounterApp = () => {


    const dispatch = useDispatch();
    const {count, name} = useSelector((state) => ({
        count:state.Counter.count,
        name: state.Name
    }));

    const increment = (val) => {
        return {type:'INCREMENT', payload: val}
    }
    
    console.log(count);

  return (
    <View style={{flex:1,  alignItems:'center', paddingTop:40}}>
      <Button title='+' onPress={() => dispatch(increment(5))} />
      <Text>{count}</Text>
      <Button title='-' onPress={() => dispatch({type:'DECREMENT', payload: 2})} />
      <Text>Name: {name}</Text>
      <Pressable style={styles.btn}
      onPress={() => dispatch({type:'NAME', payload:'Swamy'})}
      >
        <Text style={{color:'#ffff'}}>Click</Text>
      </Pressable>
    </View>
  )
}

export default CounterApp

const styles = StyleSheet.create({
    btn:{
        width:150,
        height:30,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#2242D8'
    },
   
})