import axios from "axios";
import {
  cLocalStorageUser,
  cOrderStoreData,
} from "../../constansts/constanst.Const";

export default function GetOrders() {
  return async (dispatch, getState) => {
    dispatch({
      type: cOrderStoreData,
      payload: {
        orderLoading: true,
        orderList: [],
        orderError: "",
        orderDetail: null,
      },
    });
    await axios
      .get("http://kzico.runflare.run/order/", {
        headers: {
          authorization: "Bearer " + GetUserToken(),
        },
      })
      .then((response) => {
        dispatch({
          type: cOrderStoreData,
          payload: {
            orderLoading: false,
            orderList: response.data,
            orderError: "",
            orderDetail: null,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: cOrderStoreData,
          payload: {
            orderLoading: false,
            orderList: [],
            orderError: error.message,
            orderDetail: null,
          },
        });
      });
  };
}

export function GetOrderDetail(id) {
  return async (dispatch, getState) => {
    dispatch({
      type: cOrderStoreData,
      payload: {
        orderLoading: true,
        orderList: [],
        orderError: "",
        orderDetail: null,
      },
    });
    await axios
      .get("http://kzico.runflare.run/order/" + id, {
        headers: {
          authorization: "Bearer " + GetUserToken(),
        },
      })
      .then((response) => {

        console.log(response)
        dispatch({
          type: cOrderStoreData,
          payload: {
            orderLoading: false,
            orderList: [],
            orderError: "",
            orderDetail: response.data,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: cOrderStoreData,
          payload: {
            orderLoading: false,
            orderList: [],
            orderError: error.message,
            orderDetail: null,
          },
        });
      });
  };
}
function GetUserToken() {
  let user = JSON.parse(localStorage.getItem(cLocalStorageUser));
  return user.token;
}
