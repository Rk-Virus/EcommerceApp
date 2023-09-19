import { Image, StyleSheet, View, ScrollView, RefreshControl } from 'react-native'
import { Divider, Text, Avatar } from 'react-native-paper'
import React, { useEffect, useState } from 'react'
// import { getSingleOrder } from '../../Apis/customerApis'
import Loader from '../../components/Loader'

const OrderDetails = ({ route }) => {
  const { orderId } = route.params
  const [orderDetails, setOrderDetails] = useState()
  const [loading, setLoading] = useState(true)
  const [refreshing, setRefreshing] = useState(false)

  const [offer, setOffer] = useState("")

  // useEffect(() => {
  //   if(loading){
  //     const fetchOrderDetails = async () => {
  //       const res = await getSingleOrder(orderId)
  //       if (res?.msg === 'success') {
  //         setOrderDetails(res?.response?.order)
  //         setRefreshing(false)
  //         setLoading(false)
  //       }
  //     }
  //     fetchOrderDetails()
  //   }
  // }, [loading])

  const onRefresh = () => {
    setLoading(true)
    setRefreshing(true)
  }

  return (
    <>
  {loading && <Loader size='large' backdrop />}
    <ScrollView
      refreshControl={
        <RefreshControl
        refreshing={refreshing}
        onRefresh={onRefresh}
      />
      }
    >
      {loading ? <Loader size='large' /> : (
        <View style={styles.card}>
          <Image source={{ uri: orderDetails?.offer?.image }} style={styles.offerImg} />
          <Text variant="headlineSmall" style={styles.title} >{orderDetails?.offer?.title}</Text>

          <View style={styles.upperSection}>
            <View>
              <Text style={styles.attributeText} > Starts At :  </Text>
              <Text style={styles.attributeText} > Ends At :  </Text>
              <Text style={styles.attributeText} > Duration :  </Text>
            </View>

            <View>
              <Text style={styles.attributeText} > {new Date(orderDetails?.startsAt).toDateString()}</Text>
              <Text style={styles.attributeText} > {new Date(orderDetails?.endsAt).toDateString()}</Text>
              <Text style={styles.attributeText} > {orderDetails?.offer?.validity} days</Text>
            </View>
          </View>

          <Divider style={styles.divider} />
          <Text style={styles.title}  >Helper Allocated</Text>
          {orderDetails?.employeeAllocated ? (
            <>
              <View style={styles.helperSection}>
                <Avatar.Image
                  size={150}
                  source={{ uri: orderDetails?.employeeAllocated?.profilePic }}
                />
              </View>
              <View style={styles.upperSection}>
                <View>
                <Text style={styles.attributeText} > ID : </Text>
                <Text style={styles.attributeText} > Name : </Text>
                {orderDetails?.orderStatus === 'ACTIVE' && (
                <Text style={styles.attributeText} > Phone No : </Text>
                )}
                </View>

                <View>
                <Text style={styles.attributeText} > {orderDetails?.employeeAllocated?.userId} </Text>
                <Text style={styles.attributeText} > {orderDetails?.employeeAllocated?.name}</Text>
                {orderDetails?.orderStatus === 'ACTIVE' && (
                <Text style={styles.attributeText} > {orderDetails?.employeeAllocated?.phoneNo}</Text>
                )}
                </View>
              </View>
            </>
          ) : (
            <View>
              <Text style={{
                ...styles.attributeText, 
                textAlign : 'center', 
                marginTop : 10, 
                marginBottom : 20,
                fontWeight : '200'
              }}>We will deliver the product to you soon !! We appreciate your patience
              </Text>
            </View>
          )}
        </View>
      )}
    </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  card: {
    paddingHorizontal: 10,
    marginTop: 20,
    margin: 10
  },
  upperSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20
  },
  title: {
    marginTop: 10,
    textAlign: 'center',
    color: '#f44336',
    fontSize: 20,
    fontWeight: '500'
  },
  offerImg: {
    width: '100%',
    height: 400,
    borderRadius: 10
  },
  attributeText: {
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight : 30

  },
  divider: {
    marginTop: 15,
    marginBottom: 15,
    height: 1
  },
  helperSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginBottom: 30,
    marginTop: 20,
  },
})

export default OrderDetails
