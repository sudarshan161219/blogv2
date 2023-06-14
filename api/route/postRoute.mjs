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
  tagsSearch,
} from "../controllers/postController.mjs";
import auth from "../middlewares/auth.mjs"

//* POST , PATCH &  DELETE
router.route("/createpost").post(auth, createPost);
//* GET
router.route("/allposts").get(getAllPost);
router.route("/tags").get(tagsSearch);
router.route("/author-post").get(auth, authorPosts)
router.route("/single-post/:id").get(auth, getSinglePost);
router.route("/ud/:id").delete(auth, deletePost).patch(auth, editPost);

export default router;
