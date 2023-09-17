import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  Alert,
  TouchableOpacity,
} from 'react-native';

const AppBar = props => {
  return (
    <>
      <View style={styles.nav}>
        <TouchableOpacity onPress={()=>{Alert.alert("Yoour provides Service at your door")}} activeOpacity={0.8}>
          <Text style={styles.title}>Ecommerce App</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  nav: {
    backgroundColor: '#f44336',
    paddingVertical: 10,
    paddingHorizontal: 20,
    // marginBottom: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 25,
    fontWeight: 'bold',
  },
});

export default AppBar;
