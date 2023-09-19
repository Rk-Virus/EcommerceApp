import React, {useState, useContext} from 'react';
import {StyleSheet, View, Alert, Linking} from 'react-native';
import {
  Surface,
  Text,
  Title,
  List,
  FAB,
  TouchableRipple,
  Dialog,
  Portal,
  Provider,
  Button,
  Switch,
} from 'react-native-paper';

import userContext from '../utils/context';


const Settings = () => {

  const {user, setUser} = useContext(userContext)

  const [expanded, setExpanded] = useState(true);
  const handlePress = () => setExpanded(!expanded);

  const [state, setState] = useState({ open: false });

  const onStateChange = ({ open }) => setState({ open });

  const { open } = state;

  // dialog box variables
  const [visible, setVisible] = React.useState(false);

  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  // Notification switch variable
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);


  return (
    <Surface style={styles.surface}>
      <Title style={styles.title}>User Settings</Title>

      <List.Accordion title="Account Actions" id="3" style={{width: 500}}>
        <TouchableRipple
          onPress={() => setUser(null)}
          rippleColor="rgba(0, 0, 0, .32)">
          <List.Item title="Log Out" />
        </TouchableRipple>
      </List.Accordion>

      <View style={{width:'100%', flexDirection:'row'}}>
        <List.Item title="App Settings" style={{width:'78%'}} onPress={()=> Linking.openSettings()} />
    </View>

      <Provider>
      <Portal>
        <FAB.Group
          open={open}
          icon={open ? 'minus' : 'help'}
          actions={[
            {
              icon: 'help',
              label: 'Support',
              onPress: () => Linking.openURL('tel:+918368857551'),
            },
            {
              icon: 'email',
              label: 'Contact Us',
              onPress: () => Linking.openURL('mailto:yoourhelper@gmail.com'),
            },
            {
              icon: 'file',
              label: 'Privacy Policy',
              onPress: () => Linking.openURL('https://yoourhelper.com/#/privacy-and-policy'),
              small: false,
            },
            {
              icon: 'folder',
              label: 'Terms & Conditions',
              onPress: () => Linking.openURL('https://yoourhelper.com/#/terms-and-conditions'),
              small: false,
            },
          ]}
          onStateChange={onStateChange}
          onPress={() => {
            if (open) {
              // do something if the speed dial is open
            }
          }}
        />
      </Portal>
    </Provider>
      
    </Surface>
  );
};

const styles = StyleSheet.create({
  surface: {
    padding: 10,
    height: '100%',
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    elevation: 2,
  },
  title: {
    marginBottom: 10,
  },
});

export default Settings;
