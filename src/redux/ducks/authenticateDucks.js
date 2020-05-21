
import apiCall from '../api';
import {POST_METHOD} from '../../consts';

const initialState = {
  login : '',
  error : ''
}

export const GET_LOGIN_START = "GET_LOGIN_START";
export const GET_LOGIN_SUCCESS = "GET_LOGIN_SUCCESS";
export const GET_LOGIN_ERROR = "GET_LOGIN_ERROR";

export default function authenticate(state = initialState, action) {
  switch (action.type) {
      case GET_LOGIN_START:
          return { ...state, login: null };
      case GET_LOGIN_SUCCESS:
          return { ...state, login: action.payload };
      case GET_LOGIN_ERROR:
          return { ...state, error: action.payload};
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
//TODO: Mejorar el manejo de errores, por ejemplo si hubiese 
//un problema de red y el host estuviese inalcanzable, estaria tirando
//siempre el mismo error y que no tiene nada que ver, user y pass incorrectos
export const login = payload =>  {
    return async dispatch => {
        try {
            let url = '/auth/sesion';
            let response = await apiCall( url , POST_METHOD , payload);
            dispatch(fetchLogin(response.data.email))
        } catch (error) {
            console.log(error);
            dispatch(fetchError("USUARIO Y/O PASSWORD INCORRECTOS"));
        }
    }
}
