import { PaperProvider, Text } from 'react-native-paper';
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import AllLayouts from './Layouts/Index';

const App = () => {
  return (
      <PaperProvider>
        <SafeAreaView style={{ flex: 1 }}>
          <AllLayouts/>
        </SafeAreaView>
      </PaperProvider>
  )
}

export default App
