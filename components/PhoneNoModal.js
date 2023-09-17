import React, {useState} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  TextInput,
} from 'react-native';
import OtpModal from "./OtpModal";

const PhoneNoModal = () => {
  // User details
  const [phoneNo, setPhoneNo] = useState('');

  const [modalVisible, setModalVisible] = useState(true);
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert('Plz verify your phone no. first');
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.inputField}>
            <Text style={[styles.lable, styles.modalText]}>Enter Number</Text>
            <TextInput
              style={styles.input}
              keyboardType="phone-pad"
              placeholder="Your no. Here..."
              name="phoneNo"
              value={phoneNo}
              onChangeText={val => {
                setPhoneNo(val);
              }}
            />
          </View>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => {setModalVisible(!modalVisible);
            }}>
            <Text style={styles.textStyle}>Send OTP</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(55,55,55, 0.1)',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: '8%',
    paddingVertical: '4%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 5,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    textAlign: 'center',
  },
  inputField: {
    width: '100%',
    justifyContent: 'space-around',
    flexDirection: 'column',
    // alignItems: 'center',
    alignSelf: 'flex-start',
  },
  lable: {
    fontSize: 20,
    color: '#2d2e2e',
    marginBottom: 5,
    alignSelf: 'flex-start',
  },
  input: {
    borderWidth: 0.5,
    width:200,
    borderColor: 'black',
    padding: 4,
    borderRadius: 2,
    backgroundColor: 'white',
    marginBottom: 20,
  },
});

export default PhoneNoModal;
