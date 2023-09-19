import { ActivityIndicator, Text } from 'react-native-paper';
import React, { useState, useContext } from 'react'
import AuthLayout from './Auth'
import { NavigationContainer } from '@react-navigation/native';
import CustomerLayout from './Customer'
import EmployeeLayout from './Employee'

//taking global user state
import userContext from '../utils/context'

const AllLayouts = () => {
    const [isLoading, setIsLoading] = useState(false)
    const {user, setUser} = useContext(userContext)
    return (
        <>
            {isLoading ?
                <ActivityIndicator animating size='large' color='red' style={{ marginVertical: '50%' }} /> : (

                    <NavigationContainer>
                        {user ? (
                            user?.userType === 'customer'
                             ? <CustomerLayout /> : 
                            // <EmployeeLayout />
                            <Text>employee</Text>
                        ) : 
                        // <AuthLayout />
                        <EmployeeLayout /> 
                        }

                    </NavigationContainer>)
            }
        </>
    )
}

export default AllLayouts