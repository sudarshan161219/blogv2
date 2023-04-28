import React, { useReducer, createContext, useContext, useEffect } from "react";
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
  GET_PROFILE_BEGIN,
  GET_PROFILE_SUCCESS,
  UPDATE_USER_BEGIN,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_ERROR,
  HANDLE_SUBMIT,
  CREATE_POST_BEGIN,
  CREATE_POST_SUCCESS,
  CREATE_POST_ERROR,
  GET_AUTHOR_POST_BEGIN,
  GET_AUTHOR_POST_SUCCESS,
  GET_AUTHOR_POST_ERROR,
  GET_AUTHOR_SINGLE_POST_BEGIN,
  GET_AUTHOR_SINGLE_POST_SUCCESS,
  GET_AUTHOR_SINGLE_POST_ERROR,
  POST_ID,
} from "./action";

const user = localStorage.getItem("user");
const token = localStorage.getItem("userToken");

const initialState = {
  isLoading: false,
  showSidebar: false,
  dashNav: false,
  user: user ? JSON.parse(user) : null,
  token: token ? token : null,
  title: "",
  summary: "",
  coverImg: "",
  content: "",
  postId: "",
  authorpost: [],
  authors_post: [],
};

const Context = createContext({});

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // axios.defaults.headers['Authorization'] = `Bearer ${state.token}`

  const authFetch = axios.create({
    baseURL: "http://localhost:3000/api",
    headers: {
      Authorization: `Bearer ${state.token}`,
    },
  });

  authFetch.interceptors.request.use(
    (config) => {
      config.headers["Authorization"] = `Bearer ${state.token}`;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  authFetch.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response.status === 401) {
        logoutUser();
      }
    }
  );

  const addUserToLocalStorage = ({ user, token }) => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("userToken", token);
  };

  const removeUserFromLocalStorage = () => {
    localStorage.removeItem("user");
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

  const logoutUser = () => {
    dispatch({ type: LOGOUT_USER });
    removeUserFromLocalStorage();
  };

  const registerFn = async (userData) => {
    dispatch({ type: REGISTER_USER_BEGIN });
    try {
      const response = await axios.post(
        "http://localhost:3000/api/register",
        userData
      );

      // authFetch
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
      const response = await authFetch.post(
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
    dispatch({ type: UPDATE_USER_BEGIN });
    try {
      const { data } = await authFetch.patch("/updateUser", updateData);
      const { user, token } = data;

      dispatch({
        type: UPDATE_USER_SUCCESS,
        payload: { user, token },
      });
      toast.success("User Profile, Updated!");
      addUserToLocalStorage({ user, token });
    } catch (error) {
      if (error.response.status !== 401) {
        toast.error(error.response.data.msg);
        dispatch({
          type: UPDATE_USER_ERROR,
        });
      }
    }
  };

  const getProfile = async () => {
    dispatch({ type: GET_PROFILE_BEGIN });
    try {
      const { data } = await authFetch.get("/profile");
      const { user } = data;
      dispatch({
        type: GET_PROFILE_SUCCESS,
        payload: { user },
      });
    } catch (error) {
      console.log(error);
      if (error.response.status === 401) {
        logoutUser();
      }
    }
  };

  const getAuthorPost = async () => {
    dispatch({ type: GET_AUTHOR_POST_BEGIN });
    try {
      const { data } = await authFetch.get("/author-post");
      const { authorpost } = data;
      dispatch({
        type: GET_AUTHOR_POST_SUCCESS,
        payload: { authorpost },
      });
    } catch (error) {
      console.log(error);
      if (error.response.status === 401) {
        logoutUser();
      }
      dispatch({
        type: GET_AUTHOR_POST_ERROR,
      });
    }
  };

  const setPostId = (postId) => {
    dispatch({ type: POST_ID, payload: { postId } });
  };

  const getSingleAuthorPost = async () => {
    dispatch({ type: GET_AUTHOR_SINGLE_POST_BEGIN });
    const { postId } = state;
    try {
      const { data } = await authFetch.get(`/single-post/${postId}`);
      const { singlepost } = data;
      dispatch({
        type: GET_AUTHOR_SINGLE_POST_SUCCESS,
        payload: { singlepost },
      });
    } catch (error) {
      console.log(error);
      // if (error.response.status === 401) {
      //   logoutUser();
      // }
      dispatch({
        type: GET_AUTHOR_SINGLE_POST_ERROR,
      });
    }
  };

  const handleContextSubmit = ({ title, summary, coverImg, content }) => {
    dispatch({
      type: HANDLE_SUBMIT,
      payload: { title, summary, coverImg, content },
    });
  };

  const createPost = async () => {
    dispatch({ type: CREATE_POST_BEGIN });
    try {
      const { title, summary, coverImg, content } = state;
      await authFetch.post("/createpost", {
        title,
        summary,
        coverImg,
        content,
      });

      dispatch({ type: CREATE_POST_SUCCESS });
      toast.success("Post successfully created!");
    } catch (error) {
      if (error.response.status === 401) {
        toast.error(error.response.data.msg);
        dispatch({
          type: CREATE_POST_ERROR,
        });
        return;
      }
    }
  };

  return (
    <Context.Provider
      value={{
        ...state,
        toggleSidebar,
        toggleDashNav,
        registerFn,
        loginFn,
        getProfile,
        logoutUser,
        updateUserFn,
        createPost,
        handleContextSubmit,
        getAuthorPost,
        setPostId,
        getSingleAuthorPost,
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
