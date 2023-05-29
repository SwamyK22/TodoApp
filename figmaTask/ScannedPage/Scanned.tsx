import { View, Text, Image, TextInput, SectionList, FlatList, Pressable } from 'react-native'
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import styles from './ScanStayle';

const DATA = [
    {
        title:'A',
        data:[
            {
                name:'Aont reni',
                des:'Co-founder at visio',
                image: require('./contactImgs/EllipseImg.png')
            },
            {
                name:'Aimy len',
                des:'Marketing head at visio',
                image: require('../Contacts/contactImg/img6.png')
            },
        ]
    },
    {
        title:'B',
        data:[
            {
                name:'Ben roy',
                des:'Co-founder at visio',
                image: require('./contactImgs/EllipseImg.png')
            },
            {
                name:'Buzil ken',
                des:'Marketing head at visio',
                image: require('../Contacts/contactImg/img6.png')
            },
        ]
    },
    {
        title:'C',
        data:[
            {
                name:'Ciniz mel',
                des:'Co-founder at visio',
                image: require('./contactImgs/EllipseImg.png')
            },
            {
                name:'Cili ven',
                des:'Marketing head at visio',
                image: require('../Contacts/contactImg/img6.png')
            },
        ]
    },
]
const list=['A','B','C','D','E','F','G','H','I']

const renderItem = ({item}) => (
    <View style={styles.contactContainer}>
        <Image source={item.image} style={styles.contactImg} />
        <View style={styles.nameContainer}>
            <Text style={styles.nameTxt}>{item.name}</Text>
            <Text style={styles.desTxt}>{item.des}</Text>
        </View>
        <View style={styles.viewContainer}>
            <Text style={styles.viewTxt}>View</Text>
        </View>
      </View>
);
const renderSectionHeader = ({section}) => (
    <View style={styles.headerTxtContainer}>
        <Text style={styles.headerTxt}>{section.title}</Text>
      </View>
)

const Scanned = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.headContainer}>
        <Pressable style={styles.leftArrow}
        onPress={() => navigation.navigate('Contacts')}
        >
            <FontAwesome5 name='arrow-left' style={{color: '#2242D8'}} size={18} />
         </Pressable>
         <Text style={styles.headTxt }>Scanned</Text>
         <View style={{...styles.pCircle, right:50}}>
            <FontAwesome5 name='plus' style={{color: '#2242D8'}} size={15} />
         </View>
         <View style={styles.pCircle}>
         <FontAwesome5 name='pen' style={{color: '#2242D8'}} size={13} />
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
                <Image source={require('../Contacts/connection.png')} style={{width:18, height:18, tintColor:'#2242D8',}} />
            </View>
        </View>
      </View>
      <View style={{height:'82%'}}>
        <SectionList 
        sections={DATA}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        />
      </View>
      <View style={styles.sideSteper}>
        <FlatList 
        data={list}
        renderItem={({item}) => (
            <Text style={styles.steperTxt}>{item}</Text>
        )}
        />
      </View>
    </View>
  )
}

export default Scanned