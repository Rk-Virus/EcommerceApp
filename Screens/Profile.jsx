import React, {useState, useContext} from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Linking,
  Alert
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
  Divider,
  Button
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
// import { redeemWallet } from '../Apis/customerApis';
import defaultUserImg from '../assets/images/defaultUserImg.jpg'
import userContext from '../utils/context';

const Profile = () => {
  const navigation = useNavigation();

  const [user, setUser] = useState("")
  // const {user} = useContext(useContext)
  console.log(user)

  const handleRedeem = async () => {
    // try {
    //   const res = await redeemWallet()
    //   console.log('redeem ', res)
    //   if (res?.msg === 'success') {
    //     Linking.openURL(res?.response)
    //   } else {
    //     throw new Error(res?.msg || 'Something went wrong')
    //   }
    // } catch (error) {
    //   console.log(error)
    //   Alert.alert('Error', error.message)
    // }

  }

  return (
    <ScrollView style={styles.container}>
      <View
        style={{
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>

        <View style={styles.topInfo}>
          <Avatar.Image
            size={150}
            source={user?.profilePic ? { uri: user?.profilePic } : defaultUserImg}
          />
          <View >
            <Title style={styles.title}>{user?.name}</Title>
            <Caption style={styles.caption}>{user?.email}</Caption>
          </View>
        </View>

        <View style={styles.userInfoSection}>
          <View style={styles.row}>
            <Icon name="pin" size={23} color="#f44336" />
            <Text style={{ alignSelf: 'center', marginLeft: 8 }}>
              {' '}
              {user?.address}
            </Text>
          </View>

          <View style={styles.row}>
            <Icon name="call" size={23} color="#f44336" />
            <Text style={{ alignSelf: 'center', marginLeft: 8 }}>
              {' '}
              {user?.phoneNo}
            </Text>
          </View>
        </View>
      </View>

      {user?.userType === 'customer' && (
        <>
          <Divider />
          <View style={styles.infoBoxWrapper}>
            <View style={styles.infoBox}>
              <Title><Icon name="wallet" size={23} color="#f44336" /> Wallet</Title>
              <Caption style={styles.caption}> {user?.refferalCount} Rs</Caption>
            </View>
            <Button
              mode='contained'
              onPress={handleRedeem}
            >Redeem Money
            </Button>
          </View>
        </>
      )}

      <View style={styles.menuWrapper}>
        <TouchableRipple
          onPress={() => {
            navigation.navigate('EditProfile');
          }}
          rippleColor="rgba(0, 0, 0, .32)">
          <View style={styles.menuItem}>
            <Icon name="create-outline" size={30} color="#f44336" />
            <Text style={styles.menuItemText}> Edit Profile </Text>
          </View>
        </TouchableRipple>
        <TouchableRipple
          onPress={() => {
            navigation.navigate('Settings');
          }}
          rippleColor="rgba(0, 0, 0, .32)">
          <View style={styles.menuItem}>
            <Icon name="settings-outline" size={30} color="#f44336" />
            <Text style={styles.menuItemText}> Settings </Text>
          </View>
        </TouchableRipple>
      </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topInfo: {
    marginTop: 20,
    paddingHorizontal: 30,
    width: '100%',
    alignItems: 'center',
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginVertical: 20,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 18,
    lineHeight: 20,
    textAlign: 'center',
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 100,
    paddingHorizontal: 30,
  },
  infoBox: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuWrapper: {
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 26,
    alignSelf: 'center',
  },
});

export default Profile;
