import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { selectFormData } from '../../../Redux/Slices/userSlice'
import { sendOtp, verifyOtp } from '../../../utils/firebaseUtils'
import { Button, Card, TextInput } from 'react-native-paper'
import { useEffect } from 'react'

const Step2 = ({ setStepCount, confirm, setConfirm }) => {
    const [otp, setOtp] = useState('')
    const { phoneNo } = useSelector(selectFormData)
    const [loading, setLoading] = useState(false)
    const [resend, setResend] = useState(false)

    useEffect(() => {
     (async () => {
            try{
                if(phoneNo  && setConfirm){
                    await sendOtp(phoneNo, setConfirm)
                }
            }catch(error){
                console.log(error)
                alert('Somethng went wrong Please try again later')
            }
        })()
    }, [resend])

    const resendOtp = async () => {
        setResend(prev => !prev)
    }
    const handleNext = async () => {
        try {
            setLoading(true)
            console.log({ otp })
            const res = await verifyOtp(otp, confirm)
            console.log({ res })
            setLoading(false)
        } catch (error) {
            setLoading(false)
            console.log('verifyOtpErr', error)
            Alert.alert("Error", "OTP is invalid or is expired")
        }
    }

    return (
        <>
            <Card style={styles.card}>
                <Card.Title title="Verify OTP" />
                <Card.Content style={{ paddingHorizontal: 10 }}>
                    <TextInput
                        label="OTP"
                        placeholder='Enter OTP'
                        keyboardType='phone-pad'
                        mode='outlined'
                        onChangeText={setOtp}
                    />
                    <TouchableOpacity
                        onPress={() => {
                            resendOtp()
                        }}
                        activeOpacity={0.8}>
                        <Text style={{ marginBottom: -5, color: '#f44336', textAlign: 'center', marginTop: 10 }}>Resend OTP</Text>
                    </TouchableOpacity>
                </Card.Content>
                <Card.Actions style={{ paddingHorizontal: 10 }}>
                    <Button
                        mode="contained"
                        loading={loading}
                        onPress={handleNext}
                        style={styles.button}
                    >Next
                    </Button>
                </Card.Actions>
            </Card>
        </>
    )
}

export default Step2

const styles = StyleSheet.create({
    card: {
        padding: 10,
        elevation: 5,
        width: '100%',
    },
    button: {
        width: '100%',
        marginVertical: 10
    }
})