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
  CLEAR_AUTHOR_SINGLE_POST,
  SET_EDIT_POST,
  HANDLE_CHANGE,
  EDIT_POST_BEGIN,
  EDIT_POST_SUCCESS,
  EDIT_POST_ERROR,
  CLEAR_VALUES,
  DELETE_POST_BEGIN
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

  if (action.type === GET_PROFILE_BEGIN) {
    return { ...state, isLoading: true };
  }

  if (action.type === GET_PROFILE_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      user: action.payload.user,
    };
  }

  if (action.type === GET_AUTHOR_POST_BEGIN) {
    return { ...state, isLoading: true };
  }

  if (action.type === GET_AUTHOR_POST_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      authorpost: action.payload.authorpost,
    };
  }

  if (action.type === GET_AUTHOR_POST_ERROR) {
    return {
      ...state,
      isLoading: false,
    };
  }

  if (action.type === GET_AUTHOR_SINGLE_POST_BEGIN) {
    return { ...state, isLoading: true };
  }

  if (action.type === GET_AUTHOR_SINGLE_POST_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      authors_post: action.payload.singlepost,
    };
  }

  if (action.type === GET_AUTHOR_SINGLE_POST_ERROR) {
    return {
      ...state,
      isLoading: false,
    };
  }

  if (action.type === CLEAR_AUTHOR_SINGLE_POST) {
    return {
      ...state,
      isLoading: false,
      authors_post: [],
    };
  }

  if (action.type === UPDATE_USER_BEGIN) {
    return { ...state, isLoading: true };
  }

  if (action.type === UPDATE_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      token: action.payload.token,
      user: action.payload.user,
    };
  }

  if (action.type === UPDATE_USER_ERROR) {
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

  if (action.type === HANDLE_SUBMIT) {
    return {
      ...state,
      title: action.payload.title,
      summary: action.payload.summary,
      coverImg: action.payload.coverImg,
      content: action.payload.content,
    };
  }

  if (action.type === HANDLE_CHANGE) {
    return { ...state, [action.payload.name]: action.payload.value };
  }

  if (action.type === CREATE_POST_BEGIN) {
    return { ...state, isLoading: true, created:false };
  }

  if (action.type === CREATE_POST_SUCCESS) {
    return { ...state, isLoading: false, created:true };
  }

  if (action.type === CREATE_POST_ERROR) {
    return { ...state, isLoading: false, created:false };
  }

  if (action.type === EDIT_POST_BEGIN) {
    return { ...state, isLoading: true, edited:false };
  }

  if (action.type === EDIT_POST_SUCCESS) {
    return { ...state, isLoading: false, edited:true };
  }

  if (action.type === EDIT_POST_ERROR) {
    return { ...state, isLoading: false, edited:false };
  }

  
  if (action.type === CLEAR_VALUES) {
    const initialState = {
      isEditing: false,
      editJobId: "",
      position: "",
      company: "",
      title:"",
      summary:"",
      coverImg:"",
      content:"",
      postTags:[]
    };
    return { ...state, ...initialState };
  }

  if (action.type === DELETE_POST_BEGIN) {
    return { ...state, isLoading: true };
  }

  if (action.type === POST_ID) {
    return { ...state, postId: action.payload.postId };
  }

  if (action.type === SET_EDIT_POST) {
    const authorsPosts = state.authorpost.find(
      (post) => post._id === action.payload.id
    );
    const { _id, title, summary, coverImg, content, postTags } = authorsPosts;

    return {
      ...state,
      isEditing: true,
      editPostId: _id,
      title,
      summary,
      coverImg,
      content,
      postTags
    };
  }
  throw new Error(`no such action : ${action.type}`);
};

export default reducer;