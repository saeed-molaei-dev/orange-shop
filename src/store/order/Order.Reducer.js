import { cOrderStoreData } from "../../constansts/constanst.Const";

export default function OrderReducer(
  orderState = {
    orderLoading: false,
    orderList: [],
    orderError: "",
    orderDetail: null,
  },
  { type, payload },
) {
  switch (type) {
    case cOrderStoreData:
      return payload;
    default:
      return orderState;
  }
}
function OrderStateLocalStorage() {
  let thisState = [];
  if (localStorage.getItem("initState")) {
    thisState = JSON.parse(localStorage.getItem("initState"));
  }
  return thisState;
}
