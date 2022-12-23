import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import AdDetailReducer from "./adDetail.Reducer";

const reducers = combineReducers({ adDetailState: AdDetailReducer });
const middleware = [thunk];
const InitState = {};
export const AdDetailStore = legacy_createStore(
  reducers,
  InitState,
  applyMiddleware(...middleware),
);
