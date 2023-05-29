import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    title:{
        borderBottomWidth:2,
        marginHorizontal:25,
        borderColor: 'rgba(172, 185, 255, 0.5)'
    },
    titleTxt:{
        fontSize:26,
        fontWeight:'bold',
        marginVertical:24,
    },
    aboutContainer:{
        display: 'flex',
        marginHorizontal:25,
        borderBottomWidth:2,
        borderColor: 'rgba(172, 185, 255, 0.5)'
    },
    aboutTitle:{
        fontSize:20,
        fontWeight:'bold',
    },
    aboutTxt : {
        marginVertical:10,
        fontSize:17,
        color:'gray',
        fontWeight:'500'
    },
    perCintainer:{
        display: 'flex',
        marginHorizontal:25,
        borderBottomWidth:2,
        borderColor: 'rgba(172, 185, 255, 0.5)',
        justifyContent: 'space-between',
        height:120,
        paddingVertical:15
    },
    perDetails:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
    },
    perTxt:{
        fontSize:17,
        color:'gray',
        fontWeight:'500',
    },
    perVal:{
        fontSize:17,
        fontWeight:'bold',
    },
    compCintainer:{
        display: 'flex',
        marginHorizontal:25,
        borderBottomWidth:2,
        borderColor: 'rgba(172, 185, 255, 0.5)',
        justifyContent: 'space-between',
        height:200,
        paddingVertical:15,
    },
    contactContainer: {
        display: 'flex',
        marginHorizontal:25,
        paddingVertical:15,
    },
    contactNo:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'#EAEDFB',
        height:80,
        borderRadius:15,
        paddingHorizontal:5,
        marginVertical:10
    }, 
    contactTxt: {
        fontSize:15,
        color: '#2242D8',
        fontWeight:'500'
    },
    contactType: {
        fontSize:12,
        color: '#2242D8',
        fontWeight:'500',
        textAlign:'right'
    },
    contactLink:{
        backgroundColor:'#EAEDFB', 
        borderRadius:15,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:10
    },
    contactLinkedin:{
        backgroundColor:'#EAEDFB', 
        borderRadius:15,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:10,
        height:80,
        marginVertical:10
    },
    btn:{
        backgroundColor:'#2242D8',
        borderRadius:20,
        marginHorizontal:35,
        paddingVertical:20,
        marginBottom:20
    },
    btnTxt:{
        fontSize:17,
        color: 'white',
        fontWeight:'500',
        textAlign:'center'
    }
})

export default Styles;