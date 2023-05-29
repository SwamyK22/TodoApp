import { View, Text, TextInput, Pressable, SectionList } from 'react-native'
import React, { useState } from 'react'

const SectionListTask1 = () => {
   const [txt, setTxt] = useState('')
    const DATA = [
        {title: 'A',
         data:[
            {name: 'Akshay', mobile:78990},
            {name: 'Akshay S', mobile:78990},]
        },
        {
            title:'D',
            data:[{name:'Darshan', mobile:555598}]
        },
        {
            title:'M',
            data:[{
                name:'Manja', mobile:555598},
                {name:'Manya', mobile:554498},
        
        ]
        },
        {
            title:'R',
            data:[{name:'Ranga', mobile:555598}]
        },
        {
            title:'S',
            data:[{name:'Sagar', mobile:555598},
               {name:'Sunil', mobile:555598},
               {name:'Sunil M', mobile:888987},
               {name:'Swamy M', mobile:888987},
            ]
        },
         
    ]

    const Section = ({section:{title}}) =>(
        <View style={{
            backgroundColor: '#1C7BA1'
        }}>
            <Text style={{
                fontSize: 25,
                fontWeight: 'bold'
            }}>{title}</Text>
        </View>
    )

    const renderItem = ({item}) =>{
        if(item.name.startsWith(txt)){
       return (
        <View style={{
          backgroundColor: '#ADBCC2'
        }}> 
          <Text style={{
              fontSize: 20,
              fontWeight: 500,
          }}>{item.name}</Text>
          <Text style={{
              fontSize: 20,
              fontWeight: 500,
              borderBottomWidth: 1
          }}>{item.mobile}</Text>
        </View>
      )
        }
        }

  return (
    <View>
    <View style={{
        display: 'flex',
        flexDirection: 'row',
        marginLeft: 20,
        marginTop:20
    }}>
      <TextInput style={{
        borderColor: 'black',
        borderWidth: 1,
        width: '90%',
        paddingVertical: 10,
        borderRadius: 10,
        fontSize:25,
        paddingLeft:15
      }}
       value={txt}
       onChangeText={(val) => setTxt(val)}
       placeholder='search'
      />
    </View>
    <View>
        <Text>

        </Text>
    </View>
    <SectionList
      sections={DATA}
      keyExtractor={(item, index) =>  index.toString()}
      renderSectionHeader={Section}
      renderItem={renderItem}
    />
    </View>
  )
}

export default SectionListTask1