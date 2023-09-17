import { Alert } from "react-native";
import RNPgReactNativeSdk from "react-native-pg-react-native-sdk";
import { checkout } from "../Apis/customerApis";

export const handlePayment = async (details, navigation) => {

    try {
      const resp = await checkout(details?.offerId);
      if (resp?.msg == 'success') {
        const params = resp?.response;

        RNPgReactNativeSdk.startPaymentWEB(params, 'PROD', async (result) => {
          try {
            var obj = JSON.parse(result);
            console.log('obj', obj);
            if (obj.txStatus == 'SUCCESS') {
              const body = {
                offerId: details?.offerId,
                timeSlot: details?.timeSlot,
                cashfreeDetails: obj,
                date : details?.date
              }

              const res = await bookOrder(body);
              console.log('res', res);
              if (res?.msg == 'success') {
                Alert.alert('Success', 'Order Placed Successfully')
                // navigate to orders history screen
                navigation.navigate('Home')
              } else {
                throw new Error(res?.msg)
              }
            } else {
              throw new Error('Payment Failed')
            }
          } catch (error) {
            console.log('paymentErr : ', error);
            Alert.alert('Error', error.message || 'something went wrong');
          }
        })
      } else {
        throw new Error(resp?.msg);
      }
    } catch (error) {
      console.log('paymentErr : ', error);
      return error
    }
  };