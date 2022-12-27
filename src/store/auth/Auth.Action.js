/* eslint-disable no-unused-vars */
import axios from "axios";
import {
  cUserUpdateState,
  cLocalStorageUser,
  cLocalStorageAddress,
} from "../../constansts/constanst.Const";
import { AddressInitState } from "./Auth.Reducer";

export function SignUp(props) {
  return async (dispatch, getState) => {
    const { userList } = getState().authState;
    dispatch({
      type: cUserUpdateState,
      payload: {
        userLoading: true,
        userList: userList,
        userError: "",
        userSignedUp: false,
        userProfileInfo: {},
      },
    });
    await axios
      .post("http://kzico.runflare.run/user/signup", {
        username: props.username,
        email: props.email,
        password: props.password,
        mobile: props.mobile,
      })
      .then((response) => {
        dispatch({
          type: cUserUpdateState,
          payload: {
            userLoading: false,
            userList: userList,
            userError: "",
            userSignedUp: true,
            userProfileInfo: {},
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: cUserUpdateState,
          payload: {
            userLoading: false,
            userList: userList,
            userError: error.message,
            userSignedUp: false,
            userProfileInfo: {},
          },
        });
      })
      .finally(() => {});
  };
}
export function Login(props) {
  return async (dispatch, getState) => {
    const { userList } = getState().authState;
    dispatch({
      type: cUserUpdateState,
      payload: {
        userLoading: true,
        userList: userList,
        userError: "",
        userSignedUp: false,
        userProfileInfo: {},
      },
    });
    await axios
      .post("http://kzico.runflare.run/user/login", {
        email: props.email,
        password: props.password,
      })
      .then((response) => {
        addToLocalStorage(response.data.user);
        dispatch({
          type: cUserUpdateState,
          payload: {
            userLoading: false,
            userList: response.data.user,
            userError: "",
            userSignedUp: false,
            userProfileInfo: {},
            userAddress: AddressInitState(),
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: cUserUpdateState,
          payload: {
            userLoading: false,
            userList: userList,
            userError: error.message,
            userSignedUp: false,
            userProfileInfo: {},
          },
        });
      })
      .finally(() => {});
  };
}
export function getProfile() {
  return async (dispatch, getState) => {
    const { userList, userAddress } = getState().authState;
    dispatch({
      type: cUserUpdateState,
      payload: {
        userLoading: true,
        userList: userList,
        userError: "",
        userSignedUp: false,
        userProfileInfo: {},
      },
    });
    await axios
      .get("http://kzico.runflare.run/user/profile", {
        headers: {
          authorization: "Bearer " + userList.token,
        },
      })
      .then((response) => {
        dispatch({
          type: cUserUpdateState,
          payload: {
            userLoading: false,
            userList: userList,
            userError: "",
            userSignedUp: true,
            userProfileInfo: response.data,
            userAddress: AddressInitState(),
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: cUserUpdateState,
          payload: {
            userLoading: false,
            userList: userList,
            userError: error.message,
            userSignedUp: false,
            userProfileInfo: {},
          },
        });
      })
      .finally(() => {});
  };
}
export function StoreAddress(props) {
  return async (dispatch, getState) => {
    const { userList } = getState().authState;
    SaveAddressToLocalStorage(props);
    dispatch({
      type: cUserUpdateState,
      payload: {
        userLoading: true,
        userList: userList,
        userError: "",
        userSignedUp: false,
        userAddress: props,
        userProfileInfo: {},
      },
    });
  };
}
export function Logout() {
  return async (dispatch, getState) => {
    DeleteUserLocalStorage();
    dispatch({
      type: cUserUpdateState,
      payload: {
        userLoading: false,
        userList: null,
        userError: "",
        userSignedUp: false,
        userProfileInfo: {},
      },
    });
  };
}

function addToLocalStorage(userList) {
  localStorage.setItem(cLocalStorageUser, JSON.stringify(userList));
}
function SaveAddressToLocalStorage(address) {
  localStorage.setItem(cLocalStorageAddress, JSON.stringify(address));
}
function DeleteUserLocalStorage() {
  localStorage.removeItem(cLocalStorageUser);
  localStorage.removeItem(cLocalStorageAddress);
}
