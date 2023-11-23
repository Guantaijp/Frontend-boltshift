import { postRequest, putRequest,getRequest } from "../../config/axiosConfig";
import { setToken,setUser} from "../slices/auth.slice.ts";

export function signInAsyc(data: any) {
    return async (dispatch: any, _getState: any) => {
        try {
            const res = await postRequest('auth/local', data)
            dispatch(setToken(res.jwt))
            dispatch(setUser(res.user))
            return res
        } catch (error) {
            console.log(error)
            throw error
        }
    };
}

export function signUpAsyc(data: any){
    return async ( _getState:any) => {
        const res = await postRequest('auth/local/register',data)
       return res
    }
}

export function signOutAsyc(){
    return async (dispatch:any, _getState:any) => {
        dispatch(setToken(null))
    }
}

export function getUserProfileAsyc(){
    return async ( _getState:any) => {
        const res = await getRequest('auth/me')
        return res
    }
}

export function updateUserProfileAsyc(data: any){
    return async ( _getState:any) => {
        const res = await putRequest('auth/me',data)
        return res
    }
}