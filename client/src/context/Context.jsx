import React, { useReducer, createContext, useContext } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import reducer from "./reducer";
import {
  REGISTER_USER_BEGIN,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
} from "./action";

const initialState = {
  isLoading: false,
  user: null,
  token: null,
  alertText: "",
  alertType: "",
};

const Context = createContext({});

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const registerFn = async (userData) => {
    dispatch({ type: REGISTER_USER_BEGIN });
    try {
      const response = await axios.post(
        "http://localhost:3000/api/register",
        userData
      );
      console.log(response);
      const { user, token } = response.data;
      dispatch({
        type: REGISTER_USER_SUCCESS,
        payload: { user, token },
      });
    } catch (error) {
      console.log(error);
      // dispatch({
      //   type: REGISTER_USER_ERROR,
      //   payload: { msg: error.response.data },
      // });
    }
  };

  return (
    <Context.Provider
      value={{
        ...state,
        registerFn,
      }}
    >
      {children}
    </Context.Provider>
  );
};

const useAppContext = () => {
  return useContext(Context);
};

export { ContextProvider, useAppContext, initialState };
