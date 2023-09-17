import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import BottomNavigation from '../components/BottomNavigation'
// import EditProfile from '../Screens/EditProfile'
import Home from '../Screens/Home'
// import OrderHistory from '../Screens/Customer/OrderHistory'
// import Profile from '../Screens/Profile'
// import Settings from '../Screens/Settings'
// import ViewDetails from '../Screens/ViewDetails'
// import OrderDetails from '../Screens/Customer/OrderDetails'
// import ConfirmOrder from '../Screens/Customer/ConfirmOrder'
// import Maps from '../Screens/Employee/Maps'

const Customer = () => {
    const Stack = createNativeStackNavigator();
    const routes = [
        {
          name: 'Home',
          icon: 'home',
          route: 'Home',
        },
        {
          name: 'Orders',
          icon: 'list', 
          route: 'OrderHistory',
        },
        {
            name: 'Profile',
            icon: 'person', 
            route: 'Profile',
          },
      ]

    return (
        <>
        <Stack.Navigator initialRouteName="Home">
            {/* Home Screen */}
            <Stack.Screen
                name="Home"
                component={Home}
                options={{ headerShown: false }}
            />

            {/*Profile Screen  */}
            {/* <Stack.Screen
                name="Profile"
                component={Profile}
                options={{
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        fontSize: 25,
                        color: '#f44336',
                    },
                    headerTitle: 'Profile',
                    headerTitleAlign: 'left',
                }}
            /> */}

            {/* <Stack.Screen
                name="Maps"
                component={Maps}
                options={{
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        fontSize: 25,
                        color: '#f44336',
                    },
                    headerTitle: 'Profile',
                    headerTitleAlign: 'left',
                }}
            /> */}

            {/*Details Screen  */}
            {/* <Stack.Screen
                name="Details"
                component={ViewDetails}
                options={{
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        fontSize: 25,
                        color: '#f44336',
                    },
                    headerTitle: 'Details',
                    headerTitleAlign: 'left',
                }}
            /> */}

            
            {/*Confirmation Screen  */}
            {/* <Stack.Screen
                name="ConfirmOrder"
                component={ConfirmOrder}
                options={{
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        fontSize: 25,
                        color: '#f44336',
                    },
                    headerTitle: 'Check Order Details',
                    headerTitleAlign: 'left',
                }}
            /> */}

            {/*EditProfile Screen  */}
            {/* <Stack.Screen
                name="EditProfile"
                component={EditProfile}
                options={{
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        fontSize: 25,
                        color: '#f44336',
                    },
                    headerTitle: 'EditProfile',
                    headerTitleAlign: 'left',
                }}
            /> */}

            {/*Sttings Screen  */}
            {/* <Stack.Screen
                name="Settings"
                component={Settings}
                options={{
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        fontSize: 25,
                        color: '#f44336',
                    },
                    headerTitle: 'Settings',
                    headerTitleAlign: 'left',
                }}
            /> */}

            {/*OrderHistory Screen  */}
            {/* <Stack.Screen
                name="OrderHistory"
                component={OrderHistory}
                options={{
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        fontSize: 25,
                        color: '#f44336',
                    },
                    headerTitle: 'Order History',
                    headerTitleAlign: 'left',
                }}
            /> */}

            {/*OrderHistory Details Screen  */}
            {/* <Stack.Screen
                name="OrderDetails"
                component={OrderDetails}
                options={{
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        fontSize: 25,
                        color: '#f44336',
                    },
                    headerTitle: 'Order Details',
                    headerTitleAlign: 'left',
                }}
            /> */}
        </Stack.Navigator>
        
        <BottomNavigation routes={routes} />
        </>
    )
}

export default Customer