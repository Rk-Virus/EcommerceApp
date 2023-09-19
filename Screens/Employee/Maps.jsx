import React,{useState}  from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  Linking,
  TouchableOpacity,
} from 'react-native';
import MapView from 'react-native-maps';
import {Title, DataTable, Text, Button} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import {formatDate, formatTime} from '../../utils/dateTimeUtils';
// components,screen, other custom imports

const Maps = ({route}) => {

  // const {scheduleDetails} = route.params;
  const [scheduleDetails, setScheduleDetails] = useState("")
  // const [longitude, latitude] = scheduleDetails?.customer?.location?.coordinates;


  return (
    <ScrollView>
      <Title style={{margin: '3%', marginTop: 20}}>Order Location</Title>
      <View style={styles.addressContainer}>
        <Icon name="pin" size={30} color="#f44336" />
        <Text> {scheduleDetails?.customer?.address}</Text>
      </View>

      <View style={{flex: 1, width: '100%', height: 400}}>
        {/* <MapView
          style={styles.map}
          initialRegion={{
            latitude: latitude,
            longitude: longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        /> */}
      </View>
      <Button
        style={{
          marginHorizontal: 20,
          marginVertical: 20,
          borderRadius : 10
        }}
        icon="pin"
        mode="contained"
        onPress={() =>
          Linking.openURL(
            `https://maps.google.com/maps?z=16&t=m&q=loc:${latitude}+${longitude}`,
          )
        }>
        Open in Google Map
      </Button>

      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Customer Details</DataTable.Title>
          <DataTable.Title numeric> </DataTable.Title>
        </DataTable.Header>

        <DataTable.Row>
          <DataTable.Cell>Customer </DataTable.Cell>
          <DataTable.Cell>
            <View style={{margin: 20}}>
              <Image
                source={{uri: scheduleDetails?.customer?.profilePic}}
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 10,
                  marginBottom: 10,
                }}
              />
              <Text style={{textAlign: 'center'}}>
                {scheduleDetails?.customer?.name}
              </Text>
            </View>
          </DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>Contact No.</DataTable.Cell>
          <DataTable.Cell>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => {
                Linking.openURL(`tel:+91${scheduleDetails?.customer?.phoneNo}`);
              }}>
              <Text>+91-{scheduleDetails?.customer?.phoneNo}</Text>
            </TouchableOpacity>
          </DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>Offer Booked</DataTable.Cell>
          <DataTable.Cell style={{marginVertical: 10}}>
            <View>
              <Image
                source={{uri: scheduleDetails?.offer?.image}}
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 10,
                  marginBottom: 10,
                }}
              />
              <Text>{scheduleDetails?.offer?.title}</Text>
            </View>
          </DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>Date</DataTable.Cell>
          <DataTable.Cell>
            {formatDate(scheduleDetails?.startsAt)}
          </DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>Time Slot</DataTable.Cell>
          <DataTable.Cell>
            {formatTime(scheduleDetails?.startsAt)} -{' '}
            {formatTime(scheduleDetails?.endsAt)}
          </DataTable.Cell>
        </DataTable.Row>
      </DataTable>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  map: {
    width: '94%',
    height: '100%',
    marginHorizontal: '3%',
    marginBottom: -400,
  },
  addressContainer: {
    marginVertical: 10,
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  imgContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 15,
  },
});

export default Maps;
