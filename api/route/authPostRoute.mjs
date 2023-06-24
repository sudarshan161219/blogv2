import { Router } from "express";
const router = Router();

//*--> Import all controllers  <--*//
import {
  createPost,
  authorPosts,
  getSinglePost,
  editPost,
  deletePost,
  likePost
} from "../controllers/authPostController.mjs";
import auth from "../middlewares/auth.mjs";

//* POST , PATCH &  DELETE
router.route("/createpost").post(createPost);
//* GET
router.route("/author-post").get(authorPosts);
router.route("/single-post/:id").get(getSinglePost);
router.route("/ud/:id").delete(deletePost).patch(editPost);
router.route("/like").put( likePost);
export default router;
