import { all } from "redux-saga/effects";

import authenticate from "./authenticate";
import list from "./list";

export default function* rootSaga() {
  yield all([authenticate(), list()]);
}
