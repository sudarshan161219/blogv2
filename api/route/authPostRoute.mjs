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
  dislikeComment,
  unDislikeComment,
} from "../controllers/authPostController.mjs";

//* POST 
router.route("/createpost").post(createPost);
router.route("/createcomment").post(createComment);

//* GET
router.route("/author-post").get(authorPosts);
router.route("/single-post/:id").get(getSinglePost);
router.route("/getcomments/:id").get(getComments);
router.route("/likedposts").get(likedPosts);
router.route("/savedposts").get(getSavedPosts);

//$ DELETE
router.route("/ud/:id").delete(deletePost).patch(editPost);

//? PUT
router.route("/replycomment").put(createReplyComment);
router.route("/like/:id").put(likePost);
router.route("/unlike/:id").put(unLikePost);
router.route("/dislike/:id").put(disLikePost);
router.route("/disunlike/:id").put(disUnLikePost);
router.route("/savepost/:id").put(savepost);
router.route("/unsavepost/:id").put(unsavepost);
router.route("/likecomment/:id").put(likeComment);
router.route("/unlikecomment/:id").put(unLikeComment);
router.route("/dislikecomment/:id").put(dislikeComment);
router.route("/undislikecomment/:id").put(unDislikeComment);
export default router;
