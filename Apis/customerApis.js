import { fetchApi } from "../utils/fetchApi"
import SyncStorage from 'sync-storage';

let token =  SyncStorage.get('token')


export const bookOrder = async (body)=>{

    const route = "/api/customer/book-order"
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


export const checkout = async (offerId)=>{

    const route = `/api/customer/accept-app-payment/${offerId}`
    const options = {
        method : "GET",
        headers : {
            "Content-Type" : "application/json",
            authorization : `token ${token}`
        },
    }
    return await fetchApi(route, options)
}
export const redeemWallet = async ()=>{

    const route = "/api/customer/redeem-wallet"
    const options = {
        method : "GET",
        headers : {
            authorization : `token ${token}`
        },
        credentials: 'include'
    }

    return await fetchApi(route, options)
}

export const getActiveOrders = async () => {
    const route = "/api/customer/get-active-orders"
    const options = {
        method : 'GET',
        credentials: 'include',
        headers : {
            authorization : `token ${token}`
        }
    }
    return await fetchApi(route, options)
}
export const getPreviousOrders = async () => {
    const route = "/api/customer/get-previous-orders"
    const options = {
        method : 'GET',
        credentials: 'include',
        headers : {
            authorization : `token ${token}`
        }
    }
    return await fetchApi(route, options)
}

export const getSingleOrder = async (orderId) => {
    const route = `/api/customer/get-single-order/${orderId}`
    const options = {
        method : 'GET',
        credentials: 'include',
        headers : {
            authorization : `token ${token}`
        }
    }
    return await fetchApi(route, options)
}
