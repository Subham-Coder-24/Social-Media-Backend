import mongoose from "mongoose";

//Schema
const postSchema = mongoose.Schema({
  title: String,
  message: String,
  name: String,
  creator: String,
  tags: [{ type: String }],
  selectedFile: {
    public_id: {
      type: String,
    },
    url: {
      type: String,
    },
  },
  likes: {
    type: [String],
    default: [],
  },
  comments: { type: [String], default: [] },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

//Model
const PostMessage = mongoose.model("PostMessage", postSchema);

export default PostMessage;
