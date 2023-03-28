import { REGISTER_USER_BEGIN } from "./action";

const reducer = (state, action) => {
  if (action.type === REGISTER_USER_BEGIN) {
    return { ...state, isLoading: true };
  }

  throw new Error(`no such action : ${action.type}`);
};

export default reducer;
