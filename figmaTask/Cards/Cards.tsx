import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './CardStyle'

const Cards = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.heyContainer}>
        <Text style={styles.heyTxt}>Hey, John</Text>
        <View style={styles.imgContainer}>
          <Image source={require('./model.png')} style={{width:26, height:26}} />
        </View>
      </View>
      <View style={styles.subContainer}>
        <View style={{height:110, alignSelf:'center', marginVertical:15}}>
        <Image source={require('./empty.png')} />
        </View>
        <Text style={styles.nothingTxt}>Nothing in your card list!</Text>
        <Text style={styles.woriedTxt}>No worried make your first digital business card now</Text>
      </View>
    </View>
  )
}

export default Cards