import { apiEndpoint } from '../config/enviroment.ts';
import axios from 'axios';
import store from '../store/index.ts';


const axiosClient = axios.create();

const authHeader = (config: any) => {

    const state = store.getState();
    const token = state.auth.jwt;


    if (token) {
        config.headers = {
            ...config.headers,
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
            "Content-Type": "multipart/form-data",
        };
    }

    console.log("Request Config Headers:", config.headers);

    return config;
};

axiosClient.defaults.baseURL = apiEndpoint;
axiosClient.interceptors.request.use(authHeader);

axiosClient.interceptors.request.use(
    (response) => {
        // Edit response config
        return response;
    },
    (error) => {
        console.log(error);
        return Promise.reject(error);
    }
);
export async function getRequest(URL: string) {
    try {
        const response = await axiosClient.get(URL);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}
export async function postRequest(URL: string, payload: any) {
    try {
        const response = await axiosClient.post(URL, payload);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}
export async function putRequest(URL: string, payload: any) {
    try {
        const response = await axiosClient.put(URL, payload);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}



export async function deleteRequest(URL: string) {
    try {
        const response = await axiosClient.delete(URL);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}
export async function patchRequest(URL: string, payload: any) {
    try {
        const response = await axiosClient.patch(URL, payload);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}
