import axios from "axios";
// import Cookies from "js-cookie";
import {
  LINKAPIS,
  LOADING,
  POST_CALC,
  HANDLE_ERROR_GLOBAL,
  USERS_LOGOUT,
  RESET_ERRORS,
  ERROR_MESSAGE_BACK_END

} from "./types";
import { history } from "../_helpers/history";
import { authHeader, authHeaderAPI } from "../_helpers/auth-header";
//////
export * from "./userAction";
/////// campaigns

export const Calculate = (amount) => {
  return dispatch => {
    axios
      .post(`${LINKAPIS}/api/General/Calculate?amount=${amount}`)
      .then(res => {
        console.log(res)
        dispatch({ type: POST_CALC, payload: res.data.Data })
        history.push("/SavedAmount")
      }
      )
      .catch(error => {
        dispatch(HandleCachError(error));
      });
  };
};




function HandleCachError(error) {
  return dispatch => {
    if (!error.response) {
      dispatch({ type: HANDLE_ERROR_GLOBAL });
      setTimeout(() => {
        dispatch({ type: RESET_ERRORS });
      }, 5000);
    } else if (error.response.status === 401) {
      // Cookies.remove("user");
      dispatch({ type: USERS_LOGOUT });
      history.push("/Login");
    } else if (error.response.data.message) {
      dispatch({
        type: ERROR_MESSAGE_BACK_END,
        payload: error.response.data.message
      });
      setTimeout(() => {
        dispatch({ type: RESET_ERRORS });
      }, 5000);
    } else {
      dispatch({ type: HANDLE_ERROR_GLOBAL });
      setTimeout(() => {
        dispatch({ type: RESET_ERRORS });
      }, 5000);
    }
  };
}

