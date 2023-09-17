import { StyleSheet, TouchableOpacity, View, ScrollView } from 'react-native'
import { Text } from 'react-native-paper'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
// import auth from '@react-native-firebase/auth';
import { useEffect } from 'react';
import SignupForm from './SignupForm';

const Signup = () => {
    const [confirm, setConfirm] = useState(null)
    const [stepCount, setStepCount] = useState(1)
    const navigation = useNavigation()
    
    // function onAuthStateChanged(user) {
    //     console.log('onAuthStateChanged', user);
    //     if (user) {
    //         setStepCount(prev =>{
    //             if(prev == 2){
    //                 return 3
    //             }else return prev
    //         })
    //     }
    //   }
    
    //   useEffect(() => {
    //     const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    //     return subscriber; // unsubscribe on unmount
    //   }, []);


    return (
        <>
        <ScrollView  contentContainerStyle={styles.main}>
        <View >

            <SignupForm/>

            <View style={{marginVertical : 10}}>
                <Text style={{textAlign : 'center'}}>Already have account ?</Text>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('Login');
                    }}
                    activeOpacity={0.8}>
                    <Text style={{ marginBottom: -5, color: '#f44336', textAlign : 'center' }}>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
        </ScrollView>
        </>
    )
}

export default Signup

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        elevation: 1,
        width: '100%',
        height: '100%',
        paddingBottom : 50
    }
})