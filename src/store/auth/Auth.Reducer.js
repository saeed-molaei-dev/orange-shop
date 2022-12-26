import {
  cUserUpdateState,
  cLocalStorageUser,
  cLocalStorageAddress,
} from "../../constansts/constanst.Const";

export default function AuthReducer(
  authState = {
    userLoading: false,
    userList: UserInitState(),
    userError: "",
    userSignedUp: false,
    userAddress: AddressInitState(),
    userProfileInfo: {},
  },
  { type, payload },
) {
  switch (type) {
    case cUserUpdateState:
      return payload;
    default:
      return authState;
  }
}
function UserInitState() {
  let initState = null;
  if (localStorage.getItem(cLocalStorageUser)) {
    initState = JSON.parse(localStorage.getItem(cLocalStorageUser));
  }
  return initState;
}
export function AddressInitState() {
  let initState = {
    city: null,
    address: null,
    postalCode: null,
    phone: null,
  };
  if (localStorage.getItem(cLocalStorageAddress)) {
    initState = JSON.parse(localStorage.getItem(cLocalStorageAddress));
  }
  return initState;
}
