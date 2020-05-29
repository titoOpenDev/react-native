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
export const PASSWORD_RECOVERY_ERROR = "PASSWORD_RECOVERY_ERROR";
export const UPDATE_PASSWORD_ERROR = "UPDATE_PASSWORD_ERROR";

export default function create(state = initialState, action) {
    switch (action.type) {
        case CREATE_EXECUTIVE:
            return { ...state, ...action.payload };
        case CREATE_EXECUTIVE_ERROR:
            return { ...state, err : action.payload };
        case PASSWORD_RECOVERY_ERROR:
            return { ...state, err : action.payload };
        case UPDATE_PASSWORD_ERROR:
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

//TODO: ARMAR BIEN LA URL DEL REQUEST POST,
//DESCOMENTAR LLAMADO API
export const requestExecutive = payload =>  {
    
    return async dispatch => {
        try {
            // await apiCall( null , POST_METHOD , payload);
        } catch (error) {
            dispatch(fetchCreateError(error.message));
        }

    }
}

export const fetchPasswordRecoveryError = (error) => {
    return {
        type: PASSWORD_RECOVERY_ERROR,
        payload: error
    }
}

//TODO: ARMAR LA URL PARA LLAMAR AL SERVICIO DE LA API, CHECKEAR QUE SEA UN POST,
//DESCOMENTAR LLAMADO API
//FIJARSE QUE DATA PASARLE EN EL REQUEST
export const passwordRecovery = payload =>  {
    
    return async dispatch => {
        try {
            // await apiCall( null , POST_METHOD , payload);
        } catch (error) {
            dispatch(fetchPasswordRecoveryError(error.message));
        }
    }
}

export const fetchUpdatePasswordError = (error) => {
    return {
        type: UPDATE_PASSWORD_ERROR,
        payload: error
    }
}

//TODO: ARMAR LA URL PARA LLAMAR AL SERVICIO DE LA API, CHECKEAR QUE SEA UN PUT,
//DESCOMENTAR LLAMADO API
//FIJARSE QUE DATA PASARLE EN EL REQUEST
export const updatePassword = payload =>  {
    
    return async dispatch => {
        try {
            //await apiCall( null , POST_METHOD , payload);
        } catch (error) {
            dispatch(fetchUpdatePasswordError(error));
        }
    }
}
