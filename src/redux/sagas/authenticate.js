import { takeLatest, call, put } from "redux-saga/effects";
import {GET_LOGIN_ERROR, GET_LOGIN_START, GET_LOGIN_SUCCESS} from "../../consts/actionTypes";
import apiCall from "../api";


export function* login({payload}) {
    try {

        const url = 'https://www.mocky.io/v2/5e81032b3000000d006f9623';
        const method = "POST";

        const response = yield call(apiCall, url, method, payload);
        yield put({ type: GET_LOGIN_SUCCESS, login: response.data.token});

    } catch (e) {
        yield put({ type: GET_LOGIN_ERROR, e });
    }
}

export default function* authenticate() {
    yield takeLatest(GET_LOGIN_START, login);
}
