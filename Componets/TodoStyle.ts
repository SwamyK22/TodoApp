import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    todoTitle: { fontSize:30, fontWeight: 'bold', textAlign: 'center'},
    mainContainer: {height:'100%', marginTop: 30, position:'relative'},
    todoContainer: {display: 'flex', flexDirection:'row', width:'100%', margin: 20 },
    todoInput: {borderWidth:2, width:'70%',  borderTopLeftRadius:5,
    borderBottomLeftRadius:5, paddingHorizontal: 5, },
    todoList: { flex: 1,},
    listItem: {display: 'flex', flexDirection: 'row', width:'100%', alignItems: 'center', marginTop:10},
    filterContainer: {display: 'flex', flexDirection: 'row', width:'100%', position:'absolute', bottom:31,},
    filterBtnTxt: {color:'white', textAlign: 'center', fontWeight:'500'},
    listUpdTxt: {textDecorationLine: 'line-through', flex: 1},
});

export default styles;