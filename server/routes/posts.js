import { Router } from "express";
import {
  createPost,
  getAll,
  getById,
  removePost,
  getMyPosts,
  updatePost,
} from "../controllers/posts.js";
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
//Remove Post
router.delete("/:id", checkAuth, removePost);
//Update Post
router.put("/:id", checkAuth, updatePost);

export default router;
