/* eslint-disable no-unused-vars */
import React from "react";
import "./assets/global-styles/reset.scss";
import "./index.scss";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import AdList from "./components/ad/ad-list/AdList";
import Header from "./components/global/header/Header";
import RoutesConst from "./constansts/RoutesConst.Routes";
import { AdListStore } from "./store/ad/ad-list/AdList.Store";
import { mergedStore } from "./store/merged/Merged.Store";

const root = ReactDOM.createRoot(document.getElementById("OrangeShop"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <div className="orange-shop-wrapper">
        <Provider store={mergedStore}>
          <Header />
        </Provider>
        <RoutesConst />
      </div>
    </React.StrictMode>
  </BrowserRouter>,
);
