import apiEndpoint from './enviroment.ts';
import axios from 'axios';
import store from '../store/index.ts';

const axiosClient = axios.create({
    baseURL: apiEndpoint,
});

export async function getRequest(URL: string) {
    try {
        const response = await axiosClient.get(URL);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error; // Rethrow the error so that the caller can handle it if needed.
    }
}
