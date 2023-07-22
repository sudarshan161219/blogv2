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
  HANDLE_CHANGE_TAG,
  HANDLE_SELECT_CHANGE_TAG,
  HANDLE_SELECT_SORT_CHANGE_TAG,
  TOGGLE_SIDEBAR,
  TOGGLE_DASHNAV,
  TOGGLE_DELETE_MODAL_BTN,
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
  COMMENT_ID,
  COMMENT_REPLY_ID,
  CLEAR_AUTHOR_SINGLE_POST,
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
  CLEAR_VALUES,
  DELETE_POST_BEGIN,
  DELETE_COMMENT_BEGIN,
  DELETE_COMMENT_SUCCESS,
  DELETE_COMMENT_ERROR,
  DELETE_COMMENT_REPLY_BEGIN,
  DELETE_COMMENT_REPLY_SUCCESS,
  DELETE_COMMENT_REPLY_ERROR,
  CLEAR_FILTERS,
  CHANGE_PAGE,
  GET_TAGS_SEARCH_POST_BEGIN,
  GET_TAGS_SEARCH_POST_SUCCESS,
  GET_TAGS_SEARCH_POST_ERROR,
  GET_ALL_POST_BEGIN,
  GET_ALL_POST_SUCCESS,
  GET_ALL_POST_ERROR,
  GET_AUTHOR_PAGE_BEGIN,
  GET_AUTHOR_PAGE_SUCCESS,
  GET_AUTHOR_PAGE_ERROR,
  GET_SINGLE_POST_BEGIN,
  GET_SINGLE_POST_SUCCESS,
  GET_SINGLE_POST_ERROR,
  POST_LIKES,
  POST_DISLIKES,
  COMMENT_LIKES,
  COMMENT_DISLIKES,
  COMMENT_REPLY_LIKES,
  COMMENT_REPLY_DISLIKES,
  SAVE_POST,
  UNSAVE_POST,
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
  TOGGLE_DELETECR_MODAL_BTN,
  TOGGLE_DELETEPT_MODAL_BTN,
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

  if (action.type === GET_AUTHOR_PAGE_BEGIN) {
    return { ...state, isLoading: true };
  }

  if (action.type === GET_AUTHOR_PAGE_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      GauthorPosts: action.payload.authorPosts,
      GauthorInfo: action.payload.authorInfo,
      // totalPosts: action.payload.totalPosts,
      // numOfPages: action.payload.numOfPages,
    };
  }

  if (action.type === GET_AUTHOR_PAGE_ERROR) {
    return {
      ...state,
      isLoading: false,
    };
  }

  if (action.type === GET_SINGLE_POST_BEGIN) {
    return { ...state, isLoading: true };
  }

  if (action.type === GET_SINGLE_POST_SUCCESS) {
    const { post, user, comments } = state;
    const { likes, dislikes, savepost } = post;
    const { author } = comments;

    let newArr;

    comments.map((item) => (newArr = item));
    // console.log(newArr.likes.includes(user && user._id));

    return {
      ...state,
      isLoading: false,
      post: action.payload.singlepost,
      like: likes && likes.includes(user && user._id) ? true : false,
      dislike: dislikes && dislikes.includes(user && user._id) ? true : false,
      save: savepost && savepost.includes(user && user._id) ? true : false,
      postLikes: likes && post.likes.length,
      postDisLikes: dislikes && post.dislikes.length,
      postComments: comments.length,
    };
  }

  if (action.type === GET_SINGLE_POST_ERROR) {
    return {
      ...state,
      isLoading: false,
    };
  }

  if (action.type === GET_COMMENT_BEGIN) {
    return { ...state, commentsLoading: true };
  }

  if (action.type === GET_COMMENT_SUCCESS) {
    const { comments, commentreplies } = state;
    return {
      ...state,
      commentsLoading: false,
      comments: action.payload.comments,
      commentreplies: action.payload.commentsReply,
      postComments: comments && comments.length,
      postCommentsReply: commentreplies.length,
      postCommentsLikes: action.payload.commentLikes,
      postCommentsDisLikes: action.payload.commentDisLikes,
      postCommentsReplyLikes: action.payload.commentReplyLikes,
      postCommentsReplyDisLikes: action.payload.commentReplyDisLikes,
      likeId: action.payload.comments,
    };
  }

  if (action.type === GET_COMMENT_ERROR) {
    return {
      ...state,
      commentsLoading: false,
    };
  }

  if (action.type === GET_TAGS_SEARCH_POST_BEGIN) {
    return { ...state, isLoading: true };
  }

  if (action.type === GET_TAGS_SEARCH_POST_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      postg: action.payload.postg,
      totalPostsg: action.payload.totalPostsg,
      numOfPagesg: action.payload.numOfPagesg,
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

  if (action.type === HANDLE_CHANGE_TAG) {
    return { ...state, [action.payload.name]: action.payload.value };
  }

  if (action.type === HANDLE_SELECT_CHANGE_TAG) {
    return { ...state, SearchCategoryT: action.payload.value };
  }

  if (action.type === HANDLE_SELECT_SORT_CHANGE_TAG) {
    return { ...state, sortT: action.payload.value };
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

  if (action.type === DELETE_COMMENT_BEGIN) {
    return { ...state, formLoading: true };
  }

  if (action.type === DELETE_COMMENT_SUCCESS) {
    return { ...state, formLoading: false };
  }

  if (action.type === DELETE_COMMENT_ERROR) {
    return { ...state, formLoading: false };
  }

  if (action.type === DELETE_COMMENT_REPLY_BEGIN) {
    return { ...state, commentsReplyformLoading: true };
  }

  if (action.type === DELETE_COMMENT_REPLY_SUCCESS) {
    return { ...state, commentsReplyformLoading: false };
  }

  if (action.type === DELETE_COMMENT_REPLY_ERROR) {
    return { ...state, commentsReplyformLoading: false };
  }

  if (action.type === POST_ID) {
    return { ...state, postId: action.payload.postId };
  }

  if (action.type === COMMENT_ID) {
    return { ...state, editCommentId: action.payload.commentId };
  }

  if (action.type === COMMENT_REPLY_ID) {
    return { ...state, editCommentReplyId: action.payload.commentReplyId };
  }


  if (action.type === SET_EDIT_POST) {
    const authorsPosts = state.authorpost.find(
      (post) => post._id === action.payload.id
    );
    const { _id, title, coverImg, content, postTags, category } = authorsPosts;

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
    return {
      ...state,
      page: action.payload.page,
    };
  }

  if (action.type === POST_LIKES) {
    return {
      ...state,
      postLikes: action.payload.like_dislike_Post.likes.length,
    };
  }

  if (action.type === POST_DISLIKES) {
    return {
      ...state,
      postDisLikes: action.payload.like_dislike_Post.dislikes.length,
    };
  }

  if (action.type === COMMENT_LIKES) {
    return {
      ...state,
      postCommentsLikes: action.payload.commentLikes,
      Comment_Liked_Disliked_Id: action.payload.like_dislike_comment,
    };
  }

  if (action.type === COMMENT_DISLIKES) {
    return {
      ...state,
      postCommentsDisLikes: action.payload.commentDisLikes,
      Comment_Liked_Disliked_Id: action.payload.like_dislike_comment,
    };
  }

  if (action.type === EDIT_COMMENT_BEGIN) {
    return { ...state, editCommentLoading: true };
  }

  if (action.type === EDIT_COMMENT_SUCCESS) {
    return { ...state, editCommentLoading: false };
  }

  if (action.type === EDIT_COMMENT_ERROR) {
    return { ...state, editCommentLoading: false };
  }

  if (action.type === EDIT_COMMENT_REPLY_BEGIN) {
    return { ...state, editCommentReplyLoading: true };
  }

  if (action.type === EDIT_COMMENT_REPLY_SUCCESS) {
    return { ...state, editCommentReplyLoading: false };
  }

  if (action.type === EDIT_COMMENT_REPLY_ERROR) {
    return { ...state, editCommentReplyLoading: false };
  }

  if (action.type === COMMENT_REPLY_LIKES) {
    return {
      ...state,
      postCommentsReplyLikes: action.payload.commentReplyLikes,
    };
  }

  if (action.type === COMMENT_REPLY_DISLIKES) {
    return {
      ...state,
      postCommentsReplyDisLikes: action.payload.commentReplyDisLikes,
    };
  }

  if (action.type === TOGGLE_LIKE_BTN) {
    return {
      ...state,
      like: !state.like,
    };
  }

  if (action.type === TOGGLE_DISLIKE_BTN) {
    return {
      ...state,
      dislike: !state.dislike,
    };
  }

  if (action.type === TOGGLE_COMMENT_LIKE_BTN) {
    return {
      ...state,
      commentLike: !state.commentLike,
    };
  }

  if (action.type === TOGGLE_COMMENT_DISLIKE_BTN) {
    return {
      ...state,
      commentDislike: !state.commentDislike,
    };
  }

  if (action.type === TOGGLE_SAVE_BTN) {
    return {
      ...state,
      save: !state.save,
    };
  }

  if (action.type === TOGGLE_DELETE_MODAL_BTN) {
    return {
      ...state,
      showDeleteModal: !state.showDeleteModal,
      deleteCommentId: action.payload.id,
    };
  }

  if (action.type === TOGGLE_DELETECR_MODAL_BTN) {
    return {
      ...state,
      showDeleteCrModal: !state.showDeleteCrModal,
      deleteCommentReplyId: action.payload.id,
    };
  }


  if (action.type ===  TOGGLE_DELETEPT_MODAL_BTN) {
    return {
      ...state,
      showDeletePostModal: !state.showDeletePostModal,
      deletePostId: action.payload.id,
    };
  }

 

  if (action.type === CREATE_COMMENT_BEGIN) {
    return { ...state, formLoading: true };
  }

  if (action.type === CREATE_COMMENT_SUCCESS) {
    return { ...state, formLoading: false };
  }

  if (action.type === CREATE_COMMENT_ERROR) {
    return { ...state, formLoading: false };
  }

  if (action.type === CREATE_COMMENT_REPLY_BEGIN) {
    return { ...state, commentsReplyformLoading: true };
  }

  if (action.type === CREATE_COMMENT_REPLY_SUCCESS) {
    return { ...state, commentsReplyformLoading: false };
  }

  if (action.type === CREATE_COMMENT_REPLY_ERROR) {
    return { ...state, commentsReplyformLoading: false };
  }

  throw new Error(`no such action : ${action.type}`);
};

export default reducer;
