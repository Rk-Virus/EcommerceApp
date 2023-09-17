import { fetchApi } from "../utils/fetchApi"
import SyncStorage from 'sync-storage';

let token =  SyncStorage.get('token')

export const getSchedule = async ()=>{
    
    const route = "/api/employee/get-schedule"
    const options = {
        method : "GET",
        headers : {
            authorization : `token ${token}`
        },
    }

    return await fetchApi(route, options)
}