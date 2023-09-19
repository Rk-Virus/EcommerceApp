import React, { useState, useEffect, useContext } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Button,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from 'react-native';
import { TextInput, Surface, Text } from 'react-native-paper';
// import PushNotification from 'react-native-push-notification';
import { loginUser } from '../../Apis/commonApis';

//taking context
import userContext from '../../utils/context';


const LoginForm = props => {

  const [loading, setLoading] = useState(false)

  //taking global user state
  const {setUser} = useContext(userContext)

  // login details
  const [loginInfo, setLoginInfo] = useState({
    phoneNo: '',
    password: '',
  });

  const handleChange = (fieldName, value) => {
    setLoginInfo({ ...loginInfo, [fieldName]: value });
  };


 // making user login
  const handleSubmit = async () => {
    try {
      if (!loginInfo.phoneNo || !loginInfo.password) {
        throw new Error('One or more fields required')
      }
      const res = await loginUser(loginInfo)
      if (res?.msg === 'Success!') {
        setUser(res?.response?.user);
      // handleLoginNotification();
      } else {
        throw new Error(res?.msg || 'Something went wrong')
      }
    } catch (error) {
      Alert.alert("Error", error.message)
    }
  };

  // notification functions
  //   useEffect(() => {
  //     createChannels();
  //   }, []);
  //   const createChannels = () => {
  //     PushNotification.createChannel({
  //       channelId: 'login-01', // (required)
  //       channelName: 'Login Notification', // (required)
  //     });
  //     PushNotification.createChannel({
  //       channelId: 'login-02', // (required)
  //       channelName: 'App Updates', // (required)
  //     });
  //   };

  //   const handleLoginNotification = item => {
  //     PushNotification.localNotification({
  //       channelId: 'login-01',
  //       title: 'Login Successful',
  //       message: 'Welcome back to yoourhelper App!',
  //     });
  //   };


  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <ScrollView>
        {/* <Header/> */}
        <Surface style={styles.surface} elevation={4}>
          {/* <Text style={styles.formTitle}>Log In</Text> */}

          {/* textInputs */}
          <View style={styles.inputField}>
            <Text style={styles.lable}>User Number</Text>
            <TextInput
              mode='outlined'
              placeholder="Your number here..."
              keyboardType='number-pad'
              value={loginInfo?.phoneNo}
              onChangeText={val => {
                handleChange('phoneNo', val);
              }}
            />
          </View>

          <View style={styles.inputField}>
            <Text style={styles.lable}> Password</Text>
            <TextInput
              mode='outlined'
              secureTextEntry={true}
              placeholder="Your password here..."
              value={loginInfo?.password}
              onChangeText={val => {
                handleChange('password', val);
              }}
            />
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('ForgotPassword');
              }}
              activeOpacity={0.8}>
              <Text style={{ marginBottom: -5, color: '#f44336', textAlign: 'center', marginTop: 10 }}>Forgot Password ?</Text>
            </TouchableOpacity>
          </View>

          {/* submit button */}
          <View style={[styles.inputField, { alignSelf: 'center' }]}>
            <Button title=" I'm In! "
              onPress={handleSubmit}
              color="#f44336" />
          </View>


          <View style={{ marginTop: 20 }}>
            <Text>
              Don't have account?{" "}
              <TouchableOpacity
                onPress={() => {
                  props.navigation.navigate('Signup');
                }}
                activeOpacity={0.8}>
                <Text style={{ marginBottom: -5, color: '#f44336' }}>Register</Text>
              </TouchableOpacity>
            </Text>
          </View>
        </Surface>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  surface: {
    flex: 1,
    margin: 40,
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 0,
  },
  formTitle: {
    width: '100%',
    fontSize: 30,
    textAlign: 'center',
    padding: 25,
    backgroundColor: '#ffffff',
  },
  inputField: {
    width: '100%',
    justifyContent: 'space-around',
    flexDirection: 'column',
    // alignItems: 'center',
    marginTop: 40,
    alignSelf: 'flex-start',
  },
  lable: {
    fontSize: 20,
    color: '#2d2e2e',
  },
  img: {
    marginHorizontal: 270,
  },
});

export default LoginForm;
