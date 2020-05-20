
import axios from 'axios';

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

export const login = payload =>  {
    return async dispatch => {
        const url = "http://192.168.0.218:8000/api/ejecutivos/auth/sesion"
        try {
            let response = await axios.post(url, payload);
            dispatch(fetchLogin(response.data.email))
        } catch (error) {
            dispatch(fetchError("USUARIO Y/O PASSWORD INCORRECTOS"))
        }
    }
}
