import {
  REGISTER_USER_BEGIN,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  LOGIN_USER_BEGIN,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  LOGOUT_USER,
  TOGGLE_SIDEBAR,
  TOGGLE_DASHNAV,
} from "./action";
import { initialState } from "./Context";
const reducer = (state, action) => {
  
  if (action.type === TOGGLE_SIDEBAR) {
    return { ...state, showSidebar: !state.showSidebar };
  }

  if (action.type === TOGGLE_DASHNAV) {
    return { ...state, dashNav: !state.dashNav };
  }

  if (action.type === REGISTER_USER_BEGIN) {
    return { ...state, isLoading: true };
  }

  if (action.type === REGISTER_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      token: action.payload.token,
      user: action.payload.user,
    };
  }

  if (action.type === REGISTER_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
    };
  }

  if (action.type === LOGIN_USER_BEGIN) {
    return { ...state, isLoading: true };
  }

  if (action.type === LOGIN_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      token: action.payload.token,
      user: action.payload.user,
    };
  }

  if (action.type === LOGIN_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
    };
  }

  if (action.type === LOGOUT_USER) {
    return {
      ...initialState,
      token: null,
      user: null,
    };
  }

  throw new Error(`no such action : ${action.type}`);
};

export default reducer;
