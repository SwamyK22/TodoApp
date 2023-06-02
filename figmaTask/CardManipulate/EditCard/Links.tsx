import { View, Text, StyleSheet, Image, FlatList } from 'react-native'
import React, { useCallback, useMemo, useRef } from 'react'
import BottomSheet from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';


const styles = StyleSheet.create({
    container: {
      height:'100%',
      padding: 24,
      backgroundColor:'#0001'
    },
    contentContainer: {
      flex: 1,
      backgroundColor:'#E9ECFB',
      paddingHorizontal:25
    },
    card:{
        width:93,
        height:93,
        backgroundColor:'#ffff',
        borderRadius:20,
        alignItems:'center',
        justifyContent:'space-evenly',
        marginVertical:5
    },
    cardList:{
        flexDirection:'row',
        flexWrap:'wrap'
    }
  });

  const cardList = [
    {
        text:'Numbers',
        img: require('./cardImgs/telephone.png')
    },
    {
        text:'Links',
        img: require('./cardImgs/link.png')
    },
    {
        text:'Account',
        img: require('./cardImgs/linkedin.png')
    },
    {
        text:'Account',
        img: require('./cardImgs/instagram.png')
    },
    {
        text:'Account',
        img: require('./cardImgs/twitter.png')
    },
    {
        text:'Account',
        img: require('./cardImgs/facebook.png')
    },
    {
        text:'Account',
        img: require('./cardImgs/youtube.png')
    },
    {
        text:'Account',
        img: require('./cardImgs/github.png')
    },
    {
        text:'Account',
        img: require('./cardImgs/dribble.png')
    },
    {
        text:'Account',
        img: require('./cardImgs/behance.png')
    },
    {
        text:'Account',
        img: require('./cardImgs/spotify.png')
    },
    {
        text:'Account',
        img: require('./cardImgs/twitch.png')
    },
  ]

const Links = () => {
    // ref
    const bottomSheetRef = useRef<BottomSheet>(null);


  // variables
  const snapPoints = useMemo(() => ['5%', '25%', '50%', '90%'], []);

//   callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  
  const renderItem = ({item}) => (
    <View style={styles.card}>
            <Image source={item.img} style={item.text === 'Account' ? {width:23, height:23,} : {width:23, height:23, tintColor:'#2242D8'}} />
            <Text style={{fontSize:12, fontWeight:'bold', color:'#2242D8',}}>{item.text}</Text>
          </View>
  );

  return (
    <GestureHandlerRootView>
    <View style={styles.container}>
      <BottomSheet
        ref={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
        // onChange={handleSheetChanges}
      >
        <View style={styles.contentContainer}>
          <Text style={{fontSize:14, fontWeight:'500', marginTop:20}}>Add links and contacts</Text>
          <Text style={{color:'#6C6C6C', fontSize:12, fontWeight:'400',marginBottom:16}}>Top on field to add</Text>
          <View
          style={styles.cardList}
          >{cardList.map((x,i) => (
            <View style={i==1 || i==4 || i==7 || i==10 ? {...styles.card, marginHorizontal:15} :styles.card} key={x.text + i}>
            <Image source={x.img} style={x.text === 'Account' ? {width:23, height:23,} : {width:23, height:23, tintColor:'#2242D8'}} />
            <Text style={{fontSize:12, fontWeight:'bold', color:'#2242D8',}}>{x.text}</Text>
          </View>
          ))
            }</View>
        </View>
      </BottomSheet>
    </View>
    </GestureHandlerRootView>
  );
};




export default Links