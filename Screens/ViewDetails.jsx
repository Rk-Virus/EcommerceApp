import React,{useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {
  Surface,
  Headline,
  Subheading,
  Paragraph,
  Divider,
  Button,
  Title,
  DataTable,
} from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const ViewDetails = ({route}) => {
  // const offer = route.params.props;
  const [offer, setOffer] = useState("")
  const [user, setUser] = useState({userType:'customer'})
  const navigation = useNavigation();


  return (
    <ScrollView>
    <Surface style={styles.surface}>
      <View >
        <Headline> {offer.title}</Headline>
        <Subheading style={{marginLeft: 10}}>Offer Details :</Subheading>
        <Divider />
      </View>

      <DataTable style={{marginBottom: 20, width: '100%'}}>
        <DataTable.Row>
          <DataTable.Cell>Discount : </DataTable.Cell>
          <DataTable.Cell>{offer.discount}% off</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>Price : </DataTable.Cell>
          <DataTable.Cell>
            <Text style={styles.price}>
              {offer.price} Rs
            </Text>{ "  "}
            {offer.discountedPrice} Rs
           </DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>Duration : </DataTable.Cell>
          <DataTable.Cell>
            {offer.validity} {offer.validity == 1 ? 'day' : 'days'}{' '}
          </DataTable.Cell>
        </DataTable.Row>
      </DataTable>

      <View>
        <Title>Description</Title>
        <Paragraph style={{textAlign: 'justify'}}>
          {offer.description}
        </Paragraph>
      {user?.userType === 'customer' && (
        <Button
          icon="card"
          mode="contained"
          style={{width: 200, marginTop: 10}}
          onPress={() => navigation.navigate('ConfirmOrder', { offerId : offer?._id })}>
          Place Order
        </Button>
      )}
      </View>
    </Surface>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  surface: {
    margin: '2%',
    padding: 28,
    width: '96%',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    elevation: 4,
  },
  price : {
    textDecorationLine: 'line-through',
  },
});

export default ViewDetails;
