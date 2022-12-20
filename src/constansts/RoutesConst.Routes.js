import React from "react";
import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";
import AdDetail from "../components/ad/ad-detail/AdDetail";
import AdList from "../components/ad/ad-list/AdList";
import CartPage from "../components/cart/cart-page/CartPage";
import LoginPage from "../components/auth/login-page/LoginPage";
import SignUpPage from "../components/auth/sign-up-page/SignUpPage";
import { AdListStore } from "../store/ad/ad-list/AdList.Store";
import { mergedStore } from "../store/merged/Merged.Store";
import CartAddress from "../components/cart/cart-address/CartAddress";
import CartCheckOut from "../components/cart/cart-checkout/CartCheckOut";
import ProfilePage from "../components/profile/profile-page/ProfilePage";
import OrdersPage from "../components/order/order-page/OrdersPage";
import { orderStore } from "../store/order/Order.Store";
import OrderDetail from "../components/order/order-detail/OrderDetail";
import SettingPage from "../components/setting/setting-page/SettingPage";

function RoutesConst() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Provider store={AdListStore}>
            <AdList />
          </Provider>
        }
      />
      <Route
        path="/ad-detail/:id"
        element={
          <Provider store={mergedStore}>
            <AdDetail />
          </Provider>
        }
      />
      <Route
        path="/cart"
        element={
          <Provider store={mergedStore}>
            <CartPage />
          </Provider>
        }
      />
      <Route
        path="/login"
        element={
          <Provider store={mergedStore}>
            <LoginPage />
          </Provider>
        }
      />
      <Route
        path="/sign-up"
        element={
          <Provider store={mergedStore}>
            <SignUpPage />
          </Provider>
        }
      />
      <Route
        path="/address"
        element={
          <Provider store={mergedStore}>
            <CartAddress />
          </Provider>
        }
      />
      <Route
        path="/checkout"
        element={
          <Provider store={mergedStore}>
            <CartCheckOut />
          </Provider>
        }
      />
      <Route
        path="/profile"
        element={
          <Provider store={mergedStore}>
            <ProfilePage />
          </Provider>
        }
      />
      <Route
        path="/orders"
        element={
          <Provider store={orderStore}>
            <OrdersPage />
          </Provider>
        }
      />
      <Route
        path="/order/:id"
        element={
          <Provider store={orderStore}>
            <OrderDetail />
          </Provider>
        }
      />
      <Route
        path="/setting"
        element={
          <Provider store={mergedStore}>
            <SettingPage />
          </Provider>
        }
      />
    </Routes>
  );
}

export default RoutesConst;
