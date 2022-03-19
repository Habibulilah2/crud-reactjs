import {
  GET_USER_LIST,
  GET_USER_DETAIL,
  POST_USER_CREATE,
  PUT_USER_EDIT,
} from "../actions/userActions";

let initialState = {
  title: "CRUD React JS",
  getUserList: false,
  errorUserList: false,
  getUserDetail: false,
  errorUserDetail: false,
  getResponDataUser: false,
  errorResponDataUser: false,
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_LIST:
      return {
        ...state,
        getUserList: action.payload.data,
        errorUserList: action.payload.errorMessage,
      };

    case GET_USER_DETAIL:
      return {
        ...state,
        getUserDetail: action.payload.data,
        errorUserDetail: action.payload.errorMessage,
      };

    case POST_USER_CREATE:
      return {
        ...state,
        getResponDataUser: action.payload.data,
        errorResponDataUser: action.payload.errorMessage,
      };

    case PUT_USER_EDIT:
      return {
        ...state,
        getResponDataUser: action.payload.data,
        errorResponDataUser: action.payload.errorMessage,
      };

    default:
      return state;
  }
};

export default users;
