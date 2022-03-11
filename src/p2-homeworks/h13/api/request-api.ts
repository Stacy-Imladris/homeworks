import axios from 'axios';

export const requestsAPI = {
    postRequest(body: {success: boolean}){
        return axios.post<ResponseType>('https://neko-cafe-back.herokuapp.com/auth/test', body)
    }
}

export type ResponseType = {
    errorText: string
    info: string
    yourBody: {success: boolean}
    yourQuery: {}
}