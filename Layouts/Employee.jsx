import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Profile from '../Screens/Profile';
import EditProfile from '../Screens/EditProfile';
import BottomNavigation from '../components/BottomNavigation';
import Settings from '../Screens/Settings';
import Schedule from '../Screens/Employee/Schedule';
import Maps from '../Screens/Employee/Maps';
import Home from '../Screens/Home';
import ViewDetails from '../Screens/ViewDetails';

const Employee = () => {
    const Stack = createNativeStackNavigator();
    const routes = [
        {
            name: 'Home',
            icon: 'home',
            route: 'Home',
        },
        {
            name: 'Schedule',
            icon: 'list',
            route: 'Schedule',
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
                {/*Home Screen  */}
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{ headerShown: false }}
                />

                {/*Details Screen  */}
                <Stack.Screen
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
                />

                {/*Profile Screen  */}
                <Stack.Screen
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
                />

                {/*EditProfile Screen  */}
                <Stack.Screen
                    name="EditProfile"
                    component={EditProfile}
                    options={{
                        headerTitleStyle: {
                            fontWeight: 'bold',
                            fontSize: 25,
                            color: '#f44336',
                        },
                        headerTitle: 'Edit Profile',
                        headerTitleAlign: 'left',
                    }}
                />

                {/*Settings Screen  */}
                <Stack.Screen
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
                />

                {/*Schedule Screen  */}
                <Stack.Screen
                    name="Schedule"
                    component={Schedule}
                    options={{
                        headerTitleStyle: {
                            fontWeight: 'bold',
                            fontSize: 25,
                            color: '#f44336',
                        },
                        headerTitle: 'Schedule',
                        headerTitleAlign: 'left',
                    }}
                />

                {/* map screen  */}
                <Stack.Screen
                    name="Maps"
                    component={Maps}
                    options={{
                        headerTitleStyle: {
                            fontWeight: 'bold',
                            fontSize: 25,
                            color: '#f44336',
                        },
                        headerTitle: 'Maps',
                        headerTitleAlign: 'left',
                    }}
                />
            </Stack.Navigator>
            <BottomNavigation routes={routes} />
        </>
    )
}

export default Employee