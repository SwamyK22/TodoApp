import {
    View,
    Text,
    Modal,
    ActivityIndicator,
    TouchableOpacity,
    Image,
    Alert,
  } from 'react-native';
  import React, {useState} from 'react';
  
  const ModalComponent = () => {
    const [visible, setVisible] = useState(false);
    return (
      <TouchableOpacity
        style={{flex: 1, backgroundColor: 'gray'}}
        onPress={() => {
          setVisible(true);
        }}>
        <Modal visible={visible} transparent animationType='slide'>
          {/* parent view */}
          <TouchableOpacity
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => {
              setVisible(false);
            }}>
            {/* childView */}
            <View
              style={{
                width: '90%',
                height: '30%',
                backgroundColor: '#fff',
                borderRadius: 10,
              }}>
              <Image
                source={require('./delete.png')}
                style={{
                  width: 50,
                  height: 50,
                  tintColor: 'red',
                  alignSelf: 'center',
                  marginTop: 30,
                }}
              />
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: '600',
                  alignSelf: 'center',
                  textAlign: 'center',
                  width: '90%',
                  marginTop: 30,
                }}>
                Do you want to delete?
              </Text>
              <View
                style={{
                  width: '100%',
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                }}>
                <TouchableOpacity
                  style={{
                    width: '40%',
                    height: 50,
                    borderWidth: 0.5,
                    borderRadius: 15,
                    marginTop: 30,
                    backgroundColor: 'gray',
                    justifyContent: 'center',
                    alignItems: 'center',
                    alignSelf: 'center',
                  }}
                  onPress={() => {
                    setVisible(false);
                  }}>
                  <Text style={{color:'#fff'}}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    width: '40%',
                    height: 50,
                    borderWidth: 0.5,
                    borderRadius: 15,
                    marginTop: 30,
                    justifyContent: 'center',
                    alignItems: 'center',
                    alignSelf: 'center',
                  }}
                  onPress={() => {
                    Alert.alert('Deleted...');
                    setVisible(false);
                  }}>
                  <Text>Yes Continue</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        </Modal>
      </TouchableOpacity>
    );
  };
  
  export default ModalComponent;