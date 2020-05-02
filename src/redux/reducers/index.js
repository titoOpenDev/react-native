import { combineReducers } from "redux";

import authenticate from "./authenticate";
import list from "./list";

export default combineReducers({
  authenticate,
  list
});
