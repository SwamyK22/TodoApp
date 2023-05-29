import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        marginTop:30
    },
    imgContainer:{
        width:46,
        height:46,
        borderRadius:23,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#EAEDFB',
    },
    heyTxt:{
        fontSize:14,
        fontWeight:'bold',
        color:'#2242D8'
    },
    heyContainer:{
        width:115,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        position:'absolute',
        right:15
    },
    subContainer:{
        width:325,
        height:580,
        backgroundColor:'#EAEDFB',
        borderTopRightRadius:20,
        borderTopLeftRadius:20,
        bottom:0,
        position:'absolute',
        alignSelf:'center'
    },
    nothingTxt:{
        color:'#2242D8',
        fontSize:18,
        fontWeight:'bold',
        textAlign:'center',
    },
    woriedTxt:{
        width:220,
        color:'#869BFF',
        textAlign:'center',
        alignSelf:'center',
        fontWeight:'500',
        marginVertical:5
    },
    
});

export default styles;