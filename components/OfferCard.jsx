import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Card, Button } from 'react-native-paper';
// import { handlePayment } from '../utils/cashfreeUtils';

const OfferCard = ({ props }) => {
  const navigation = useNavigation();

  const [user, setuser] = useState("customer")

  return (
    <Card style={styles.card} elevation={2} >
      {/* <Card.Cover source={{ uri: props?.image }} style={styles.cardImage} /> */}
      <Card.Title  title={props?.title?.length > 30 ? props?.title?.slice(0, 30)+'...' : props?.title} />
      <Card.Content >
        <View>
          <Text style={[{ fontSize: 20, marginLeft: -4 }]}> Save Upto {props?.discount}% </Text>
        </View>
        <View>
          <Text style={[{ fontSize: 18, marginLeft: -4 }]}> Duration : {props?.validity} {props?.validity == 1 ? "day" : "days"} </Text>
        </View>
      </Card.Content>
      <Card.Actions style={{ paddingBottom: 15 }}>
        <View style={styles.actions}>
          <Button
            mode="outlined"
            onPress={() => {
              navigation.navigate('Details', { props });
            }}
          >ViewDetails</Button>
          {user?.userType === 'customer' && (
          <Button
            mode="contained"
            style={{ marginLeft: 10 }}
            onPress={()=>navigation.navigate('ConfirmOrder', { offerId : props?._id })}
          >
            Order
          </Button>
          )}
        </View>
      </Card.Actions>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 20,
    marginBottom: 10,
    width : 250,
    overflow : 'hidden',
  },
  cardTitle: {
    fontSize: 25,
    fontWeight: '200',
    textTransform: 'capitalize'
  },
  cardImage: {
    height:80
    // aspectRatio : 1
  },
  actions: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  }
});

export default OfferCard;
