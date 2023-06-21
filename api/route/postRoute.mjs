import { Router } from "express";
const router = Router();

import {
  getAllPost,
  tagsSearch,
  getPost,
} from "../controllers/postController.mjs";

router.route("/").get(getAllPost);
router.route("/post/:id").get(getPost);
router.route("/tags").get(tagsSearch);

export default router;