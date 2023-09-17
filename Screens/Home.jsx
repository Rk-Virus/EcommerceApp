import React from 'react';
import {StyleSheet, ScrollView, Text, Image, Button} from 'react-native';
import globalStyles from '../utils/global';

//components,screen, other custom imports
import AppBar from '../components/AppBar';
import OffersSection from '../components/OffersSection';

const Home = props => {
  
  return (
    <>
      <AppBar homeNavs={props.navigation} />
      <ScrollView style={globalStyles.container}>
        {/* appbar */}

        {/* Carousel or OverView Display */}
        <Image
          source={require('../assets/images/heroImage.jpg')}
          style={styles.displayImg}
        />

        {/* OffersSection */}
        <Text style={styles.header}>Our Offers</Text>
        <OffersSection />
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
