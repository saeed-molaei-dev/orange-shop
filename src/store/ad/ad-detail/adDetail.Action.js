import axios from "axios";
import {
  cAdDetailLoading,
  cAdDetailFetched,
  cAdDetailFailed,
} from "../../../constansts/constanst.Const";

export function GetAdDetail(id) {
  return async (dispatch, getState) => {
    dispatch({
      type: cAdDetailLoading,
      payload: { adDetailLoading: true, adDetailList: {}, adDetailError: "" },
    });
    await axios
      .get("http://kzico.runflare.run/product/" + id)
      .then((response) => {
        dispatch({
          type: cAdDetailFetched,
          payload: { adDetailLoading: false, adDetailList: response.data, adDetailError: "" },
        });
      })
      .catch((error) => {
        dispatch({
          type: cAdDetailFailed,
          payload: { adDetailLoading: false, adDetailList: {}, adDetailError: error.message },
        });
      });
  };
}
