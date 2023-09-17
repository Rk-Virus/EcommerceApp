import {StyleSheet} from 'react-native';
import { DefaultTheme } from 'react-native-paper';

export default globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 8,
    // backgroundColor: '#f5f5f5',
    backgroundColor: '#fff',
  },

  header: {
    fontSize: 32,
    backgroundColor: '#fff',
  },

  text: {
    marginVertical: 10,
    lineHeight: 15,
  },

});

export const theme = {
  ...DefaultTheme,
  roundness: 2,
  version: 3,
  colors: {
    ...DefaultTheme.colors,
    primary: '#f44336', //  #ef4f5f {red} // or #f44336 (orangish red)
    secondary: '#fbe9e7',
  },
}
