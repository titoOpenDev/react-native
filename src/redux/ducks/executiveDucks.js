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
  err: '',
  success:''
}

export const STARTING = 'STARTING';
export const CREATE_EXECUTIVE = "CREATE_EXECUTIVE";
export const REQUEST_EXECUTIVE_ERROR = "REQUEST_EXECUTIVE_ERROR";
export const PASSWORD_RECOVERY_ERROR = "PASSWORD_RECOVERY_ERROR";
export const UPDATE_PASSWORD_ERROR = "UPDATE_PASSWORD_ERROR";
export const UPDATE_PASSWORD_SUCCESS = "UPDATE_PASSWORD_SUCCESS";

export default function create(state = initialState, action) {
    switch (action.type) {
        case STARTING:
            return { ...state, err:'', success:'' };
        case CREATE_EXECUTIVE:
            return { ...state, ...action.payload};
        case REQUEST_EXECUTIVE_ERROR:
            return { ...state, err : action.payload };
        case PASSWORD_RECOVERY_ERROR:
            return { ...state, err : action.payload};
        case UPDATE_PASSWORD_ERROR:
            return { ...state, err : action.payload,success:false };
        case UPDATE_PASSWORD_SUCCESS:
            return { ...state, success:true };
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
        dispatch(fetchStarting());
        payload.email = "tudireccion@server.com.ar";
        dispatch(fetchBuild(payload));
    }
}

export const fetchRequestExecutiveError = (data) => {
    return {
        type: REQUEST_EXECUTIVE_ERROR,
        payload: data
    }
}

export const fetchStarting = () => {
    return {
        type: UPDATE_PASSWORD_START
    }
}

//TODO: ARMAR BIEN LA URL DEL REQUEST POST,
//DESCOMENTAR LLAMADO API
export const requestExecutive = payload =>  {
    
    return async dispatch => {
        try {
            dispatch(fetchStarting());
            // await apiCall( null , POST_METHOD , payload);
        } catch (error) {
            console.log(error);
            dispatch(fetchRequestExecutiveError(error.message));
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
            dispatch(fetchStarting());
            // await apiCall( null , POST_METHOD , payload);
        } catch (error) {
            console.log(error);
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

export const fetchUpdatePasswordSuccess = () => {
    return {
        type: UPDATE_PASSWORD_SUCCESS
    }
}

//TODO: ARMAR LA URL PARA LLAMAR AL SERVICIO DE LA API, CHECKEAR QUE SEA UN PUT,
//DESCOMENTAR LLAMADO API
//FIJARSE QUE DATA PASARLE EN EL REQUEST
export const updatePassword = payload =>  {
    
    return async dispatch => {
        try {
            dispatch(fetchStarting());
            // await apiCall( null , POST_METHOD , payload);
            dispatch(fetchUpdatePasswordSuccess());
        } catch (error) {
            console.log(error);
            dispatch(fetchUpdatePasswordError(error.message));
        }
    }
}
