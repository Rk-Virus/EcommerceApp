import { fetchApi } from "../utils/fetchApi"
// import SyncStorage from 'sync-storage';

// let token =  SyncStorage.get('token')
// ------------fetch user-------------------------------------

// export const fetchUser = async ()=>{
//     console.log('token',token)
//     const route = "/api/fetch-user"
//     const options = {
//         method : "GET",
//         headers : {
//             authorization : `token ${token}`
//         },
//     }

//     return await fetchApi(route, options)
// }

// ------------login user-------------------------------------
export const loginUser = async (body)=>{
    
    const route = "/api/login"
    const options = {
        method : "POST",
        headers : {"Content-Type" : "application/json"},
        credentials: 'include',
        body : JSON.stringify(body)
    }

    return await fetchApi(route, options)
}

// ------------register user-------------------------------------
export const registerUser = async (body)=>{
    // console.log(body)
    const route = "/api/register"
    const options = {
        method : "POST",
        headers : {
            "Content-Type" : "application/json"
        },
        credentials: 'include',
        body : JSON.stringify(body)
    }
    return await fetchApi(route, options)
}

// ------------logout user-------------------------------------

export const logout = async () => {
    
    const route = "/api/logout"
    const options = {
        method : "GET",
    }

    return await fetchApi(route, options)
}

export const updateProfile = async (body) => {
    const route = "/api/update-profile"
    const options = {
        method : "POST",
        headers : {
            "Content-Type" : "application/json",
            authorization : `token ${token}`
        },
        credentials: 'include',
        body : JSON.stringify(body)
    }

    return await fetchApi(route, options)
}

export const getAllOffers = async ()=>{

    const route = "/api/get-all-offers"
    const options = {
        method : "GET",
    }

    return await fetchApi(route, options)
}

export const checkIfUserExist = async (body)=>{
    
    const route = "/api/check-if-user-exist"
    const options = {
        method : "POST",
        headers : {
            "Content-Type" : "application/json",
        },
        body : JSON.stringify(body)
    }

    return await fetchApi(route, options)
}

//----------- reset password ------------
export const resetPassword = async (body)=>{
    const route = "/api/reset-password"
    const options = {
        method : "POST",
        headers : {
            "Content-Type" : "application/json",
        },
        body : JSON.stringify(body)
    }

    return await fetchApi(route, options)
}

// ------------Image upload to S3-------------------------------------
export const getUrls = async(body) => {
    const route = '/api/get-signed-url'
    const options = {
        method : "POST",
         headers : {"Content-Type" : "application/json"},
        body : JSON.stringify(body)
    }

    return await fetchApi(route, options)
}

export const sendToS3 = async (file, route) => {
    const options = {
        method : "PUT",
        headers : {"Content-Type" : "multipart/form-data"},
        body : file
    }
    try {
        const res = await fetch(route, options)
        const result = await res.text()
        console.log("s3",result)
        if(res.status===200){
            return result
        }
    } catch (error) {
        console.log("s3err",error)
        return error
    }
}

export const deleteImagesFromS3 = async(objects) => {
    const route = "/api/delete-image-from-s3"
    const options = {
        method : "POST",
         headers : {"Content-Type" : "application/json"},
        body : JSON.stringify({objects})
    }

    return await fetchApi(route, options)
}

