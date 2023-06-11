import React, { useReducer, createContext, useContext, useEffect } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import reducer from "./reducer";

import {
  REGISTER_USER_BEGIN,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  LOGIN_USER_ERROR,
  LOGOUT_USER,
  HANDLE_CHANGE,
  HANDLE_SELECT_CHANGE,
  HANDLE_SELECT_SORT_CHANGE,
  TOGGLE_SIDEBAR,
  TOGGLE_DASHNAV,
  GET_PROFILE_BEGIN,
  GET_PROFILE_SUCCESS,
  UPDATE_USER_BEGIN,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_ERROR,
  CREATE_POST_BEGIN,
  CREATE_POST_SUCCESS,
  CREATE_POST_ERROR,
  GET_AUTHOR_POST_BEGIN,
  GET_AUTHOR_POST_SUCCESS,
  GET_AUTHOR_POST_ERROR,
  GET_AUTHOR_SINGLE_POST_BEGIN,
  GET_AUTHOR_SINGLE_POST_SUCCESS,
  GET_AUTHOR_SINGLE_POST_ERROR,
  CLEAR_AUTHOR_SINGLE_POST,
  POST_ID,
  SET_EDIT_POST,
  SET_EDIT_USER,
  EDIT_POST_BEGIN,
  EDIT_POST_SUCCESS,
  EDIT_POST_ERROR,
  DELETE_POST_BEGIN,
  CLEAR_VALUES,
  CLEAR_FILTERS,
  CHANGE_PAGE,
} from "./action";

const user = localStorage.getItem("user");
const token = localStorage.getItem("userToken");
const post_id = localStorage.getItem("post_id");

const initialState = {
  isLoading: false,
  showSidebar: false,
  dashNav: false,
  user: user ? JSON.parse(user) : null,
  token: token ? token : null,
  name: "",
  userInfo: "",
  instagram: "",
  twitter: "",
  linkden: "",
  personalLink: "",
  userImg: "",
  title: "",
  coverImg: "",
  content: "",
  category: "",
  postTags: [],
  isEditing: false,
  edited: false,
  created: false,
  postId: post_id ? post_id : null,
  editPostId: "",
  authorpost: [],
  authors_post: [] ,
  numOfPages: 1,
  totalPosts: 0,
  page: 1,
  search: "",
  SearchCategory: "all",
  sort: "",
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

  const addPostIdToLocalStorage = (Id) => {
    localStorage.setItem("post_id", Id);
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

  //* global handle change
  const handleChange = ({ name, value }) => {
    dispatch({ type: HANDLE_CHANGE, payload: { name, value } });
  };

  const handleSelectChange = (value) => {
    dispatch({ type: HANDLE_SELECT_CHANGE, payload: { value } });
  };

  const handleSortSelectChange = (value) => {
    dispatch({ type: HANDLE_SELECT_SORT_CHANGE, payload: { value } });
  };

  const clearFilters = () => {
    dispatch({ type: CLEAR_FILTERS });
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
      const { data } = await axios.post(
        "http://localhost:3000/api/login",
        userData
      );
      const { user, token } = data;
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
      const {
        name,
        userInfo,
        instagram,
        twitter,
        linkden,
        personalLink,
        userImg,
      } = updateData;
      const { data } = await authFetch.patch("/updateUser", {
        name,
        userInfo,
        instagram,
        twitter,
        linkden,
        personalLink,
        userImg,
      });
      const { user, token } = data;
      dispatch({
        type: UPDATE_USER_SUCCESS,
        payload: { user, token },
      });
      addUserToLocalStorage({ user, token });
      toast.success("User Profile, Updated!");
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
      dispatch({ type: CLEAR_VALUES });
    } catch (error) {
      console.log(error);
      if (error.response.status === 401) {
        logoutUser();
      }
    }
  };

  const getAuthorPost = async () => {
    const { search, SearchCategory, sort, page } = state;
    let url = `/author-post?page=${page}&category=${SearchCategory}&search=${search}&sort=${sort}`;
    if (search) {
      url = url + `search=${search}`;
    }
    dispatch({ type: GET_AUTHOR_POST_BEGIN });
    try {
      const { data } = await authFetch.get(url, {
        credentials: "omit",
      });
      const { authorpost, totalPosts, numOfPages } = data;
      dispatch({
        type: GET_AUTHOR_POST_SUCCESS,
        payload: { authorpost, totalPosts, numOfPages },
      });
      dispatch({ type: CLEAR_VALUES });
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
    addPostIdToLocalStorage(postId);
  };

  const getSingleAuthorPost = async (id) => {
    dispatch({ type: GET_AUTHOR_SINGLE_POST_BEGIN });
    try {
      const { data } = await authFetch.get(`/single-post/${id}`, {
        credentials: "omit",
      });
      const { singlepost } = data;
      dispatch({
        type: GET_AUTHOR_SINGLE_POST_SUCCESS,
        payload: { singlepost },
      });
      dispatch({ type: CLEAR_VALUES });
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

  const createPost = async (data) => {
    dispatch({ type: CREATE_POST_BEGIN });
    try {
      const { title, coverImg, content, postTags, category } = data;
      await authFetch.post("/createpost", {
        title,
        coverImg,
        content,
        postTags,
        category,
      });

      dispatch({ type: CREATE_POST_SUCCESS });
      toast.success("Post successfully created!");
    } catch (error) {
      if (error.response.status === 401) {
        return;
      }
      console.log(error);
      toast.error(error.response.data.msg);
      dispatch({
        type: CREATE_POST_ERROR,
      });
    }
  };

  const clearAuthorSinglePost = () => {
    dispatch({ type: CLEAR_AUTHOR_SINGLE_POST });
  };

  const setEditPost = (id) => {
    dispatch({ type: SET_EDIT_POST, payload: { id } });
  };

  const setEditUser = () => {
    dispatch({ type: SET_EDIT_USER });
  };

  //$ edit post
  const editPost = async (data) => {
    dispatch({ type: EDIT_POST_BEGIN });
    const { editPostId } = state;
    try {
      const { title,  coverImg, content, postTags, category } = data;
      await authFetch.patch(`/ud/${editPostId}`, {
        title,
        coverImg,
        content,
        postTags,
        category,
      });

      dispatch({ type: EDIT_POST_SUCCESS });
      toast.success("Post edited successfully!");
    } catch (error) {
      if (error.response.status === 401) {
        return;
      }
      toast.error(error.response.data.msg);
      dispatch({
        type: EDIT_POST_ERROR,
      });
    }
  };

  // $ Delete Post
  const deletePost = async (id) => {
    dispatch({ type: DELETE_POST_BEGIN });
    try {
      await authFetch.delete(`/ud/${id}`);
      getAuthorPost();
    } catch (error) {
      logoutUser();
    }
  };

  const changePage = (page) => {
    dispatch({ type: CHANGE_PAGE, payload: { page } });
  };

  return (
    <Context.Provider
      value={{
        ...state,
        toggleSidebar,
        toggleDashNav,
        handleChange,
        handleSelectChange,
        handleSortSelectChange,
        registerFn,
        loginFn,
        getProfile,
        logoutUser,
        updateUserFn,
        createPost,
        getAuthorPost,
        setPostId,
        getSingleAuthorPost,
        clearAuthorSinglePost,
        setEditPost,
        setEditUser,
        editPost,
        deletePost,
        clearFilters,
        changePage,
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
