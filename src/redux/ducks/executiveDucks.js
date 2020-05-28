import apiCall from '../api';
import {POST_METHOD} from '../../consts';

const initialState = {
  lastName : '',
  firstName : '',
  email: '',
  cuil: '',
  filialZone: '',
  network: '',
  password: '',
  err: ''
}

export const CREATE_EXECUTIVE = "CREATE_EXECUTIVE";
export const CREATE_EXECUTIVE_ERROR = "CREATE_EXECUTIVE_ERROR";

export default function create(state = initialState, action) {
    switch (action.type) {
        case CREATE_EXECUTIVE:
          return { ...state, ...action.payload };
        case CREATE_EXECUTIVE_ERROR:
          return { ...state, err : action.payload };
        default:
          return { ...state };
  }
}

export const fetchBuild = (data) => {
    return {
        type: CREATE_EXECUTIVE,
        payload: data
    }
}

//TODO: SACAR EL EMAIL CUANDO EL PAYLOAD LLEGUE ARMADO BIEN DESDE LA VISTA
export const buildExecutive = payload =>  {
    return async dispatch => {
        payload.email = "tudireccion@server.com.ar";
        dispatch(fetchBuild(payload));
    }
}

export const fetchCreateError = (data) => {
    return {
        type: CREATE_EXECUTIVE_ERROR,
        payload: data
    }
}

//TODO: ARMAR BIEN LA URL DEL REQUEST POST
export const requestExecutive = payload =>  {
    
    return async dispatch => {
        try {
            await apiCall( null , POST_METHOD , payload);
        } catch (error) {
            dispatch(fetchCreateError(error.message));
        }

    }
}
