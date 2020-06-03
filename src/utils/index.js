import {AsyncStorage} from 'react-native';

export const saveItem = async(keyName, keyValue) =>{
    try {
        await AsyncStorage.setItem(keyName,keyValue);
        return true;
    }catch(error){  
        return false;
    }

}

export const validateEmail= () => {
    let reg = /^\w+([\.-]?\w+)*@\w+(\.com\.ar)$/;
    return (reg.test(email) !== false);
}

export const getItem = async(keyName)=>{
    try {
        return await AsyncStorage.getItem(keyName);
    }catch(error){  
        return false;
    }
}

export const eraseItem = async(keyName)=>{
    try {
        return await AsyncStorage.removeItem(keyName);
    }catch(error){  
        return false;
    }
}

export const clearAll = async ()=>{
    try {
        return await AsyncStorage.clear();
    }catch(error){  
        return false;
    }
}

export const buildRequest = ( url, method, data, headers) =>{
    const obj = {};
    
    if(url) obj.url = url;   
    if(method) obj.method = method;
    if(data) obj.data = data;
    if(headers) obj.headers = headers;
    return obj;
}

//TODO: Ver si hay casos donde el Header tenga mas datos
const buildHeaders = async() =>{
    let headers= {};
    try{
        headers.Authorization = await getItem('token');
        return headers;
    }catch(error){
        console.log(error);
    }
}