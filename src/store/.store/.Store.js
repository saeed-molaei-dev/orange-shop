import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import InitReducer from "./.Reducer";

const reducers = combineReducers({ initState: InitReducer });
const middleware = [thunk];
const thisState = {};
export const initStore = legacy_createStore(
  reducers,
  thisState,
  applyMiddleware(...middleware),
);
