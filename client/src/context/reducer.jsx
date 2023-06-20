import {
  REGISTER_USER_BEGIN,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  LOGIN_USER_BEGIN,
  LOGIN_USER_SUCCESS,
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
  SET_EDIT_USER,
  EDIT_POST_BEGIN,
  EDIT_POST_SUCCESS,
  EDIT_POST_ERROR,
  CLEAR_VALUES,
  DELETE_POST_BEGIN,
  CLEAR_FILTERS,
  CHANGE_PAGE,
  GET_TAGS_SEARCH_POST_BEGIN,
  GET_TAGS_SEARCH_POST_SUCCESS,
  GET_TAGS_SEARCH_POST_ERROR,
  GET_ALL_POST_BEGIN,
  GET_ALL_POST_SUCCESS,
  GET_ALL_POST_ERROR,
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
      editUser: action.payload.editUser,
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
      totalPosts: action.payload.totalPosts,
      numOfPages: action.payload.numOfPages,
    };
  }

  if (action.type === GET_AUTHOR_POST_ERROR) {
    return {
      ...state,
      isLoading: false,
    };
  }


  if (action.type === GET_ALL_POST_BEGIN) {
    return { ...state, isLoading: true };
  }

  if (action.type === GET_ALL_POST_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      allPosts: action.payload.allPosts,
      // totalPosts: action.payload.totalPosts,
      // numOfPages: action.payload.numOfPages,
    };
  }

  if (action.type === GET_ALL_POST_ERROR) {
    return {
      ...state,
      isLoading: false,
    };
  }

  if (action.type === GET_TAGS_SEARCH_POST_BEGIN) {
    return { ...state, isLoading: true };
  }

  if (action.type === GET_TAGS_SEARCH_POST_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      authorpost: action.payload.authorpost,
      totalPosts: action.payload.totalPosts,
      numOfPages: action.payload.numOfPages,
    };
  }

  if (action.type === GET_TAGS_SEARCH_POST_ERROR) {
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
      edited: true,
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

  if (action.type === HANDLE_SELECT_CHANGE) {
    return { ...state, SearchCategory: action.payload.value };
  }

  if (action.type === HANDLE_SELECT_SORT_CHANGE) {
    return { ...state, sort: action.payload.value };
  }

  if (action.type === CLEAR_FILTERS) {
    return {
      ...state,
      search: "",
      SearchCategory: "all",
      sort: "",
    };
  }

  if (action.type === CREATE_POST_BEGIN) {
    return { ...state, isLoading: true };
  }

  if (action.type === CREATE_POST_SUCCESS) {
    return { ...state, isLoading: false, created: true };
  }

  if (action.type === CREATE_POST_ERROR) {
    return { ...state, isLoading: false, created: false };
  }

  if (action.type === EDIT_POST_BEGIN) {
    return { ...state, isLoading: true };
  }

  if (action.type === EDIT_POST_SUCCESS) {
    return { ...state, isLoading: false, edited: true };
  }

  if (action.type === EDIT_POST_ERROR) {
    return { ...state, isLoading: false };
  }

  if (action.type === CLEAR_VALUES) {
    const initialState = {
      isEditing: false,
      editJobId: "",
      position: "",
      company: "",
      title: "",
      summary: "",
      coverImg: "",
      content: "",
      name: "",
      userInfo: "",
      instagram: "",
      twitter: "",
      linkden: "",
      personalLink: "",
      userImg: "",
      postTags: [],
      edited: false,
      created: false,
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
    const { _id, title, coverImg, content, postTags, category } =
      authorsPosts;

    return {
      ...state,
      isEditing: true,
      editPostId: _id,
      title,
      coverImg,
      content,
      postTags,
      category,
    };
  }

  if (action.type === SET_EDIT_USER) {
    const {
      name,
      userInfo,
      instagram,
      twitter,
      linkden,
      personalLink,
      userImg,
    } = state.user;
    return {
      ...state,
      isEditing: true,
      name,
      userInfo,
      instagram,
      twitter,
      linkden,
      personalLink,
      userImg,
    };
  }

  if (action.type === CHANGE_PAGE) {
    return{
      ...state,
      page: action.payload.page
    }
  }

  throw new Error(`no such action : ${action.type}`);
};

export default reducer;
