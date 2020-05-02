import { GET_LIST_START } from "../../consts/actionTypes";

export const list = payload => ({
    type: GET_LIST_START,
    payload
});
