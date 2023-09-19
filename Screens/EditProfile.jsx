import React, { useState } from 'react';
import { StyleSheet, View,  TouchableOpacity, ScrollView, Alert, Linking } from 'react-native';
import { Surface, Text, TextInput, Button, Avatar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
// import { deleteImagesFromS3, updateProfile } from '../Apis/commonApis';
// import ImagePicker from 'react-native-image-crop-picker';
import Loader from '../components/Loader';
// import { uploadFiles } from '../utils/uploadFiles';
import defaultUserImg from '../assets/images/defaultUserImg.jpg'

const EditProfile = () => {

  const [user, setUser] = useState("")

  const [name, setName] = useState(user?.name);
  const [image, setImage] = useState();
  const [previewImg, setPreviewImg] = useState(user?.profilePic);
  const [address, setAddress] = useState(user?.address);
  const [loading, setLoading] = useState(false);

  const handleUpdate = async () => {
    // try {
    //   setLoading(true);
    //   let update = { name, address };
    //   if (image) {
    //     const isValidUrl = await Linking.canOpenURL(previewImg);
    //     console.log({ isValidUrl, previewImg })
    //     if(!isValidUrl){
    //       const deletedImg =  await deleteImagesFromS3([user?.profilePic]);
    //       console.log({deletedImg});
    //     }
    //     const [profilePic] = await uploadFiles(image, 'userImages');
    //     update = { ...update, profilePic };
    //   }

    //   const res = await updateProfile(update)
    //   if (res?.msg === 'success') {
    //     dispatch(SET_USER({ user: res?.response }));
    //     setLoading(false);
    //     setPreviewImg(res?.response?.profilePic);
    //     Alert.alert('Success', 'Profile Updated Successfully')
    //   } else {
    //     throw new Error(res?.msg || 'Something went wrong')
    //   }
    // } catch (error) {
    //   console.log(error)
    //   setLoading(false);
    //   Alert.alert('Error', error.message)
    // }
  }

  //image upload function
  const chooseFromGallary = async () => {
    // try {
    //   const imgDetails = await ImagePicker.openPicker({
    //     width: 300,
    //     height: 300,
    //     cropping: true,
    //     compressImageQuality : 0.8
    //   })
    //   console.log({ imgDetails })
    //   const fName = imgDetails?.path.slice(-10);
    //   setPreviewImg(imgDetails.path);
    //   const response = await fetch(imgDetails.path);
    //   const blob = await response.blob();
    //   const file = new File([blob], fName, { type: 'image/jpeg' });
    //   setImage(file);

    // } catch (error) {
    //   console.log(error)
    // }
  }

return (
  <>
  {loading && <Loader size='large' backdrop />}
  <ScrollView style={styles.surface}>
    <View style={{ alignItems: 'center', flex: 1 }}>
      <TouchableOpacity
        activeOpacity={0.8}
        style={{ borderRadius: 100, marginBottom: 20 }}
        onPress={chooseFromGallary}>
        <Avatar.Image
          size={200}
          source={previewImg ? { uri: previewImg } : defaultUserImg}
          style={styles.img}
        />
        <Icon name="camera" size={30} color="red" style={styles.camIcon} />
        <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 20 }}>
          {user?.name}
        </Text>
      </TouchableOpacity>
    </View>
    <Surface style={{ padding: 10 }}>
      <TextInput
        placeholder='Enter new name'
        mode='outlined'
        label="Name"
        value={name}
        onChangeText={text => setName(text)}
        style={{ marginBottom: 15 }}
      />
      <TextInput
        disabled
        mode='outlined'
        label={user?.userType === 'customer' ? "Customer ID" : 'Employee ID'}
        value={user?.userId}
        style={{ marginBottom: 15 }}
      />
      {user?.userType === 'customer' && (
      <TextInput
        disabled
        mode='outlined'
        label="Referral ID"
        value={user?.refferalId}
        style={{ marginBottom: 15 }}
      />
      )}
      <TextInput
        disabled
        mode='outlined'
        label="Email"
        value={user?.email}
        style={{ marginBottom: 15 }}
      />

      <TextInput
        disabled
        placeholder='Enter new number'
        mode='outlined'
        label="Phone No."
        keyboardType='phone-pad'
        value={user?.phoneNo?.toString()}
        style={{ marginBottom: 15 }}
      />
      <TextInput
        placeholder='Enter new address'
        multiline
        noOfLines={4}
        mode='outlined'
        label="Address"
        value={address}
        onChangeText={text => setAddress(text)}
        style={{ marginBottom: 15 }}
      />
    </Surface>
    <Button
      mode='contained'
      style={styles.button}
      onPress={handleUpdate}
    >Update Profile
    </Button>
  </ScrollView>
  </>
);
};

const styles = StyleSheet.create({
  surface: {
    padding: 18,
    paddingBottom: 20,
    height: '100%',
    width: '100%',
    elevation: 4,
    flex: 1,
  },
  img: {
    borderRadius: 100,
    width: 200,
    height: 200
  },
  camIcon: {
    position: 'absolute',
    bottom: 0,
    padding: '8%',
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 50,
  },
  button: {
    marginTop: 10,
    marginBottom: 40,
  }
});

export default EditProfile;
