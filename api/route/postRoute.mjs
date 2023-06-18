import { Router } from "express";
const router = Router();

import { getAllPost, tagsSearch } from "../controllers/postController.mjs";

router.route("/allposts").get(getAllPost);
router.route("/tags").get(tagsSearch);

export default router;