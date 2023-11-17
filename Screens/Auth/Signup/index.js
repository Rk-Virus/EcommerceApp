import { StyleSheet, TouchableOpacity, View, ScrollView } from 'react-native'
import { Text } from 'react-native-paper'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import SignupForm from './SignupForm';

const Signup = () => {
    const navigation = useNavigation()

    return (
        <>
            <ScrollView style={{paddingTop:50}}>

                <SignupForm />

                <View style={{ marginVertical: 10 }}>
                    <Text style={{ textAlign: 'center' }}>Already have account ?</Text>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('Login');
                        }}
                        activeOpacity={0.8}>
                        <Text style={{  color: '#f44336', textAlign: 'center',  padding:10 }}>Login</Text>
                    </TouchableOpacity>
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
        paddingBottom: 50
    }
})