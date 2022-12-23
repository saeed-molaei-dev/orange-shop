import {
  cAdDetailFailed,
  cAdDetailFetched,
  cAdDetailLoading,
} from "../../../constansts/constanst.Const";

export default function AdDetailReducer(
  adDetailState = { adDetailLoading: false, adDetailList: {}, adDetailError: "" },
  { type, payload },
) {
  switch (type) {
    case cAdDetailLoading:
      return payload;
    case cAdDetailFetched:
      return payload;
    case cAdDetailFailed:
      return payload;
    default:
      return adDetailState;
  }
}
