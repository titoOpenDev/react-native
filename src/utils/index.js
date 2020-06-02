import {AsyncStorage} from 'react-native';
import FormData from 'form-data';

export const saveItem = async(keyName, keyValue) =>{
    try {
        await AsyncStorage.setItem(keyName,keyValue);
        return true;
    }catch(error){  
        return false;
    }

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

export const buildImageRequest = ( url, method, photo) =>{
  // Platform.OS === "android" ? photo.uri : photo.uri.replace("file://", "")

  // const photo = {
  //   uri: path,
  //   type: 'image/jpeg',
  //   name: 'photo.jpg',
  // };

        // 'Authorization': 'Bearer ' + user.token
  const photoOptions = {
    uri: photo.uri,
    type: 'image/jpeg',
    name: photo.image.uri.substr(photo.image.uri.lastIndexOf('/') + 1)
  };

  const form = new FormData();
  form.append("ProfilePicture", photoOptions);
  const obj = {};
  const headers = 
    {
      'Content-Type': 'multipart/form-data'
    }
  if(url) obj.url = url;   
  if(method) obj.method = method;
  if(photo) obj.data = form;
  if(headers) obj.headers = headers;
  return obj;

}