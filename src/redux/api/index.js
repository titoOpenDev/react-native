import axios from "axios";
// import environments from '../../../environment';
import {AsyncStorage} from "react-native";

const baseURL = 'http://localhost:8080';

export default async (url, method, data, headers) => {

    const token = await AsyncStorage.getItem('token');

    return axios({
        baseURL,
        method,
        url,
        data,
        headers: {
            ...headers,
            Authorization: token
        }
    });
}

