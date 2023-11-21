import apiEndpoint from './enviroment.ts';
import axios from 'axios';
// import store from '../store/index.ts';


const axiosClient = axios.create({

    baseURL: apiEndpoint,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
});

axiosClient.interceptors.request.use(
    (response) => {
        return response;
    },
    (error) => {
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
