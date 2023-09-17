import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
// import Step1 from '../phoneVerificationSteps/Step1'
// import Step2 from '../phoneVerificationSteps/Step2'
// import Step3 from './ChangePassForm'
import { useState } from 'react'
import { useEffect } from 'react'
// import auth from '@react-native-firebase/auth';
import ChangePassForm from './ChangePassForm'

const ForgotPassword = () => {
    const [stepCount, setStepCount] = useState(1)
    const [confirm, setConfirm] = useState(null)

    // function onAuthStateChanged(user) {
    //     console.log('onAuthStateChanged', user);
    //     if (user) {
    //         setStepCount(prev =>{
    //             if(prev == 2){
    //                 return 3
    //             }else return prev
    //         })
    //     }
    //   }
    
    //   useEffect(() => {
    //     const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    //     return subscriber; // unsubscribe on unmount
    //   }, []);
      
    // const renderStep = () => {
    //     switch (stepCount) {
    //         case 1:
    //             return <Step1 setStepCount={setStepCount} setConfirm={setConfirm} />
    //         case 2:
    //             return <Step2 setStepCount={setStepCount} confirm={confirm} setConfirm={setConfirm} />
    //         case 3:
    //             return < Step3  />
    //         default:
    //             return <Step1 setStepCount={setStepCount} setConfirm={setConfirm} />
    //     }
    // }

  return (
    <ScrollView contentContainerStyle={styles.main}>
     {/* {renderStep()} */}
     <ChangePassForm/>
    </ScrollView>
  )
}

export default ForgotPassword

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        elevation: 1,
        width: '100%',
        height: '100%',
        paddingBottom : 50
    }
})