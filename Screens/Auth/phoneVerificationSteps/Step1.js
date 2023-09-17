import { Alert, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Button, Card, TextInput } from 'react-native-paper'
import { sendOtp } from '../../../utils/firebaseUtils'
import { SET_FORM_DATA } from '../../../Redux/Slices/userSlice'
import { useDispatch } from 'react-redux'
import { checkIfUserExist } from '../../../Apis/commonApis'

const Step1 = ({ setStepCount, setConfirm, forRegistration = false }) => {
    const [phoneNo, setPhoneNo] = useState('')
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()
    console.log({ phoneNo })


    const handleNext = async () => {
        if(!phoneNo) {
            Alert.alert('Phone no is required')
            return
        }
        try {
            setLoading(true)
            console.log({ phoneNo })
            const resp = await checkIfUserExist({ phoneNo })
            //  if this component is used in register then user should not exist hence changing th condition
            let validCondition = forRegistration ? (resp?.msg !== 'success') : (resp?.msg === 'success')
            if (validCondition) {            
                setLoading(false)
                dispatch(SET_FORM_DATA({ phoneNo }))
                setStepCount(prev => prev + 1)
            } else {
                setLoading(false)
                let message = forRegistration ? 'User Already Exist' : (resp?.msg || "something went wrong")
                Alert.alert(message)
            }
        } catch (error) {
            setLoading(false)
            console.log('otpSendingErr', error)
            Alert.alert('something went wrong')
        }

    }
    return (
        <>
            <Card style={styles.card}>
                <Card.Title title="Verify Your Phone number" />
                <Card.Content style={{ paddingHorizontal: 10 }}>
                    <TextInput
                        label="Phone Number"
                        placeholder='Enter phone number'
                        keyboardType='phone-pad'
                        mode='outlined'
                        onChangeText={setPhoneNo}
                    />
                </Card.Content>
                <Card.Actions style={{ paddingHorizontal: 10 }}>
                    <Button
                        mode="contained"
                        style={styles.button}
                        onPress={handleNext}
                        loading={loading}
                    >Next
                    </Button>
                </Card.Actions>
            </Card>
        </ >
    )
}

export default Step1

const styles = StyleSheet.create({
    card: {
        padding: 10,
        elevation: 5,
        width : '100%',
    },
    button: {
        width: '100%',
        marginVertical : 10
    }
})