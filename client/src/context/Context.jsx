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
  TOGGLE_DELETE_MODAL_BTN,
  TOGGLE_DELETECR_MODAL_BTN,
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
  COMMENT_ID,
  COMMENT_REPLY_ID,
  SET_EDIT_POST,
  SET_EDIT_USER,
  EDIT_POST_BEGIN,
  EDIT_POST_SUCCESS,
  EDIT_POST_ERROR,
  EDIT_COMMENT_BEGIN,
  EDIT_COMMENT_SUCCESS,
  EDIT_COMMENT_ERROR,
  EDIT_COMMENT_REPLY_BEGIN,
  EDIT_COMMENT_REPLY_SUCCESS,
  EDIT_COMMENT_REPLY_ERROR,
  DELETE_POST_BEGIN,
  DELETE_COMMENT_BEGIN,
  DELETE_COMMENT_SUCCESS,
  DELETE_COMMENT_ERROR,
  DELETE_COMMENT_REPLY_BEGIN,
  DELETE_COMMENT_REPLY_SUCCESS,
  DELETE_COMMENT_REPLY_ERROR,
  CLEAR_VALUES,
  CLEAR_FILTERS,
  CHANGE_PAGE,
  GET_ALL_POST_BEGIN,
  GET_ALL_POST_SUCCESS,
  GET_ALL_POST_ERROR,
  GET_SINGLE_POST_BEGIN,
  GET_SINGLE_POST_SUCCESS,
  GET_SINGLE_POST_ERROR,
  GET_AUTHOR_PAGE_BEGIN,
  GET_AUTHOR_PAGE_SUCCESS,
  GET_AUTHOR_PAGE_ERROR,
  GET_TAGS_SEARCH_POST_BEGIN,
  GET_TAGS_SEARCH_POST_SUCCESS,
  GET_TAGS_SEARCH_POST_ERROR,
  POST_LIKES,
  POST_DISLIKES,
  COMMENT_LIKES,
  COMMENT_DISLIKES,
  COMMENT_REPLY_LIKES,
  COMMENT_REPLY_DISLIKES,
  TOGGLE_LIKE_BTN,
  TOGGLE_DISLIKE_BTN,
  TOGGLE_COMMENT_LIKE_BTN,
  TOGGLE_COMMENT_DISLIKE_BTN,
  TOGGLE_SAVE_BTN,
  CREATE_COMMENT_BEGIN,
  CREATE_COMMENT_SUCCESS,
  CREATE_COMMENT_ERROR,
  CREATE_COMMENT_REPLY_BEGIN,
  CREATE_COMMENT_REPLY_SUCCESS,
  CREATE_COMMENT_REPLY_ERROR,
  GET_COMMENT_BEGIN,
  GET_COMMENT_SUCCESS,
  GET_COMMENT_ERROR,
} from "./action";

const user = localStorage.getItem("user");
const token = localStorage.getItem("userToken");
const post_id = localStorage.getItem("post_id");

const initialState = {
  isLoading: false,
  formLoading: false,
  commentsReplyformLoading: false,
  commentsLoading: false,
  editCommentLoading: false,
  editCommentReplyLoading: false,
  showSidebar: false,
  showDeleteModal: false,
  showDeleteCrModal: false,
  dashNav: false,
  like: false,
  dislike: false,
  commentLike: false,
  commentDislike: false,
  save: false,
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
  authors_post: [],
  numOfPages: 1,
  totalPosts: 0,
  page: 1,
  search: "",
  SearchCategory: "all",
  sort: "",
  allPosts: [],
  post: [],
  GauthorPosts: [],
  GauthorInfo: [],
  postLikes: [],
  postDisLikes: [],
  comments: [],
  commentreplies: [],
  commentId: [],
  editCommentId: "",
  editCommentReplyId: "",
  postComments: [],
  postCommentsReply: [],
  postCommentsLikes: [],
  postCommentsDisLikes: [],
  postCommentsReplyLikes: [],
  postCommentsReplyDisLikes: [],
  likeId: [],
  deleteCommentId: [],
  deleteCommentReplyId: [],
  Comment_Liked_Disliked_Id: [],
  CommentReply_Liked_Disliked_Id: [],
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

  //* toggle deleteCModal
  const toggleDeleteModal = (id) => {
    dispatch({ type: TOGGLE_DELETE_MODAL_BTN, payload: { id } });
  };

  //* toggle deleteCrModal
  const toggleDeleteCrModal = (id) => {
    dispatch({ type: TOGGLE_DELETECR_MODAL_BTN, payload: { id } });
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
      if (error.response.status === 401) {
        logoutUser();
      }
      dispatch({
        type: GET_AUTHOR_POST_ERROR,
      });
    }
  };

  const getTagSearchPost = async () => {
    const { search, SearchCategory, sort, page } = state;
    let url = `/tags?page=${page}&category=${SearchCategory}&search=${search}&sort=${sort}`;
    if (search) {
      url = url + `search=${search}`;
    }
    dispatch({ type: GET_TAGS_SEARCH_POST_BEGIN });
    try {
      const { data } = await authFetch.get(url, {
        credentials: "omit",
      });
      const { authorpost, totalPosts, numOfPages } = data;
      dispatch({
        type: GET_TAGS_SEARCH_POST_SUCCESS,
        payload: { authorpost, totalPosts, numOfPages },
      });
      dispatch({ type: CLEAR_VALUES });
    } catch (error) {
      if (error.response.status === 401) {
        logoutUser();
      }
      dispatch({
        type: GET_TAGS_SEARCH_POST_ERROR,
      });
    }
  };

  const setPostId = (postId) => {
    dispatch({ type: POST_ID, payload: { postId } });
    addPostIdToLocalStorage(postId);
  };

  const setCommentId = (commentId) => {
    dispatch({ type: COMMENT_ID, payload: { commentId } });
  };

  const setCommentReplyId = (commentReplyId) => {
    dispatch({ type: COMMENT_REPLY_ID, payload: { commentReplyId } });
  };

  //

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
      const { title, coverImg, content, postTags, category } = data;
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

  const getALLPost = async () => {
    // const { search, SearchCategory, sort, page } = state;
    // let url = `/author-post?page=${page}&category=${SearchCategory}&search=${search}&sort=${sort}`;
    // if (search) {
    //   url = url + `search=${search}`;
    // }
    // let url =
    const { allPosts } = state;
    if (allPosts.length === 0) {
      dispatch({ type: GET_ALL_POST_BEGIN });
      try {
        const { data } = await authFetch.get("/", {
          credentials: "omit",
        });
        const { allPosts } = data;
        dispatch({
          type: GET_ALL_POST_SUCCESS,
          payload: { allPosts },
        });
      } catch (error) {
        dispatch({
          type: GET_ALL_POST_ERROR,
        });
      }
    }
  };

  const getSinglePost = async (id) => {
    dispatch({ type: GET_SINGLE_POST_BEGIN });
    try {
      const { data } = await authFetch.get(`/post/${id}`, {
        credentials: "omit",
      });
      const { singlepost } = data;
      dispatch({
        type: GET_SINGLE_POST_SUCCESS,
        payload: { singlepost },
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: GET_SINGLE_POST_ERROR,
      });
    }
  };

  const getAuthorPage = async (id) => {
    dispatch({ type: GET_AUTHOR_PAGE_BEGIN });
    try {
      const { data } = await authFetch.get(`/author/${id}`, {
        credentials: "omit",
      });
      const { authorPosts, authorInfo } = data;
      dispatch({
        type: GET_AUTHOR_PAGE_SUCCESS,
        payload: { authorPosts, authorInfo },
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: GET_AUTHOR_PAGE_ERROR,
      });
    }
  };

  const likePost = async (id) => {
    try {
      const { data } = await authFetch.put(`/like/${id}`);
      const { like_dislike_Post } = data;
      dispatch({
        type: POST_LIKES,
        payload: { like_dislike_Post },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const unLikePost = async (id) => {
    try {
      const { data } = await authFetch.put(`/unlike/${id}`);
      const { like_dislike_Post } = data;
      dispatch({
        type: POST_LIKES,
        payload: { like_dislike_Post },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const dislikePost = async (id) => {
    try {
      const { data } = await authFetch.put(`/dislike/${id}`);
      const { like_dislike_Post } = data;
      dispatch({
        type: POST_DISLIKES,
        payload: { like_dislike_Post },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const disunLikePost = async (id) => {
    try {
      const { data } = await authFetch.put(`/disunlike/${id}`);
      const { like_dislike_Post } = data;
      dispatch({
        type: POST_DISLIKES,
        payload: { like_dislike_Post },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const toggleLikeBtn = () => {
    dispatch({ type: TOGGLE_LIKE_BTN });
  };

  const toggleDisLikeBtn = () => {
    dispatch({ type: TOGGLE_DISLIKE_BTN });
  };

  const createComment = async (data) => {
    dispatch({ type: CREATE_COMMENT_BEGIN });
    try {
      const { userId, postId, content } = data;
      await authFetch.post("/createcomment", {
        userId,
        postId,
        content,
      });

      dispatch({ type: CREATE_COMMENT_SUCCESS });
    } catch (error) {
      if (error.response.status === 401) {
        return;
      }
      console.log(error);
      toast.error(error.response.data.msg);
      dispatch({
        type: CREATE_COMMENT_ERROR,
      });
    }
  };

  const createCommentReply = async (data) => {
    dispatch({ type: CREATE_COMMENT_REPLY_BEGIN });
    try {
      const { postId, userId, commentId, Rcontent, parentCommentId } = data;
      await authFetch.put("/replycomment", {
        userId,
        commentId,
        Rcontent,
        parentCommentId,
      });

      dispatch({ type: CREATE_COMMENT_REPLY_SUCCESS });
    } catch (error) {
      if (error.response.status === 401) {
        return;
      }
      console.log(error);
      toast.error(error.response.data.msg);
      dispatch({
        type: CREATE_COMMENT_REPLY_ERROR,
      });
    }
  };

  const toggleCommentLikeBtn = () => {
    dispatch({ type: TOGGLE_COMMENT_LIKE_BTN });
  };

  const toggleCommentDisLikeBtn = () => {
    dispatch({ type: TOGGLE_COMMENT_DISLIKE_BTN });
  };

  const toggleSaveBtn = () => {
    dispatch({ type: TOGGLE_SAVE_BTN });
  };

  const savePost = async (id) => {
    try {
      const { data } = await authFetch.put(`/savepost/${id}`);
      const { save_Post } = data;
      // dispatch({
      //   type: SAVE_POST,
      //   payload: { save_Post },
      // });
    } catch (error) {
      console.log(error);
    }
  };

  const unsavePost = async (id) => {
    try {
      const { data } = await authFetch.put(`/unsavepost/${id}`);
      const { save_Post } = data;
      // dispatch({
      //   type: UNSAVE_POST,
      //   payload: { save_Post },
      // });
    } catch (error) {
      console.log(error);
    }
  };

  const getComments = async (id) => {
    dispatch({ type: GET_COMMENT_BEGIN });
    try {
      const { data } = await authFetch.get(`/getcomments/${id}`);
      const {
        like_dislike_comment,
        comments,
        commentsReply,
        commentLikes,
        commentDisLikes,
        commentReplyLikes,
        commentReplyDisLikes,
      } = data;
      dispatch({
        type: GET_COMMENT_SUCCESS,
        payload: {
          comments,
          commentsReply,
          commentLikes,
          commentDisLikes,
          like_dislike_comment,
          commentReplyLikes,
          commentReplyDisLikes,
        },
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: GET_COMMENT_ERROR,
      });
    }
  };

  const likeComment = async (id) => {
    try {
      const { data } = await authFetch.put(`/likecomment/${id}`);
      const { commentLikes, like_dislike_comment } = data;
      dispatch({
        type: COMMENT_LIKES,
        payload: { commentLikes, like_dislike_comment },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const unLikeComment = async (id) => {
    try {
      const { data } = await authFetch.put(`/unlikecomment/${id}`);
      const { commentLikes, like_dislike_comment } = data;
      dispatch({
        type: COMMENT_LIKES,
        payload: { commentLikes, like_dislike_comment },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const dislikeComment = async (id) => {
    try {
      const { data } = await authFetch.put(`/dislikecomment/${id}`);
      const { commentDisLikes, like_dislike_comment } = data;
      dispatch({
        type: COMMENT_DISLIKES,
        payload: { commentDisLikes, like_dislike_comment },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const unDislikeComment = async (id) => {
    try {
      const { data } = await authFetch.put(`/undislikecomment/${id}`);
      const { commentDisLikes, like_dislike_comment } = data;
      dispatch({
        type: COMMENT_DISLIKES,
        payload: { commentDisLikes, like_dislike_comment },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const likeCommentReply = async (id) => {
    try {
      const { data } = await authFetch.put(`/likecommentreply/${id}`);
      const { commentReplyLikes } = data;
      dispatch({
        type: COMMENT_REPLY_LIKES,
        payload: { commentReplyLikes },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const unLikeCommentReply = async (id) => {
    try {
      const { data } = await authFetch.put(`/unlikecommentreply/${id}`);
      const { commentReplyLikes } = data;
      dispatch({
        type: COMMENT_REPLY_LIKES,
        payload: { commentReplyLikes },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const dislikeCommentReply = async (id) => {
    try {
      const { data } = await authFetch.put(`/dislikecommentreply/${id}`);
      const { commentReplyDisLikes } = data;
      dispatch({
        type: COMMENT_REPLY_DISLIKES,
        payload: { commentReplyDisLikes },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const unDislikeCommentReply = async (id) => {
    try {
      const { data } = await authFetch.put(`/undislikecommentreply/${id}`);
      const { commentReplyDisLikes } = data;
      dispatch({
        type: COMMENT_REPLY_DISLIKES,
        payload: { commentReplyDisLikes },
      });
    } catch (error) {
      console.log(error);
    }
  };

  //  //$ edit comment
  const editComment = async (data) => {
    dispatch({ type: EDIT_COMMENT_BEGIN });
    const { editCommentId } = state;
    try {
      const { content } = data;
      await authFetch.patch(`/comment/${editCommentId}`, {
        content,
      });

      dispatch({ type: EDIT_COMMENT_SUCCESS });
      toast.success("Comment edited successfully!");
    } catch (error) {
      if (error.response.status === 401) {
        return;
      }
      toast.error(error.response.data.msg);
      dispatch({
        type: EDIT_COMMENT_ERROR,
      });
    }
  };

  // $ Delete Comment
  const deleteComment = async (id) => {
    dispatch({ type: DELETE_COMMENT_BEGIN });
    try {
      await authFetch.delete(`/comment/${id}`);
      dispatch({ type: DELETE_COMMENT_SUCCESS });
    } catch (error) {
      dispatch({ type: DELETE_COMMENT_ERROR });
      logoutUser();
    }
  };

  //  //$ edit comment reply
  const editCommentReply = async (data) => {
    dispatch({ type: EDIT_COMMENT_REPLY_BEGIN });
    const { editCommentReplyId } = state;
    try {
      const { repliedComment} = data;
      await authFetch.patch(`/commentreply/${editCommentReplyId}`, {
        repliedComment,
      });

      dispatch({ type: EDIT_COMMENT_REPLY_SUCCESS });
      toast.success("your reply edited successfully!");
    } catch (error) {
      if (error.response.status === 401) {
        return;
      }
      toast.error(error.response.data.msg);
      dispatch({
        type: EDIT_COMMENT_REPLY_ERROR,
      });
    }
  };

  // $ Delete Comment Reply
  const deleteCommentReply = async (id) => {
    dispatch({ type: DELETE_COMMENT_REPLY_BEGIN });
    try {
      await authFetch.delete(`/commentreply/${id}`);
      dispatch({ type: DELETE_COMMENT_REPLY_SUCCESS });
    } catch (error) {
      dispatch({ type: DELETE_COMMENT_REPLY_ERROR });
      logoutUser();
    }
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
        getTagSearchPost,
        getALLPost,
        getSinglePost,
        getAuthorPage,
        likePost,
        unLikePost,
        dislikePost,
        disunLikePost,
        toggleLikeBtn,
        toggleDisLikeBtn,
        toggleSaveBtn,
        savePost,
        unsavePost,
        createComment,
        createCommentReply,
        getComments,
        likeComment,
        unLikeComment,
        toggleCommentLikeBtn,
        toggleCommentDisLikeBtn,
        dislikeComment,
        unDislikeComment,

        likeCommentReply,
        unLikeCommentReply,
        dislikeCommentReply,
        unDislikeCommentReply,

        deleteComment,
        toggleDeleteModal,

        deleteCommentReply,
        toggleDeleteCrModal,
        editComment,
        setCommentId,
        setCommentReplyId,
        editCommentReply,
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
