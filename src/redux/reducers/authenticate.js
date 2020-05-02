import {
    GET_LOGIN_ERROR,
    GET_LOGIN_SUCCESS,
    GET_LOGIN_START
  } from "../../consts/actionTypes";

const authenticate = (state, action) => {
    switch (action.type) {
        case GET_LOGIN_START:
            return { ...state, login: null };
            break;
        case GET_LOGIN_SUCCESS:
            return { ...state, login: action.login };
            break;
        case GET_LOGIN_ERROR:
            return { ...state, login: null, error: null };
            break;
        default:
            return { ...state };
    }
}

export default authenticate;
