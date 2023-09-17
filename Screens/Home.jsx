import React from 'react';
import { StyleSheet, ScrollView, Text, Image, Button } from 'react-native';
import globalStyles from '../utils/global';

//components,screen, other custom imports
import AppBar from '../components/AppBar';
import OfferCard from '../components/OfferCard';
// import OffersSection from '../components/OffersSection';

const Home = props => {

  return (
    <>
      {/* appbar */}
      <AppBar homeNavs={props.navigation} />
      <ScrollView style={globalStyles.container}>

        {/* Carousel or OverView Display */}
        <Image
          source={require('../assets/images/heroImage.jpg')}
          style={styles.displayImg}
        />

        {/* OffersSection */}
        <Text style={styles.header}>Our Offers</Text>
        {/* <OffersSection /> */}
        <OfferCard/>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 30,
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 10,
  },
  displayImg: {
    width: '100%',
    height: 200,
  },
});

export default Home;
