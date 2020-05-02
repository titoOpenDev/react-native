import { GET_LOGIN_START } from "../../consts/actionTypes";

export const login = payload => ({
    type: GET_LOGIN_START,
    payload
});