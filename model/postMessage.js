import mongoose from "mongoose";

//Schema
const postSchema = mongoose.Schema({
  title: String,
  message: String,
  creator: String,
  tags: [{ type: String }],
  selectedFile: String,
  likeCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

//Model
const PostMessage = mongoose.model("PostMessage", postSchema);

export default PostMessage;