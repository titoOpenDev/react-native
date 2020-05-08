const initialState = {
  login: 'login',
  error: 'errorLogin'
}

export const GET_LOGIN_START = "GET_LOGIN_START";
export const GET_LOGIN_SUCCESS = "GET_LOGIN_SUCCESS";
export const GET_LOGIN_ERROR = "GET_LOGIN_ERROR";

export default function authenticate(state = initialState, action) {
  switch (action.type) {
      case GET_LOGIN_START:
          return { ...state, login: null };
      case GET_LOGIN_SUCCESS:
          return { ...state, login: action.login };
      case GET_LOGIN_ERROR:
          return { ...state, login: null, error: null };
      default:
          return { ...state };
  }
}

export const login = payload => ({
  type: GET_LOGIN_START,
  payload
});