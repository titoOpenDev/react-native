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
export const REQUEST_POST_EXECUTIVE = "REQUEST_EXECUTIVE";
export const REQUEST_ERROR_EXECUTIVE = "REQUEST_ERROR_EXECUTIVE";

export default function create(state = initialState, action) {
    switch (action.type) {
        case CREATE_EXECUTIVE:
          return { ...state, ...action.payload };
        case REQUEST_ERROR_EXECUTIVE:
          return { ...state, err : action.payload };
        default:
          return { ...state };
  }
}

export const build = (data) => {
    return {
        type: CREATE_EXECUTIVE,
        payload: data
    }
}


export const request = (data) => {
    return {
        type: REQUEST_EXECUTIVE,
        payload: data
    }
}


export const requestError = (data) => {
    return {
        type: REQUEST_ERROR_EXECUTIVE,
        payload: data
    }
}


export const buildExecutive = payload =>  {
    return async dispatch => {
        dispatch(build(payload));
    }
}

export const requestExecutive = payload =>  {
    return async dispatch => {
        try {
            await apiCall( null , POST_METHOD , payload);
        } catch (error) {
            dispatch(requestError(error.message));
        }

    }
}
