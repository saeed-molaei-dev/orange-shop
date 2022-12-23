import {
  cAdListFailed,
  cAdListFetched,
  cAdListLoading,
} from "../../../constansts/constanst.Const";

export default function AdListReducer(
  adListState = { adLoading: false, adList: [], adError: "" },
  { type, payload },
) {
  switch (type) {
    case cAdListLoading:
      return payload;
    case cAdListFetched:
      return payload;
    case cAdListFailed:
      return payload;
    default:
      return adListState;
  }
}
