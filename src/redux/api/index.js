import axios from "axios";

import {buildRequest} from '../../utils';

//TODO: Si hay algun llamado a otra API y que necesite setearle
//Algun campo del header como el Authorization crear otro metodo
export default async (completeURL, method, data) => {
    const request =  buildRequest(completeURL, method, data, null);
    return axios(request);
}

