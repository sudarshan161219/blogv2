import React, { useReducer, createContext, useContext } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import reducer from "./reducer";
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
  UPDATE_USER_BEGIN,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_ERROR,
} from "./action";

const user = localStorage.getItem("userInfo");
const token = localStorage.getItem("UserToken");

const initialState = {
  isLoading: false,
  showSidebar: false,
  dashNav:false,
  user: user ? JSON.parse(user) : null,
  token: token ? token : null,
  alertText: "",
  alertType: "",
};

const Context = createContext({});

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addUserToLocalStorage = ({ user, token }) => {
    localStorage.setItem("userInfo", JSON.stringify(user));
    localStorage.setItem("userToken", token);
  };

  const removeUserFromLocalStorage = () => {
    localStorage.removeItem("userInfo");
    localStorage.removeItem("userToken");
  };


    //* toggle sidebar
    const toggleSidebar = () => {
      dispatch({ type: TOGGLE_SIDEBAR });
    };

        //* toggle dashnav
        const toggleDashNav = () => {
          dispatch({ type: TOGGLE_DASHNAV });
        };

  const registerFn = async (userData) => {
    dispatch({ type: REGISTER_USER_BEGIN });
    try {
      const response = await axios.post(
        "http://localhost:3000/api/register",
        userData
      );
      const { user, token } = response.data;
      dispatch({
        type: REGISTER_USER_SUCCESS,
        payload: { user, token },
      });
      toast.success("User Created!,  Redirecting.....");
    } catch (error) {
      toast.error(error.response.data.msg);
      dispatch({
        type: REGISTER_USER_ERROR,
      });
    }
  };

  const loginFn = async (userData) => {
    dispatch({ type: REGISTER_USER_BEGIN });
    try {
      const response = await axios.post(
        "http://localhost:3000/api/login",
        userData
      );
      const { user, token } = response.data;
      dispatch({
        type: REGISTER_USER_SUCCESS,
        payload: { user, token },
      });
      toast.success("Login Successful!,  Redirecting.....");
      addUserToLocalStorage({ user, token });
    } catch (error) {
      toast.error(error.response.data.msg);
      dispatch({
        type: LOGIN_USER_ERROR,
      });
    }
  };

  const updateUserFn = async (updateData) => {

  }

  const logoutUser = () => {
    dispatch({ type: LOGOUT_USER });
    removeUserFromLocalStorage();
  };

  return (
    <Context.Provider
      value={{
        ...state,
        toggleSidebar,
        toggleDashNav,
        registerFn,
        loginFn,
        logoutUser
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
