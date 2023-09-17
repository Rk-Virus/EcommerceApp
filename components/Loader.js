import { StyleSheet, View } from 'react-native'
import { ActivityIndicator } from 'react-native-paper'
import React from 'react'

const Loader = ({ size, backdrop=false }) => {
  return (
    <View style={styles.main}>
      <ActivityIndicator size={size} style={{
        ...styles.loader, 
        backgroundColor: `${backdrop ? 'rgba(0,0,0,0.320)' : 'transparent'}`
        }} />
    </View>
  )
}

export default Loader

const styles = StyleSheet.create({
  main: {
    position: 'absolute',
    zIndex : 100,
    width : '100%',
    height : '100%',
    flex : 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loader: {
    flex : 1,
    width : '100%',
    height : '100%',
    justifyContent: 'center',
    alignItems: 'center',
  }
})

