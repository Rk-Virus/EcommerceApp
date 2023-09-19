import React, { useState, useEffect, useContext } from 'react';
import {
  StyleSheet,
  Alert,
} from 'react-native';
import { TextInput, Card, Button } from 'react-native-paper';
// import PushNotification from 'react-native-push-notification';
// import auth from '@react-native-firebase/auth';
import { registerUser } from '../../../Apis/commonApis';
import userContext from '../../../utils/context'

const SignupForm = props => {
  const [loading, setLoading] = useState(false)
  // User details
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    phoneNo: '',
    password: '',
    address: ''
  });

  // fetching user from context
  const {user, setUser} = useContext(userContext)

  //   useEffect(() => {
  //     auth()
  //         .signOut()
  //         .then(() => console.log('User signed out!'));
  // }, [])

  const handleChange = (fieldName, value) => {
    setUserInfo({ ...userInfo, [fieldName]: value });
  };

  // registering user 
  const handleSubmit = async () => {
    try {
      if (!userInfo.name || !userInfo.email || !userInfo.phoneNo || !userInfo.password || !userInfo.address) {
        throw new Error('One or more fields required')
      }
      console.log(user)

      setLoading(true)
      const res = await registerUser(userInfo);

      if (res?.msg === 'Success!') {
        setLoading(false)
        setUser(res?.response?.user);
        // handleRegisterNotification();
      } else {
        throw new Error(res?.msg || 'something went wrong')
      }
    } catch (error) {
      setLoading(false)
      Alert.alert("Error", error.message)
    }
  };

  // local notifications
  // useEffect(() => {
  //   createChannels();
  // }, []);
  // const createChannels = () => {
  //   PushNotification.createChannel({
  //     channelId: 'registered-01', // (required)
  //     channelName: 'Signup Notification', // (required)
  //   });
  // };
  // const handleRegisterNotification = item => {
  //   PushNotification.localNotification({
  //     channelId: 'registered-01',
  //     title: 'Sign up successful',
  //     message: 'Welcome to yoourhelper App!',
  //   });
  // };


  return (
    <Card style={styles.card}>
      <Card.Content style={{ paddingHorizontal: 10 }} >
        <TextInput
          mode='outlined'
          style={styles.inputField}
          placeholder="Your Name Here..."
          name="name"
          label='Name'
          value={userInfo?.name}
          onChangeText={val => {
            handleChange('name', val);
          }}
        />

        <TextInput
          mode='outlined'
          style={styles.inputField}
          placeholder="Your email Here..."
          name="email"
          label='Email'
          value={userInfo?.email}
          onChangeText={val => {
            handleChange('email', val);
          }}
        />

        <TextInput
          mode='outlined'
          style={styles.inputField}
          placeholder="Your number Here..."
          name="phoneNo"
          label='Number'
          value={userInfo?.phoneNo}
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
          value={userInfo?.password}
          onChangeText={val => {
            handleChange('password', val);
          }}
        />
        <TextInput
          mode='outlined'
          style={styles.inputField}
          multiline
          placeholder="Your address Here..."
          name="address"
          label='Address'
          value={userInfo?.address}
          onChangeText={val => {
            handleChange('address', val);
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
  );
};

const styles = StyleSheet.create({
  inputField: {
    marginBottom: 20,
  },
  card: {
    padding: 10,
    elevation: 5,
    width: '100%',
  },
  button: {
    width: '100%',
    marginBottom: 10
  }
});

export default SignupForm;
