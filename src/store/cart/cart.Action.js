import {
  cCartAddTo,
  cCartDelete,
  cCartMinus,
  cCartPlus,
  cLocalStorageCartList,
  cLocalStorageTotals,
} from "../../constansts/constanst.Const";

export default function AddToCart(productData) {
  return async (dispatch, getState) => {
    const { cartState } = getState();
    if (
      isDuplicate(
        cartState.cartList,
        productData._id || productData.countInStock === 0,
      )
    ) {
      return;
    }
    productData.qty = 1;
    cartState.cartList.push(productData);
    AddToLocalStorage(cartState.cartList);
    dispatch({
      type: cCartAddTo,
      payload: {
        cartLoading: false,
        cartList: cartState.cartList,
        cartError: "",
        cartTotals: makeTotals(cartState.cartList),
      },
    });
  };
}
export function IncreaseQty(id) {
  return async (dispatch, getState) => {
    const { cartState } = getState();
    cartState.cartList.forEach((data) => {
      if (data._id === id && data.qty < data.countInStock) {
        ++data.qty;
      }
    });
    AddToLocalStorage(cartState.cartList);
    dispatch({
      type: cCartPlus,
      payload: {
        cartLoading: false,
        cartList: cartState.cartList,
        cartError: "",
        cartTotals: makeTotals(cartState.cartList),
      },
    });
  };
}
export function DecreaseQty(id) {
  return async (dispatch, getState) => {
    const { cartState } = getState();
    cartState.cartList.forEach((data) => {
      if (data._id === id && data.qty > 1) {
        --data.qty;
      }
    });
    AddToLocalStorage(cartState.cartList);
    dispatch({
      type: cCartMinus,
      payload: {
        cartLoading: false,
        cartList: cartState.cartList,
        cartError: "",
        cartTotals: makeTotals(cartState.cartList),
      },
    });
  };
}
export function DeleteItem(id) {
  return async (dispatch, getState) => {
    const { cartState } = getState();
    cartState.cartList.forEach((data, index) => {
      if (data._id === id) {
        cartState.cartList.splice(index, 1);
      }
    });
    AddToLocalStorage(cartState.cartList);
    dispatch({
      type: cCartDelete,
      payload: {
        cartLoading: false,
        cartList: cartState.cartList,
        cartError: "",
        cartTotals: makeTotals(cartState.cartList),
      },
    });
  };
}

export function isDuplicate(cartList, productId) {
  let productDuplicate = false;
  cartList.forEach((cartProduct) => {
    if (cartProduct._id === productId) {
      productDuplicate = true;
    }
  });
  return productDuplicate;
}
function AddToLocalStorage(cartList) {
  localStorage.setItem(cLocalStorageCartList, JSON.stringify(cartList));
}
function makeTotals(cartList) {
  let total = { totalCount: 0, totalPrice: 0 };
  cartList.forEach((data) => {
    total.totalCount += data.qty;
    total.totalPrice += data.price * data.qty;
  });
  saveTotals(total);
  return total;
}

function saveTotals(totals) {
  localStorage.setItem(cLocalStorageTotals, JSON.stringify(totals));
}
