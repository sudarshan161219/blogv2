import React, { useReducer, createContext, useState, useContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import reducer from "./reducer";
import { REGISTER_USER_BEGIN } from "./action";

const initialState = {
  isLoading: false,
  Cvisible: false,
  visible: false,
  togglePass: "password",
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

      if (response.status === 201) {
        toast.success(`you have successfully created your account `, {
          position: "top-right",
          autoClose: 3026,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        // function navigate() {
        //   window.location.href = "/login"
        // }
        // setTimeout(navigate, 3000)
      } else {
        toast.error(`Opps!!, username  or email is already in use`, {
          position: "top-right",
          autoClose: 3026,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    } catch (error) {
      console.log(error);
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
