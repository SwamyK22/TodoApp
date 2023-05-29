import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    InputContainer: {height:100, width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'},
    InputBox: {borderWidth:1, width: '70%', paddingHorizontal:5, borderRadius: 5, paddingVertical:3, fontSize:25},
    headerTitle: {fontSize: 30, fontWeight: 'bold', borderTopWidth:2, color: '#089C93'},
    renderItem: {marginVertical:3, backgroundColor: '#F9F8A7', paddingVertical: 10,},
    itemText:{fontSize:25, fontWeight: 'bold'},
    userMain:{width:'90%', height:'40%', display:'flex', justifyContent:'space-evenly', marginHorizontal:20},
    userText: {fontSize:20, fontWeight: 'bold', borderBottomWidth:1, paddingHorizontal:5},
});

export default styles;