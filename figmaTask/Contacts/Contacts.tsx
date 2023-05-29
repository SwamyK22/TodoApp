import { View, Text, TextInput, Image, Pressable, FlatList } from 'react-native'
import React from 'react'
import styles from './ContactStyles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'


const Contacts = ({navigation}) => {

    const list = [
        {
            text:'All Contacts',
            count:35,
            image: [require('./contactImg/img6.png'),
                    require('./contactImg/img4.png'),
                    require('./contactImg/img3.png'),
                    require('./contactImg/img2.png')]
        },
        {
            text:'Recently added',
            count:30,
            image: [require('./contactImg/img4.png'),
                    require('./contactImg/img2.png'),
                    require('./contactImg/img6.png'),
                    require('./contactImg/img5.png')]
        },
        {
            text:'Live Contacts',
            count:40,
            image: [require('./contactImg/img5.png'),
                    require('./contactImg/img3.png'),
                    require('./contactImg/img2.png'),
                    require('./contactImg/img4.png')]
        },
        {
            text:'Scanned',
            count:0,
            image: [require('./contactImg/imgEm.png'),
                    require('./contactImg/imgEm.png'),
                    require('./contactImg/imgEm.png'),
                    require('./contactImg/imgEm.png')]
        },
    ]

    const renderItem = ({item}) => (
        <Pressable style={styles.subContainer}
        onPress={() => {item.text == 'Scanned' ? navigation.navigate('Scanned'):''}}
      >
        <View style={{width:66, height:80, position:'relative'}}>
            <Image source={item.image[0]} style={{width:64, height:64}}/>
            <Image source={item.image[1]} style={{width:34, height:34, position:'absolute', bottom:5, left:-10}}/>
            <Image source={item.image[2]} style={{width:34, height:34, position:'absolute', bottom:0, left:18}}/>
            <Image source={item.image[3]} style={{width:34, height:34, position:'absolute', bottom:5, right:-10}}/>
        </View>
        <View style={{height:42, justifyContent:'space-between'}}>
            <Text style={{color:'#2242D8', fontSize:16, fontWeight:'bold'}}>{item.text}</Text>
            <Text style={{color:'#8B9CEB', fontSize:12, fontWeight:'400'}}>{item.count} contacts</Text>
        </View>
        <FontAwesome5 name='chevron-right' style={{color: '#2242D8'}} size={20} />
        </Pressable>
    );

  return (
    <View style={styles.mainContainer}>
      <View style={styles.contactsContainer}>
        <Text style={styles.contactTxt}>Contacts</Text>
        <View style={styles.crGroup}>
            <Text style={{...styles.crTxt, fontSize:25}}>+</Text>
            <Text style={styles.crTxt}>Create group</Text>
        </View>
      </View>
      <View style={styles.searchMainCont}>
        <View style={styles.searchContainer}>
            <View style={styles.circle}>
                <View style={{width:20, height:20, borderRadius:10, borderWidth:3, borderColor:'#2242D8'}}></View>
                <View style={{width:5, height:5, borderRadius:2, borderWidth:2, borderColor:'#2242D8', position:'absolute', bottom:-2, right:0}}></View>
            </View>
            <TextInput  placeholder='Search by job, name..'/>
        </View>
        <View style={styles.connectionCont}>
            <View style={{width:22, height:22, borderWidth:2, borderColor:'#2242D8', borderRadius:5, justifyContent:'center', alignItems:'center'}}>
                <Image source={require('./connection.png')} style={{width:18, height:18, tintColor:'#2242D8',}} />
            </View>
        </View>
      </View>
      <FlatList
      data={list}
      renderItem={renderItem}
      keyExtractor={(item, index) => item + index}
      />
    </View>
  )
}

export default Contacts