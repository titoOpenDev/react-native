import axios from "axios";

import {buildRequest, buildImageRequest} from '../../utils';
import environment from '../../../environment';

const{EXECUTIVE_API_HOST} = environment();

//TODO: Si hay algun llamado a otra API y que necesite setearle
//Algun campo del header como el Authorization crear otro metodo
export default async (url, method, data) => {
    let completeURL = EXECUTIVE_API_HOST;

    if(url) completeURL = `${completeURL}${url}`;
    const object =  buildRequest(completeURL, method, data, null);

    return axios(object);
}

export async function uploadImage(url, method, photoUri) {
  const body = buildImageRequest(photoUri);
  return fetch(url,
              {
                method,
                body
              })
}

