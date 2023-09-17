import React from 'react'
import { useState } from 'react'
import { Alert, StyleSheet, Text, View } from 'react-native'
import { Button, Card, TextInput } from 'react-native-paper'
// import { resetPassword } from '../../../Apis/commonApis'
// import auth from '@react-native-firebase/auth';
import { useEffect } from 'react'

const ChangePassForm = () => {

    const [password, setPassword] = useState('')
    const [cPassword, setCPassword] = useState('')
    // const { phoneNo } = useSelector(selectFormData)
    const [loading, setLoading] = useState(false)

    // useEffect(() => {
    //     auth()
    //         .signOut()
    //         .then(() => console.log('User signed out!'));
    // }, [])

    const handleSubmit = async () => {
        // try {
        //     if (cPassword !== password) {
        //         throw new Error('Password not matched')
        //     }
        //     setLoading(true)
        //     const res = await resetPassword({ phoneNo, password })
        //     if (res?.msg === 'success') {
        //         Alert.alert('Password changed successfully')
        //         setLoading(false)
        //     }
        // } catch (error) {
        //     setLoading(false)
        //     Alert.alert("Error", error.message)
        // }
    }

    return (
        <Card style={styles.card}>
            <Card.Content style={{ paddingHorizontal: 10 }}>
                <TextInput
                    label="Create Password"
                    placeholder='Enter Password'
                    secureTextEntry={true}
                    mode='outlined'
                    onChangeText={setPassword}
                    style={styles.inputField}
                />
                <TextInput
                    label="Confirm Password"
                    placeholder='Enter Password Again'
                    secureTextEntry={true}
                    mode='outlined'
                    onChangeText={setCPassword}
                    style={styles.inputField}
                />
            </Card.Content>
            <Card.Actions style={{ paddingHorizontal: 10 }}>
                <Button
                    onPress={handleSubmit}
                    mode="contained"
                    loading={loading}
                    style={styles.button}
                >
                    Submit
                </Button>
            </Card.Actions>
        </Card>
    )
}

export default ChangePassForm

const styles = StyleSheet.create({
    card: {
        padding: 10,
        elevation: 5,
        width: '100%',
        marginBottom: 100
    },
    button: {
        width: '100%',
        marginVertical: 10
    },
    inputField: {
        marginBottom: 20,
    },
})