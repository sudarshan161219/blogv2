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
  getSavedPosts
} from "../controllers/authPostController.mjs";

//* POST , PATCH &  DELETE
router.route("/createpost").post(createPost);
//* GET
router.route("/author-post").get(authorPosts);
router.route("/single-post/:id").get(getSinglePost);
router.route("/likedposts").get(likedPosts);
router.route("/savedposts").get(getSavedPosts);
router.route("/ud/:id").delete(deletePost).patch(editPost);
router.route("/like/:id").put(likePost);
router.route("/unlike/:id").put(unLikePost);
router.route("/dislike/:id").put(disLikePost);
router.route("/disunlike/:id").put(disUnLikePost);
router.route("/savepost/:id").put(savepost);
router.route("/unsavepost/:id").put(unsavepost);

export default router;
