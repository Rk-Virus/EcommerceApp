import React, { useEffect, useState } from 'react';
import { StyleSheet, View, ScrollView, Alert, PermissionsAndroid } from 'react-native';
import { Surface, Text, Title, TextInput, Button } from 'react-native-paper';
import Geolocation from '@react-native-community/geolocation';
import DatePicker from 'react-native-date-picker';
import { Dropdown } from 'react-native-element-dropdown';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser, SET_USER } from '../../Redux/Slices/userSlice';
import { updateProfile } from '../../Apis/commonApis';
import { handlePayment } from '../../utils/cashfreeUtils';
import { useNavigation } from '@react-navigation/native';
import Loader from '../../components/Loader';

const ConfirmOrder = ({ route }) => {
  // timeslots
  const timeSlots = [
    { label: '6 AM - 8 AM', value: '6-8', hour: 6 },
    { label: '7 AM - 9 AM', value: '7-9', hour: 7 },
    { label: '8 AM - 10 AM', value: '8-10', hour: 8 },
    { label: '9 AM - 11 AM', value: '9-11', hour: 9 },
    { label: '10 AM - 12 PM', value: '10-12', hour: 10 },
    { label: '11 AM - 1 PM', value: '11-13', hour: 11 },
    { label: '12 PM - 2 PM', value: '12-14', hour: 12 },
    { label: '1 PM - 3 PM', value: '13-15', hour: 13 },
    { label: '2 PM - 4 PM', value: '14-16', hour: 14 },
    { label: '3 PM - 5 PM', value: '15-17', hour: 15 },
    { label: '4 PM - 6 PM', value: '16-18', hour: 16 },
    { label: '5 PM - 7 PM', value: '17-19', hour: 17 },
    { label: '6 PM - 8 PM', value: '18-20', hour: 18 },
    { label: '7 PM - 9 PM', value: '19-21', hour: 19 },
  ]
  // order submission details
  const user = useSelector(selectUser)
  const navigation = useNavigation();
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [filteredSlots, setFilteredSlots] = useState([]);
  const { offerId } = route.params
  // User Details
  const [name, setName] = useState(user?.name)
  const [phoneNo, setPhoneNo] = useState(user?.phoneNo)
  const [address, setAddress] = useState(user?.address)
  const [timeSlot, setTimeSlot] = useState("")
  const [date, setDate] = useState(new Date())
  const [locationCoords, setLocataionCoords] = useState([])
  console.log({ locationCoords })

  useEffect(() => {
    let slots
    console.log({ check: new Date().toLocaleDateString() })
    if (date?.toLocaleDateString() === new Date().toLocaleDateString()) {
      //  only next 2 hrours slots will be available if user is booking for today
      // means user must book a slot 2 hours before the current time
      slots = timeSlots.filter(slot => slot.hour > new Date().getHours() + 2)
    } else {
      slots = timeSlots
    }
    setFilteredSlots(slots)
  }, [date])

  useEffect(() => {
    const getLocation = async () => {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: "Yoour helper App Location Permission",
            message:
              "We need the access to your location " +
              "so that we can reach to your correct location",
            buttonNeutral: "Ask Me Later",
            buttonNegative: "Cancel",
            buttonPositive: "OK"
          }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          Geolocation.getCurrentPosition(position => {
            console.log({ position })
            let latitude = Number(Number(position.coords.latitude).toFixed(7))
            let longitude = Number(Number(position.coords.longitude).toFixed(7))
            setLocataionCoords([longitude, latitude])
          });
        } else {
          Alert.alert("Please allow us to access your location");
        }
      } catch (err) {
        console.warn(err);
      }
    }
    getLocation()
  }, [])

  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && { color: '#f44336' }]}>
          Time Slot
        </Text>
      );
    }
    return null;
  };

  const handleSubmit = async () => {
    try {
      if (!timeSlot || !date) {
        throw new Error('Date and Time slot are required')
      }
      if (locationCoords?.length === 0) {
        throw new Error('Please Allow us to know your location')
      }

      setLoading(true)
      let update = {locationCoords}
      let orderNow = false
      if (
        name !== user?.name ||
        phoneNo !== user?.phoneNo ||
        address !== user?.address
      ) {
        update = { ...update, name, phoneNo, address }
      }
      // update profile
      const res = await updateProfile(update)
      if (res?.msg === "success") {
        dispatch(SET_USER({ user: res?.response }));
        orderNow = true
      } else {
        throw new Error(res?.msg)
      }
      if (orderNow) {
        await handlePayment({
          offerId,
          date,
          timeSlot
        }, navigation)
      }
      setLoading(false)

    } catch (error) {
      console.log("orderErr", error)
      setLoading(false)
      Alert.alert('Error', error.message || 'something went wrong');
    }
  }

  return (
    <>
      {loading && <Loader size={'large'} backdrop />}
      <ScrollView>
        <Surface style={styles.surface} elevation={2}>
          <Title style={styles.title}>Check and Confirm Details</Title>

          <TextInput
            placeholder="Enter name"
            mode="outlined"
            label="Name"
            value={name}
            onChangeText={text => setName(text)}
            style={{ marginBottom: 15 }}
          />

          <TextInput
            placeholder="Enter number"
            mode="outlined"
            disabled
            label="Phone No."
            keyboardType="phone-pad"
            value={phoneNo}
            onChangeText={text => setPhoneNo(text)}
            style={{ marginBottom: 15 }}
          />

          <TextInput
            disabled
            right={<TextInput.Icon
              name='newspaper'
              onPress={() => setOpen(true)}
            />}
            onFocus={() => setOpen(true)}
            mode="outlined"
            label="Date"
            value={`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`}
            style={{ marginBottom: 15 }}
          />
          <DatePicker
            modal
            minimumDate={new Date()}
            mode="date"
            open={open}
            date={date}
            onConfirm={dateStr => {
              setOpen(false);
              setDate(dateStr);
            }}
            onCancel={() => {
              setOpen(false);
            }}
          />

          <View style={styles.container}>
            {renderLabel()}
            <Dropdown
              style={[styles.dropdown, isFocus && { borderColor: '#f44336' }]}
              iconStyle={styles.iconStyle}
              data={filteredSlots}
              maxHeight={200}
              labelField="label"
              valueField="value"
              placeholder={!isFocus ? 'Select Time Slot' : '...'}
              value={value}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              onChange={item => {
                setTimeSlot(item?.value)
                setValue(item?.value);
                setIsFocus(false);
              }}

              renderRightIcon={() => (
                <Ionicons
                  style={styles.icon}
                  color={isFocus ? '#f44336' : 'black'}
                  name="time"
                  size={25}
                />
              )}
            />
          </View>

          <TextInput
            placeholder="Enter address"
            multiline
            noOfLines={4}
            mode="outlined"
            label="Address"
            value={address}
            onChangeText={text => setAddress(text)}
            style={{ marginBottom: 15 }}
          />
          <Button
            mode="contained"
            style={styles.button}
            onPress={handleSubmit}>
            Submit
          </Button>
        </Surface>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  surface: {
    flex: 1,
    margin: 18,
    padding: 30,
  },
  title: {
    marginBottom: 40,
  },
  button: {
    marginTop: 10,
    marginBottom: 10,
    width: '40%',
    alignSelf: 'flex-end',
  },
  container: {
    backgroundColor: 'white',
    paddingVertical: 16,
  },
  dropdown: {
    height: 50,
    borderWidth: 1,
    borderRadius: 2,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 1,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 12,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
});

export default ConfirmOrder;
