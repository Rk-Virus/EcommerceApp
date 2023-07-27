import { ScrollView, StatusBar, Text, View } from 'react-native'
import { ActivityIndicator, MD2Colors } from 'react-native-paper';
import React, { useState } from 'react'
import LoginForm from '../Screens/Auth/LoginForm';
import SignupForm from '../Screens/Auth/Signup/SignupForm';


const AllLayouts = () => {
    const [isLoading, setIsLoading] = useState(false)
    return (
        <ScrollView>
            {isLoading ?
                <ActivityIndicator animating size='large' color='red' style={{marginVertical:'50%'}} /> : (<>
                    <StatusBar barStyle={'default'} hidden={false} />
                    <Text>App</Text>
                    
                    {/* <LoginForm/> */}
                    {/* <SignupForm/> */}
                    
                    </>)
            }
        </ScrollView>
    )
}

export default AllLayouts