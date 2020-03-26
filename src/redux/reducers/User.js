import {
  POST_CALC
} from "../actions/types";
// import cookies from "js-cookie";

// let user = cookies.getJSON('user');
let user;
const initialState = user
  ? {
    IsLoggedIn: true,
    user,

  }
  : {

  };

export default (state = initialState, action) => {
  switch (action.type) {

    case POST_CALC:
      return {
        ...state,
        calcRedult: action.payload
      };
    // case USER_REGISTER_SUCCESS:
    //   return {
    //     ...state,
    //     IsLoggedIn: false,
    //     user: action.payload
    //   };
    // case USER_REGISTER_FAILURE:
    //   return {
    //     ...state,
    //     errorMessageRegister: action.payload
    //   };
    // case USERS_LOGIN_SUCCESS:
    //   return {
    //     ...state,
    //     IsLoggedIn: true,
    //     user: action.payload
    //   };
    // case USERS_LOGIN_FAILURE:
    //   return {
    //     ...state,
    //     IsLoggedIn: false,
    //     errorMessage: action.payload
    //   };

    // case USERS_LOGOUT:
    //   return {
    //     IsLoggedIn: false,
    //     user: false
    //   };
    // case USER_VERIFY:
    //   return {
    //     ...state,
    //     IsLoggedIn: false,
    //     verify: action.payload
    //   };

    // case USER_VERIFYMESSAGE:
    //   return {
    //     ...state,
    //     verifyMessage: action.payload
    //   };
    // case DELETE_USER:
    //   return {
    //     ...state,
    //     IsLoggedIn: false,
    //     user: {}

    //   };

    default:
      return state;
  }
};
