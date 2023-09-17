import { ScrollView, StatusBar, Text, View } from 'react-native'
import { ActivityIndicator } from 'react-native-paper';
import React, { useState } from 'react'
import AuthLayout from './Auth'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import LoginForm from '../Screens/Auth/LoginForm';

const AllLayouts = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [user, setuser] = useState(false)
    return (
        <>
            {isLoading ?
                <ActivityIndicator animating size='large' color='red' style={{ marginVertical: '50%' }} /> : (

                    <NavigationContainer>
                        
                        {/* <StatusBar barStyle={'default'} hidden={false} /> */}
                        {user ? (
                            user?.userType === 'customer' ? <CustomerLayout /> : <EmployeeLayout />
                        ) : 
                        <AuthLayout />
                        }

                    </NavigationContainer>)
            }
        </>
    )
}

export default AllLayouts