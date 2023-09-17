import auth from '@react-native-firebase/auth';

export const sendOtp = async (phoneNumber, setConfirm) => {
  return new Promise(async (resolve, reject) => {
    try {
      const confirmation = await auth().signInWithPhoneNumber(`+91${phoneNumber}`);
      setConfirm(confirmation);
      resolve('success')
    } catch (error) {
      console.log(error)
      reject(error)
    }
  })
}

export const verifyOtp = async (code, confirm) => {
  return new Promise( async (resolve, reject) => {
    try {
      const result = await confirm.confirm(code);
      resolve(result);
    } catch (error) {
      console.log('Invalid code.');
      reject(error);
    }
  })
}