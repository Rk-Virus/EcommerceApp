import React from 'react'
import LoginForm from '../Screens/Auth/LoginForm'
import Signup from '../Screens/Auth/Signup'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ForgotPassword from '../Screens/Auth/ForgotPassword.js'

const Auth = () => {
  const Stack = createNativeStackNavigator();

    return (
            <Stack.Navigator initialRouteName="Login">
            {/*Login Screen  */}
                <Stack.Screen
                    name="Login"
                    component={LoginForm}
                    options={{
                        headerTitleStyle: {
                            fontWeight: 'bold',
                            fontSize: 30,
                            color: '#f44336',
                        },
                        headerTitle: 'Login',
                        headerTitleAlign: 'left',
                    }}
                />

                {/*Signup Screen  */}
                <Stack.Screen
                    name="Signup"
                    component={Signup}
                    options={{
                        headerTitleStyle: {
                            fontWeight: 'bold',
                            fontSize: 30,
                            color: '#f44336',
                        },
                        headerTitle: 'Register',
                        headerTitleAlign: 'left',
                    }}
                />
                <Stack.Screen
                    name="ForgotPassword"
                    component={ForgotPassword}
                    options={{
                        headerTitleStyle: {
                            fontWeight: 'bold',
                            fontSize: 30,
                            color: '#f44336',
                        },
                        headerTitle: 'Forgot Password',
                        headerTitleAlign: 'left',
                    }}
                />
            </Stack.Navigator>
    )
}

export default Auth