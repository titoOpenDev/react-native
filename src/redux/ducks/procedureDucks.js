import apiCall from '../api';
import {POST_METHOD} from '../../consts';
import environment from '../../../environment';

const {PROCEDURE_API_HOST} = environment();

const initialState = {
  cuil:'',
  cuit:'',
  creationDate: {},
  gender:''
}

export const STARTING = 'STARTING';
export const CREATE_PROCEDURE = "CREATE_PROCEDURE";
export const REQUEST_PROCEDURE_ERROR = "REQUEST_PROCEDURE_ERROR";

export default function create(state = initialState, action) {
    switch (action.type) {
        case STARTING:
            return { ...state, err:'', success:'' };
        case CREATE_PROCEDURE:
            return { ...state, ...action.payload};
        case REQUEST_PROCEDURE_ERROR:
            return { ...state, err : action.payload };
        default:
          return { ...state };
  }
}


export const fetchRequestProcedureError = (data) => {
    return {
        type: REQUEST_PROCEDURE_ERROR,
        payload: data
    }
}

export const fetchStarting = () => {
    return {
        type: STARTING
    }
}

export const requestProcedure = payload =>  {
    
    return async dispatch => {
        try {
            dispatch(fetchStarting());
            const completeUrl = `${PROCEDURE_API_HOST}`
            await apiCall( completeUrl , POST_METHOD , payload);
        } catch (error) {
            console.log(error);
            dispatch(fetchRequestProcedureError(error.message));
        }
    }
}

