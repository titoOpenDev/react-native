
import apiCall from '../api';
import {POST_METHOD, ACCESS_TOKEN} from '../../consts';
import {eraseItem,saveItem, getItem} from '../../utils'

const initialState = {
  login : '',
  error : '',
  loged: false
}

export const GET_LOGIN_START = "GET_LOGIN_START";
export const GET_LOGIN_SUCCESS = "GET_LOGIN_SUCCESS";
export const GET_LOGIN_ERROR = "GET_LOGIN_ERROR";

export const GET_LOGOUT_SUCCESS = "GET_LOGOUT_SUCCESS";
export const GET_LOGOUT_ERROR = "GET_LOGOUT_ERROR";


export default function authenticate(state = initialState, action) {
  switch (action.type) {
      case GET_LOGIN_START:
          return { ...state, login: null };
      case GET_LOGIN_SUCCESS:
          return { ...state, login: action.payload,loged:true };
      case GET_LOGIN_ERROR:
          return { ...state, error: action.payload};
      case GET_LOGOUT_SUCCESS:
          return { ...state, login: action.payload, loged:false};
      case GET_LOGOUT_ERROR:
          return { ...state,error: action.payload };
      default:
          return { ...state };
  }
}

export const fetchLogin = (response) => {
    return {
        type: GET_LOGIN_SUCCESS,
        payload: response
    }
}

export const fetchError = (error) => {
    return {
        type : GET_LOGIN_ERROR,
        payload : error
    }
}

export const fetchLogOutError = (error) => {
    return {
        type : GET_LOGOUT_ERROR,
        payload : error
    }
}

export const fetchLogOut = (response) => {
    return {
        type : GET_LOGOUT_SUCCESS,
        payload : response
    }
}

//TODO: DESCOMENTAR EL LLAMADO AL SERVICIO CUANDO ESTE DISPONIBLE EL MISMO
export const login = payload =>  {
    return async dispatch => {
        try {
            let url = '/auth/sesion';
            // let response = await apiCall( url , POST_METHOD , payload);
            let response = {}
            //TODO: BORRAR LAS 2 LINEAS SIGUIENTES
            response.data = {};
            response.data.email = 'juanmadm_88@hotmail.com';
            //
            await saveItem(ACCESS_TOKEN, JSON.stringify(response.data.email));
            let token = await getItem(ACCESS_TOKEN)
            dispatch(fetchLogin(response.data));
        } catch (error) {
            console.log(error);
            dispatch(fetchError(error));
        }
    }
}

export const logOut = () =>  {
    return async dispatch => {
        try {
            await eraseItem(ACCESS_TOKEN);
            dispatch(fetchLogOut(""))
        } catch (error) {
            console.log(error);
            dispatch(fetchLogOutError(error));
        }
    }
}
