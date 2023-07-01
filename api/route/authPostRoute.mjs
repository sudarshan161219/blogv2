import { Router } from "express";
const router = Router();

//*--> Import all controllers  <--*//
import {
  createPost,
  authorPosts,
  getSinglePost,
  editPost,
  deletePost,
  likePost,
  unLikePost,
  disLikePost,
  disUnLikePost,
  likedPosts,
  savepost,
  unsavepost,
  getSavedPosts,
  createComment,
  createReplyComment,
  getComments,
  likeComment,
  unLikeComment,
} from "../controllers/authPostController.mjs";

//* POST , PATCH &  DELETE
router.route("/createpost").post(createPost);
router.route("/createcomment").post(createComment);
router.route("/replycomment").put(createReplyComment);
//* GET
router.route("/author-post").get(authorPosts);
router.route("/single-post/:id").get(getSinglePost);
router.route("/getcomments/:id").get(getComments);
router.route("/likedposts").get(likedPosts);
router.route("/savedposts").get(getSavedPosts);
router.route("/ud/:id").delete(deletePost).patch(editPost);
router.route("/like/:id").put(likePost);
router.route("/unlike/:id").put(unLikePost);
router.route("/dislike/:id").put(disLikePost);
router.route("/disunlike/:id").put(disUnLikePost);
router.route("/savepost/:id").put(savepost);
router.route("/unsavepost/:id").put(unsavepost);
router.route("/likecomment/:id").put(likeComment);
router.route("/unlikecomment/:id").put(unLikeComment);
export default router;
