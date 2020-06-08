import {AsyncStorage} from 'react-native';

import {
        MALE_GENDER,
        FEMALE_GENDER,
        CUIL,
        CUIT,
        EMAIL,
        FIRST_NAME,
        LAST_NAME,
        EMPTY_MESSAGE,
        EMPTY_USER_SURNAME,
        EMPTY_USER_NAME,
        EMPTY_PASSWORD,
        EMPTY_USERNAME,
        EMPTY_CUIL,
        EMPTY_CUIT,
        WRONG_CUIT,
        WRONG_CUIL,
        WRONG_FORMAT_EMAIL,
        EMPTY_USER_EMAIL,
        USER_NAME,
        PASSWORD,
       } from '../consts';

export const saveItem = async(keyName, keyValue) =>{
    try {
        await AsyncStorage.setItem(keyName,keyValue);
        return true;
    }catch(error){  
        return false;
    }
}

export const buildErrMssg = (form) =>{
    let errMssg = "";
    for(let field of Object.keys(form)){
        errMssg = validateField(form,field);
        if(errMssg.length >0){
            break;
        }
    }
    return errMssg;
}

export const validateField = (form,field) =>{
    let errMssg = "";
    switch(field){
        case CUIL:
            errMssg = wrongCUIL(form[field], form['gender']);
            break;
        case CUIT:
            errMssg= wrongCUIT(form[field]);
            break;
        case LAST_NAME:
            errMssg= emptyField(form[field],EMPTY_USER_SURNAME);
            break;
        case FIRST_NAME:
            errMssg= emptyField(form[field],EMPTY_USER_NAME);
            break;
        case EMAIL:
            errMssg = wrongEmail(form[field]);
            break;
        case USER_NAME:
            errMssg= emptyField(form[field],EMPTY_USERNAME);
            break;
        case PASSWORD:
            errMssg= emptyField(form[field],EMPTY_PASSWORD);
            break;
        default:
            break;
    }
    return errMssg;
}

const wrongCUIL = (cuil,gender) =>{
    if(!cuil.trim()){
        return EMPTY_CUIL;
    }else {
        if(!validateCUIL(cuil,gender)){
            return WRONG_CUIL;
        }else{
            return EMPTY_MESSAGE;
        }
    }    
}

const wrongCUIT = (cuit) =>{
    if(!cuit.trim()){
        return EMPTY_CUIT;
    }else {
        if(!validateCUIT(cuit)){
            return WRONG_CUIT;
        }else{
            return EMPTY_MESSAGE;
        }
    }
}

const wrongEmail = (email) =>{
    if(!email.trim()){
        return EMPTY_USER_EMAIL;
    }else {
        if(!validateEmail(email)){
            return WRONG_FORMAT_EMAIL;
        }else{
            return EMPTY_MESSAGE;
        }
    }
}

const emptyField = (value, mssg) =>{
    if(!value.trim()){
        return mssg;
    }else{
        return EMPTY_MESSAGE;
    }
}

//TODO:En el CUIT ingresado solo va a ser para personas juridicas ??
export const validateCUIT =(cuit) =>{
    let companyCode = cuit.split('-')[0];
    if(((companyCode != 30) &&  (companyCode != 33)) && (companyCode != 34) ){
      return false;
    }
    return validate(cuit);
  }

export const validateCUIL =(cuil,gender) =>{
    let genderCode = cuil.split('-')[0];
    if(gender && ((genderCode != 20 && gender === MALE_GENDER) || (genderCode != 27 && gender === FEMALE_GENDER)) ){
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
    let reg = /^\w+([\.-]?\w+)*@\w+(\.com)(\.ar)?$/;
    return (reg.test(email) !== false);
}

export  const passwordsAreEquals = (password, secondPassword)=>{
    return (password === secondPassword);
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

export const buildImageRequest = (photoUri) =>{
  const body = new FormData();
  body.append('photo', {
    uri:  Platform.OS === "android" ? photoUri : photoUri.replace("file://", ""),
    name: photoUri.substr(photoUri.lastIndexOf('/') + 1),
    type: 'image/jpg'
  });

  return body;
}