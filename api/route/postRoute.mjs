import { Router } from "express";
const router = Router();


//*--> Import all controllers  <--*//
import {
  createPost,
  getAllPost,
  authorPosts,
  getSinglePost,
  editPost,
  deletePost,
} from "../controllers/postController.mjs";


//* POST , PATCH &  DELETE
router.route("/createpost").post(createPost);
//* GET
router.route("/allposts").get(getAllPost);
router.route("/author-post").get(authorPosts)
router.route("/single-post/:id").get(getSinglePost);
router.route("/ud/:id").delete(deletePost).patch(editPost);

export default router;
