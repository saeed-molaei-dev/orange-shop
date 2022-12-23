import {
  cCartAddTo,
  cCartDelete,
  cCartMinus,
  cCartPlus,
  cLocalStorageCartList,
  cLocalStorageTotals,
} from "../../constansts/constanst.Const";

export default function CartReducer(
  cartState = {
    cartLoading: false,
    cartList: CartListInitState(),
    cartError: "",
    cartTotals: totalsInitState(),
  },
  { type, payload },
) {
  switch (type) {
    case cCartAddTo:
      return payload;
    case cCartPlus:
      return payload;
    case cCartMinus:
      return payload;
    case cCartDelete:
      return payload;
    default:
      return cartState;
  }
}
function CartListInitState() {
  let initState = [];
  if (localStorage.getItem(cLocalStorageCartList)) {
    initState = JSON.parse(localStorage.getItem(cLocalStorageCartList));
  }
  return initState;
}

function totalsInitState() {
  let initState = { totalCount: 0, totalPrice: 0 };
  let storedTotals = JSON.parse(localStorage.getItem(cLocalStorageTotals));
  if (storedTotals) {
    initState = storedTotals;
  } 
  return initState;
}
