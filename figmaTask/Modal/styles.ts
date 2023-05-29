import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    modalContainer: {
        width: '100%',
        height: 338,
        backgroundColor: '#fff',
        borderRadius: 10,
        position:'absolute',
        bottom:0,
        borderTopStartRadius:20,
        borderTopEndRadius:20,
        display:'flex',
        alignItems:'center',
        justifyContent:'space-evenly'
    },
    smallBox:{
        width:60,
        height:7,
        backgroundColor:'#E5ECFF',
        borderRadius:42
    },
    mainText:{
        fontSize: 20,
        fontWeight: '600',
        alignSelf: 'center',
        textAlign: 'center',
        color:'#2242D8'
      },
      subText:{
        fontSize:12,
        color:'#7286E6',
        width:180,
        textAlign:'center'
      },
      yesBtn:{
        backgroundColor:'#2242D8',
        width:280,
        height:55,
        borderRadius:20,
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
     },
     noBtn:{
        backgroundColor:'#ffff',
        width:280,
        height:55,
        borderRadius:20,
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        borderWidth:1,
        borderColor:'#2242D8'
     },
     btnContainer:{
        width:'100%',
        height:120,
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between'},
    yesTxt:{
        color:'#ffff',
        fontSize:16,
        fontWeight:'bold',
    },
    noTxt:{
        color:'#2242D8',
        fontSize:16,
        fontWeight:'bold'
    }
});

export default styles;