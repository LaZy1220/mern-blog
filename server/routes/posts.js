import { Router } from "express";
import { createPost } from "../controllers/posts.js";
import { getAll } from "../controllers/posts.js";
import { getById } from "../controllers/posts.js";
import { getMyPosts } from "../controllers/posts.js";
import { checkAuth } from "../utils/checkAuth.js";

const router = new Router();

//Create post
router.post("/", checkAuth, createPost);
//Get All posts
router.get("/", getAll);
//Get Post by Id
router.get("/:id", getById);
//Get My Posts
router.get("/user/me", checkAuth, getMyPosts);

export default router;
