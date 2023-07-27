import { NavigationContainer } from '@react-navigation/native';
import { PaperProvider, ActivityIndicator, MD2Colors } from 'react-native-paper';
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import AllLayouts from './Layouts/Index';

const App = () => {
  return (
    <NavigationContainer>
      <PaperProvider>
        <SafeAreaView style={{ flex: 1 }}>
          <AllLayouts/>
        </SafeAreaView>
      </PaperProvider>
    </NavigationContainer>
  )
}

export default App
