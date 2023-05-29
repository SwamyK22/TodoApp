import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    mainContainer: {
        width: '100%',
        height:'100%',
        display: 'flex',
        alignItems:'center',
        justifyContent:'space-evenly',
        position:'relative',
    },
    tabContainer:{
        width: 325,
        height:100,
        marginVertical: 29,
        borderRadius:20,
        borderWidth:2,
        backgroundColor: '#EAEDFB',
        borderColor:'#2242D8'
    },
    options: {
        width:325,
        padding:15,
        borderRadius:20,
        backgroundColor: '#EAEDFB',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginVertical:10
    },
    optionText: {
        color:'#2242D8',
        fontWeight: 'bold',
        fontStyle: 'normal',
        fontSize: 14,
    },
    logoutText: {
      position: 'absolute',
      right:100,
      bottom:30,
      fontWeight: '500',
      fontStyle: 'normal',
      fontSize: 12,
      color:'#EF4B4B'
    }
});

export default Styles;