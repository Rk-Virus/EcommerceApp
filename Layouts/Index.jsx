import { ActivityIndicator, Text } from 'react-native-paper';
import React, { useState } from 'react'
import AuthLayout from './Auth'
import { NavigationContainer } from '@react-navigation/native';
import CustomerLayout from './Customer'
// import EmployeeLayout from './Employee'

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
                            // user?.userType === 'customer'
                            user
                             ? <CustomerLayout /> : 
                            // <EmployeeLayout />
                            <Text>employee</Text>
                        ) : 
                        <AuthLayout />
                        }

                    </NavigationContainer>)
            }
        </>
    )
}

export default AllLayouts