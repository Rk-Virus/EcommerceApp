import { StyleSheet, View, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import {
  Surface,
  Text,
  Title,
  Divider,
  Button,
  ActivityIndicator,

} from 'react-native-paper';
import { getActiveOrders, getPreviousOrders } from '../../Apis/customerApis';
import OrderCard from '../../components/OrderCard';
import { useNavigation } from '@react-navigation/native';
import { formatDate, formatTime } from '../../utils/dateTimeUtils';


const OrderHistory = () => {

  const [orders, setOrders] = useState([]);
  const [currentTab, setCurrentTab] = useState('active');
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation()

  useEffect(() => {
    const fetchActiveOrders = async () => {
      const resp = await getActiveOrders();
      if (resp?.msg === "success") {
        setOrders(resp?.response);
        setLoading(false);
      }
    };
    const fetchPreviousOrders = async () => {
      const resp = await getPreviousOrders();
      if (resp?.msg === "success") {
        setOrders(resp?.response);
        setLoading(false);
      }
    };
    if (currentTab === 'previous') {
      fetchPreviousOrders();
    } else {
      fetchActiveOrders();
    }
  }, [currentTab]);

  const handleToggle = (value) => {
    setLoading(true);
    setCurrentTab(value);
  }
  return (
    <Surface style={styles.surface}>

      <View style={styles.btnGroup}>
        <Button
          style={{ borderRadius: 50 }}
          onPress={() => handleToggle('active')}
          mode={currentTab === 'active' ? 'contained' : 'outlined'}
        >Active
        </Button>
        <Button
          style={{ borderRadius: 50 }}
          onPress={() => handleToggle('previous')}
          mode={currentTab === 'previous' ? 'contained' : 'outlined'}
        >Previous
        </Button>
      </View>
      <View>
        <Title>{currentTab === 'active' ? 'Active Orders' : 'Previous Orders'}</Title>
        <Divider />
        {loading ? <ActivityIndicator size='small' style={styles.loader} /> : (
          <>
            {orders.length > 0 ? (
              <FlatList
                data={orders}
                keyExtractor={(_, i) => i.toString()}
                renderItem={({ item }) => (
                  <OrderCard
                    btnFunction={() => navigation.navigate('OrderDetails', { orderId: item?._id })}
                    image={item?.offer?.image}
                  >
                    <Text variant="displayLarge" style={styles.title} >{item?.offer?.title}</Text>
                    <Text variant="headlineSmall" >starts At : {formatDate(item?.startsAt)}</Text>
                    <Text variant="headlineSmall" >Ends At : {formatDate(item?.endsAt)}</Text>
                    <Text variant="headlineSmall" >Time Slot : {formatTime(item?.startsAt)} - {formatTime(item?.endsAt)}</Text>
                  </OrderCard>
                )}
              />
            ) : (
              <Text style={styles.noOrderText} >No Orders Found</Text>
            )}
          </>
        )}

      </View>
    </Surface>
  );
};

const styles = StyleSheet.create({
  btnGroup: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginBottom: 10
  },
  surface: {
    padding: 18,
    height: '100%',
    width: '100%',
    elevation: 4,
    backgroundColor: '#f5f5f5'
  },
  tableHeader: {
    fontSize: 100,
    fontWeight: 'bold'
  },
  noOrderText: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 'auto',
    marginBottom: 'auto',
    fontSize: 30,
    color: '#f44336',
    textAlign: 'center',
    fontWeight: 'bold',
    height: '100%',
    textAlignVertical: 'center'
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50
  },
  title: {
    fontSize: 15,
    color: '#f44336',
    marginBottom: 15
  }
});

export default OrderHistory;
