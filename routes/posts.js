import express from "express";
import {
  getPosts,
  createPosts,
  updatePost,
  deletePost,
  likePost,
} from "../controllers/posts.js";
const route = express.Router();

route.get("/", getPosts);
route.post("/", createPosts);
route.patch("/:id", updatePost);
route.delete("/:id", deletePost);
route.patch("/:id/likePost", likePost);

export default route;
