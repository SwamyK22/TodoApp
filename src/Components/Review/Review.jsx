import { StyleSheet, View, Text, Image } from 'react-native';
import Stars from 'react-native-stars';
 

 const Review = ({rate, count}) => {
        const rating = rate % 1 > 0 ? Math.floor(rate) - 0.5 : rate
    return (
        <View style={styles.container} key={count}>
            <Stars
            default={rating}
            count={5}
            half={true}
            spacing={2}
            starSize={10} 
            fullStar={<Image source={require('../../assests/stars/star.png')} style={styles.star} />}
            emptyStar={<Image source={require('../../assests/stars/emptyStar.png')} style={styles.star} />}
            halfStar={<Image source={require('../../assests/stars/halfStar.png')} style={styles.star} />}
            />
            <Text style={styles.count}>{count} Reviews</Text>
        </View>
    )
 }


 
const styles = StyleSheet.create({
    container:{
        alignItems:'flex-start',
        paddingHorizontal:5,
        marginVertical:5
    },
  count:{
    fontSize:10, 
    fontWeight:'500',
    color:'#123'
  },
  star:{
    width:16,
    height:16,
    tintColor:'orange'
  }
});
export default Review;
