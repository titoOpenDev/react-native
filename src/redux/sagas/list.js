import { takeLatest, call, put } from "redux-saga/effects";
import {GET_LIST_ERROR, GET_LIST_START, GET_LIST_SUCCESS} from "../../consts/actionTypes";
import apiCall from "../api";


export function* getList() {
    try {

        const url = 'https://5e7a93bb17314d001613405f.mockapi.io/articles';
        const method = "GET";

        const response = yield call(apiCall, url, method);
        yield put({ type: GET_LIST_SUCCESS, list: response});

    } catch (e) {
        yield put({ type: GET_LIST_ERROR, e });
    }
}

export default function* list() {
    yield takeLatest(GET_LIST_START, getList);
}
