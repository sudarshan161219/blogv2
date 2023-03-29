import {
  REGISTER_USER_BEGIN,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
} from "./action";

const reducer = (state, action) => {
  
  if (action.type === REGISTER_USER_BEGIN) {
    return { ...state, isLoading: true };
  }

  if (action.type === REGISTER_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      token: action.payload.token,
      user: action.payload.user,
      alertText: "User Created!,  Redirecting.....",
      alertType: "success",
    };
  }

  // if (action.type === REGISTER_USER_ERROR) {
  //   return {
  //     ...state,
  //     isLoading: false,
  //     alertText: action.payload.msg,
  //     alertType: "error",
  //   };
  // }

  throw new Error(`no such action : ${action.type}`);
};

export default reducer;
