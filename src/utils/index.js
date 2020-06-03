import {AsyncStorage} from 'react-native';

import {
        MALE_GENDER,
        FEMALE_GENDER
       } from '../consts';

export const saveItem = async(keyName, keyValue) =>{
    try {
        await AsyncStorage.setItem(keyName,keyValue);
        return true;
    }catch(error){  
        return false;
    }
}

//TODO:En el CUIT ingresado solo va a ser para personas juridicas ??
export const validateCUIT =(cuit) =>{
    let companyCode = cuit.split('-')[0];
    if(((companyCode != 30) &&  (companyCode != 33)) && (companyCode != 34) ){
      return false;
    }
    return validate(code);
  }

export const validateCUIL =(cuil,gender) =>{
    let genderCode = cuil.split('-')[0];
    if((genderCode != 20 && gender === MALE_GENDER) || (genderCode != 27 && gender === FEMALE_GENDER) ){
      return false;
    }
    return validate(cuil);
}

const validate = (code) =>{
    
    let digits = parseCode(code);
    if(digits.length !== 11){
      return false;
    }

    let verifierDigit = digits.pop();
    
    let calculatedDigit = calculateVerifierDigit(digits);

    return (verifierDigit == calculatedDigit);
}

const calculateVerifierDigit = (digits) =>{
    let acumulated = 0;
    for(let i = 0; i < digits.length; i++) {
      acumulated += digits[9 - i] * (2 + (i % 6));
    }

    let calculatedDigit = 11 - (acumulated % 11);
    if(calculatedDigit === 11) {
      calculatedDigit = 0;
    }
    return calculatedDigit;
}

const parseCode = (code) =>{
    let aux = code.split("");
    let digits = [];
    for(let digit of aux ){
      if(digit !=='-'){
        digits.push(digit);
      }
    }
    return digits;
}

export const validateEmail= (email) => {
    let reg = /^\w+([\.-]?\w+)*@\w+(\.com)$/;
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