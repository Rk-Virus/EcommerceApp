import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const BottomNavigation = ({ routes }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.footer}>
      <View style={styles.footerNav}>
        {routes?.map(({ route, name, icon }, i) => (
          <TouchableOpacity
            activeOpacity={0.8}
            key={i}
            onPress={() => {
              navigation.navigate(route);
            }}
            style={styles.navTab}>
            <Icon name={icon} size={25} color="#f44336" />
            <Text style={styles.text}>{name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    zIndex: 2,
    backgroundColor: 'white',
    borderTopColor: '#f44336',
    borderTopWidth: 2,
    width: '100%',
    flexDirection: 'column',
  },
  footerNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopColor: '#f44336',
  },
  navTab: {
    width: '33%',
    paddingVertical: 15,
    backgroundColor: 'white',
    color: 'white',
    alignItems: 'center',
  },
  text: {
    color: '#f44336',
  }
});

export default BottomNavigation;
