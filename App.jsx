import { PaperProvider, Text } from 'react-native-paper';
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import AllLayouts from './Layouts/DecideStack';
import {ContextProvider} from './utils/context'

const App = () => {
  return (
    <ContextProvider>
      <PaperProvider>
        <SafeAreaView style={{ flex: 1 }}>
          <AllLayouts/>
        </SafeAreaView>
      </PaperProvider>
    </ContextProvider>
  )
}

export default App
