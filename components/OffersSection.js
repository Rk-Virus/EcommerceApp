import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  FlatList,
} from 'react-native';
import OfferCard from './OfferCard';
import globalStyles from '../utils/global';
import {getAllOffers} from '../Apis/commonApis';
import { ActivityIndicator } from 'react-native-paper';

const OfferSection = () => {
  const [offerData, setOfferData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // fetching api for offer details
  useEffect(() => {
    const getOfferData = async () => {
      try {
        const res = await getAllOffers();
        if (res?.msg == 'success') {
          setOfferData(res?.response);
          setIsLoading(false);
        }
      } catch (error) {
        console.log('Error', error);
      }
    };
    getOfferData();
  }, []);

  return (
    <SafeAreaView style={{...globalStyles.container, paddingBottom : 30}}>
      {isLoading ? (
        <ActivityIndicator  size='small' />
      ) : (
        <FlatList
          data={offerData}
          keyExtractor={(_, i) => i.toString()}
          renderItem={({item}) => <OfferCard  props={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        />
      )}
    </SafeAreaView>
  );
};

export default OfferSection;
