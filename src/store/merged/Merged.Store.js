import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import CartReducer from "../cart/cart.Reducer";
import AdDetailReducer from "../ad/ad-detail/adDetail.Reducer";
import AuthReducer from "../auth/Auth.Reducer";

const reducers = combineReducers({
  cartState: CartReducer,
  adDetailState: AdDetailReducer,
  authState: AuthReducer,
});
const middleware = [thunk];
const InitState = {};
export const mergedStore = legacy_createStore(
  reducers,
  InitState,
  applyMiddleware(...middleware),
);
