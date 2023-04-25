import { Router } from "express";
const router = Router();


//*--> Import all controllers  <--*//
import {
  createPost,
  getAllPost,
  getSinglePost,
  editPost,
  deletePost,
} from "../controllers/postController.mjs";

//* POST , PATCH &  DELETE
router.route("/createpost").post(createPost);

router.route("/:id").delete(deletePost).patch(editPost);

//* GET
router.route("/:id/post").get(getSinglePost);
router.route("/allposts").get(getAllPost);

export default router;
