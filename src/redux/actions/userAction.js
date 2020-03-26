import axios from "axios";
import { history } from "../_helpers/history";
import { authHeader, authHeaderWithFD, authHeaderAPI } from "../_helpers/auth-header";
// import Cookies from "js-cookie";

import {
  LINKAPIS,
  HANDLE_ERROR_GLOBAL,
  USERS_LOGOUT,
  RESET_ERRORS,
  LOADING,
  RESET_USER_ERROR
} from "./types";
export const userAction = {
  // Login,
  // Logout,
};

// function Register(user_name, user_email, password) {
//   return dispatch => {
//     axios
//       .post(`${LINKAPIS}/api/users`, {
//         user_name: user_name,
//         msisdn: false,
//         password: password,
//         email: user_email
//       }, { headers: authHeaderAPI() })
//       .then(res => {
//         if (res.data.status == 1) {
//           dispatch({ type: USER_REGISTER_SUCCESS, payload: res.data.data[0] });
//           dispatch({ type: USER_REGISTER_FAILURE, payload: false });

//           // console.log(res.data.data[0],"scjhsbchshsbckhsb")
//           // localStorage.setItem("user",JSON.stringify(res.data.data[0]))
//           // if(window.location.pathname.slice(1).split("/")[0]==="CreateCampaign"){

//           // }else{
//           //   history.push('/')
//           // }
//         } else if (res.data.status == 0) {
//           dispatch({ type: USER_REGISTER_FAILURE, payload: res.data.message });
//         } else {
//           dispatch({ type: HANDLE_ERROR_GLOBAL });
//         }
//       })

//       .catch(error => {
//         dispatch(HandleCachError(error));
//       });
//   };
// }

// function Login(user_email, password) {
//   return dispatch => {
//     axios
//       .post(`${LINKAPIS}/api/auth/login`, {
//         email: user_email,
//         password: password
//       }, { headers: authHeaderAPI() })
//       .then(res => {
//         if (res.data.status == 1) {
//           dispatch({ type: USERS_LOGIN_SUCCESS, payload: res.data.data[0] });
//           Cookies.set('user', res.data.data[0]);

//           if (window.location.pathname == "/Login") {
//             history.push("/");
//           }
//         } else if (res.data.status == 0) {
//           dispatch({ type: USERS_LOGIN_FAILURE, payload: res.data.message });
//         } else {
//           dispatch({ type: HANDLE_ERROR_GLOBAL });
//         }
//       })
//       .catch(error => {
//         dispatch(HandleCachError(error));
//       });
//   };
// }

// function Logout(x = "/") {
//   return dispatch => {
//     axios
//       .post(`${LINKAPIS}/api/users/logout`, { headers: authHeaderAPI() })
//       .then(res => {
//         Cookies.remove("user");
//         dispatch({ type: USERS_LOGOUT });
//         history.push(x);
//       })
//       .catch(
//         err => {
//           Cookies.remove("user");
//           dispatch({ type: USERS_LOGOUT });
//           history.push(x)
//         }
//       );
//   };
// }
// function HandleCachError(error) {
//   return dispatch => {
//     if (!error.response) {
//       dispatch({ type: HANDLE_ERROR_GLOBAL });
//       setTimeout(() => {
//         dispatch({ type: RESET_ERRORS });
//       }, 5000);
//     } else if (error.response.status === 401) {
//       Cookies.remove("user");
//       dispatch({ type: USERS_LOGOUT });
//       history.push("/Login");
//     } else if (error.response.data.message) {
//       dispatch({
//         type: ERROR_MESSAGE_BACK_END,
//         payload: error.response.data.message
//       });
//       setTimeout(() => {
//         dispatch({ type: RESET_ERRORS });
//       }, 5000);
//     } else {
//       dispatch({ type: HANDLE_ERROR_GLOBAL });
//       setTimeout(() => {
//         dispatch({ type: RESET_ERRORS });
//       }, 5000);
//     }
//   };
// }
