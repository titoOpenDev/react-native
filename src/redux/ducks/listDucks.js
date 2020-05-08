export const GET_LIST_START = "GET_LIST_START";
export const GET_LIST_SUCCESS = "GET_LIST_SUCCESS";
export const GET_LIST_ERROR = "GET_LIST_ERROR";


export default function list (state, action){
    switch (action.type) {
        case GET_LIST_START:
            return { ...state, list: null };
            break;
        case GET_LIST_SUCCESS:
            return { ...state, list: action.list };
            break;
        case GET_LIST_ERROR:
            return { ...state, list: null, error: null };
            break;
        default:
            return { ...state };
    }
}

export const list = payload => ({
  type: GET_LIST_START,
  payload
});