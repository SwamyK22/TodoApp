import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        backgroundColor:'#ffff',
        alignItems:'center',
        justifyContent:'space-around'
    },
    subContainer1:{
        width:284,
        display:'flex',
    },
    signText:{
        color:'#8899EA',
        fontSize:16,
        fontWeight:'500'
    },
    welcomeText:{
        color:'#2242D8',
        fontSize:24,
        fontWeight:'400'
    },
    crText:{
        fontSize:12,
        color:'#8899EA'
    },
    inputContainer:{
        width:325,
        height:67,
        borderWidth:1,
        borderRadius:20,
        borderColor:'#2242D8',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:20,
        marginTop:10
    },
    inputLable:{
        color:'#2242D8',
        fontSize:12,
        fontWeight:'500'
    },
    inputBox:{
        color:'#2242D8',
        fontSize:16,
        fontWeight:'bold'
    },
    nextBtn:{
        width:280,
        height:55,
        backgroundColor:'#2242D8',
        borderRadius:20,
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    },
    nxtTxt:{
        color:'#ffff',
        fontSize:16,
        fontWeight:'500'
    }, 
    subContainer3:{
        height:'15%',
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between'
    },
    subContainer2:{
        height:'28%',
        display:'flex',
        alignItems:'flex-start',
        justifyContent:'space-between'
    },

});
export default styles;