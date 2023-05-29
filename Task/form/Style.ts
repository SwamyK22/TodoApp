import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        display:'flex',
        height:250,
        alignItems: 'center',
        justifyContent:'space-evenly'
    },
    inputBox: {
        borderWidth:2,
        width:'60%',
        paddingHorizontal:5,
        borderRadius:5,
    },
    btnText:{
        color:'white',
        fontWeight:'bold',
        fontSize:20
    },
    tableHeader: {
        backgroundColor: '#DCDCDC',
        width:'100%',
      },
});

export default styles;