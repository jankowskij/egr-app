import { combineReducers, legacy_createStore as createStore } from "redux";
import {loginReducer } from "./reducers/loginReducer";

let reducers = combineReducers({
  login: loginReducer,
});

let store = createStore(reducers);

export default store;