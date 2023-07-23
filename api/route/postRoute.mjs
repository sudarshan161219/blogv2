import { Router } from "express";
const router = Router();

import {
  getAllPost,
  tagsSearch,
  getPost,
  getAuthorPage,
  // likePost
  refreshToken
} from "../controllers/postController.mjs";

router.route("/").get(getAllPost);
router.route("/post/:id").get(getPost);
router.route("/author/:id").get(getAuthorPage);
router.route("/tags").get(tagsSearch);
// router.route("/refresh").get(refreshToken)
// router.route("/like/:id").put( likePost);
export default router;