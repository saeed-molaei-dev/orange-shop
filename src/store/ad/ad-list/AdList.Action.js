import axios from "axios";
import {
  cAdListFailed,
  cAdListFetched,
  cAdListLoading,
} from "../../../constansts/constanst.Const";

export function GetAdList() {
  return async (dispatch, getState) => {
    dispatch({
      type: cAdListLoading,
      payload: { adLoading: true, adList: [], adError: "" },
    });
    await axios
      .get("http://kzico.runflare.run/product")
      .then((response) => {
        dispatch({
          type: cAdListFetched,
          payload: { adLoading: false, adList: response.data, adError: "" },
        });
      })
      .catch((error) => {
        dispatch({
          type: cAdListFailed,
          payload: { adLoading: false, adList: [], adError: error.message },
        });
      });
  };
}
