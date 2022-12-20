import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import AuthReducer from "./Auth.Reducer";

const reducers = combineReducers({ authState: AuthReducer });
const middleware = [thunk];
const InitState = {};
export const initStore = legacy_createStore(
  reducers,
  InitState,
  applyMiddleware(...middleware),
);
