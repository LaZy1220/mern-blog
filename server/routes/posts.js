import { Router } from "express";
import { register, login, getMe } from "../controllers/auth.js";
import { createPost } from "../controllers/posts.js";
import { checkAuth } from "../utils/checkAuth.js";

const router = new Router();

//Create post
router.post("/", checkAuth, createPost);

export default router;
