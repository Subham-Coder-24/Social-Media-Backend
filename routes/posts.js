import express from "express";
import {
  getPost,
  getPosts,
  createPosts,
  updatePost,
  deletePost,
  likePost,
  getPostsBySearch,
  commentPost,
} from "../controllers/posts.js";
import auth from "../middleware/auth.js";

const route = express.Router();

route.get("/search", getPostsBySearch);
route.get("/", getPosts);
route.get('/:id', getPost);

route.post("/", auth, createPosts);
route.patch("/:id", auth, updatePost);
route.delete("/:id", auth, deletePost);
route.patch("/:id/likePost", auth, likePost);
route.post('/:id/commentPost', commentPost);

export default route;
