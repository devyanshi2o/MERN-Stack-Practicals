import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  title: String,
  content: String,
  image: String,
}, { timestamps: true });

export const Post = mongoose.model("Post", postSchema);