import { View, Text, Image, Pressable, ScrollView } from 'react-native'
import React from 'react'
import styles from './AboutStyle'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const About = () => {
  return (
    <ScrollView>
      <View>
        <Image 
        source={{uri: 'https://images.news18.com/ibnlive/uploads/2023/05/collage-maker-10-may-2023-11-52-pm-4718-16837429793x2.jpg?impolicy=website&width=510&height=356', headers: {'Accept': 'image/*'}}}
        style={{ width: '100%', height:300, borderWidth:2,}} />
      </View>
      
      <View style={styles.title}>
        <Text style={styles.titleTxt}>Virat Kohli</Text>
      </View>

      <View style={styles.aboutContainer}>
        <Text style={styles.aboutTitle}>About</Text>
        <Text style={styles.aboutTxt}>A UX designer must have strong problem-solving
             skills and be able to identify pain points in the user 
             journey and find solutions to improve the user experience.
        </Text>
      </View>

      <View style={styles.perCintainer}>
        <Text style={styles.aboutTitle}>Personal details</Text>
        <View style={styles.perDetails}><Text style={styles.perTxt}>Email address: </Text><Text style={styles.perVal}>virat@gmail.com</Text></View>
        <View style={styles.perDetails}><Text style={styles.perTxt}>Mobile Number: </Text><Text style={styles.perVal}>+919743641208</Text></View>
      </View>

      <View style={styles.compCintainer}>
        <Text style={styles.aboutTitle}>Company details</Text>
        <View style={styles.perDetails}><Text style={styles.perTxt}>Company name: </Text></View>
        <View style={styles.perDetails}><Text style={styles.perTxt}>Designation: </Text><Text style={styles.perVal}>Creative designer</Text></View>
        <View style={styles.perDetails}><Text style={styles.perTxt}>Department: </Text><Text style={styles.perVal}>Design</Text></View>
        <View style={styles.perDetails}><Text style={styles.perTxt}>Mobile Number: </Text><Text style={styles.perVal}>+918756432896</Text></View>
      </View>

      <View style={styles.contactContainer}>
        <Text style={styles.aboutTitle}>Contact & Social links</Text>
        <View style={styles.contactNo}>
          <FontAwesome5 name='phone-alt' style={{ fontSize:20, color:'#2242D8', padding:10}}/>
          <View style={{display:'flex', width:'85%', justifyContent:'space-between', flexDirection:'row'}}>
          <View style={{display:'flex', justifyContent:'space-between', height:55}}>
            <Text style={styles.contactTxt}>+917893562945</Text>
            <Text style={styles.contactTxt}>+919749765435</Text>
          </View>
          <View style={{display:'flex', justifyContent:'space-between', height:55}}>
            <Text style={styles.contactType}>(For work)</Text>
            <Text style={styles.contactType}>(WhatsApp only)</Text>
          </View>
          </View>
        </View>
        <View style={styles.contactLink}>
          <FontAwesome5 name='link' style={{ fontSize:20, color:'#2242D8', padding:10}}/>
          <Text style={styles.contactType}>(Product web)</Text>
        </View>
        <View style={styles.contactLinkedin}>
          <View style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
          <FontAwesome5 name='linkedin' style={{ fontSize:20, color:'#2242D8', padding:10}}/>
          <Text style={styles.contactTxt}>viratkohli18</Text>
          </View>
          <Text style={styles.contactType}>(Product page)</Text>
        </View>
      </View>

      <Pressable style={styles.btn}>
        <Text style={styles.btnTxt}>Share contact</Text>
      </Pressable>
    </ScrollView>
  )
}

export default About;