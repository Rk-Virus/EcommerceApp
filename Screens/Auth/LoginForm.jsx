import React, { useState, useEffect, useContext } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { loginUser } from '../../Apis/commonApis';
import { TextInput, Card, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
//taking context
import userContext from '../../utils/context';
import AsyncStorage from '@react-native-async-storage/async-storage';


const LoginForm = props => {

  const navigation = useNavigation()

  //taking global user state
  const { setUser, setJwtoken } = useContext(userContext)

  const [loading, setLoading] = useState(false)

  // login details
  const [loginInfo, setLoginInfo] = useState({
    phoneNo: '',
    password: '',
  });

  // handling change
  const handleChange = (fieldName, value) => {
    setLoginInfo({ ...loginInfo, [fieldName]: value });
  };


  // making user login
  const handleSubmit = async () => {
    try {
      if (!loginInfo.phoneNo || !loginInfo.password) {
        throw new Error('One or more fields required')
      }
      setLoading(true)
      console.log(loginInfo)
      const data = await loginUser(loginInfo)
      // console.log(data)

      setLoading(false)
      if (data?.msg === 'Success!') {
        await AsyncStorage.setItem('user', JSON.stringify(data.response.user));
        await AsyncStorage.setItem('jwtoken', data.response.token)

        // setting global variables
        setUser(data.response.user)
        setJwtoken(data.response.token)
        console.log(data?.msg, 'Login Successfull!');
      } else {
        throw new Error(data?.msg || 'Something went wrong')
      }
    } catch (error) {
      Alert.alert("Error", error.message)
    }
  };


  return (
    <>
      <ScrollView automaticallyAdjustKeyboardInsets={true}>
        <Card style={styles.card}>
          <Card.Content style={{ paddingHorizontal: 10 }} >


            <TextInput
              mode='outlined'
              style={styles.inputField}
              placeholder="Your number Here..."
              name="phoneNo"
              label='Number'
              value={loginInfo?.phoneNo}
              onChangeText={val => {
                handleChange('phoneNo', val);
              }}
            />

            <TextInput
              mode='outlined'
              style={styles.inputField}
              secureTextEntry
              placeholder="Your password here..."
              name="password"
              label='Password'
              value={loginInfo?.password}
              onChangeText={val => {
                handleChange('password', val);
              }}
            />

          </Card.Content>

          <Card.Actions style={{ paddingHorizontal: 10 }}>
            <Button
              mode='contained'
              onPress={handleSubmit}
              style={styles.button}
              loading={loading}
            >
              Submit
            </Button>
          </Card.Actions>
        </Card>
      </ScrollView>

      <View style={{ marginVertical: 10 }}>
        <Text style={{ textAlign: 'center' }}>Don't have account ?</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Signup');
          }}
          activeOpacity={0.8}>
          <Text style={{ color: '#f44336', textAlign: 'center', padding: 10 }}>Register</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  inputField: {
    marginBottom: 20,
  },
  card: {
    padding: 10,
    elevation: 4,
    width: '100%',
    paddingTop: 150
  },
  button: {
    width: '100%',
    marginBottom: 10
  }
});

export default LoginForm;
