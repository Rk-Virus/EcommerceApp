import { ActivityIndicator, Text } from 'react-native-paper';
import React, { useState, useContext, useEffect } from 'react'
import AuthLayout from './Auth'
import { NavigationContainer } from '@react-navigation/native';
import CustomerLayout from './Customer'
import EmployeeLayout from './Employee'
import AsyncStorage from '@react-native-async-storage/async-storage';

//taking global user state
import userContext from '../utils/context'

const AllLayouts = () => {

    // const [isLoading, setIsLoading] = useState(false)
    const { user, setUser, setJwtoken } = useContext(userContext)

    useEffect(() => {
        const getUser = async () => {
            setUser(JSON.parse(await AsyncStorage.getItem('user')))
            setJwtoken(await AsyncStorage.getItem('jwtoken'))
        }

        getUser()
    }, [])


    return (
        <>
            {/* {isLoading ?
                <ActivityIndicator animating size='large' color='red' style={{ marginVertical: '50%' }} /> : ( */}

            <NavigationContainer>
                {user ? (
                    user?.userType === 'customer'
                        ? <CustomerLayout /> :
                        <EmployeeLayout />
                ) :
                    <AuthLayout />
                }

            </NavigationContainer>
            {/* )
            } */}
        </>
    )
}

export default AllLayouts