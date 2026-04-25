import { Post } from "../models/Post.models.js";


// ✅ Create Post
export const createPost = async (req, res) => {
  try {
    const { title, content } = req.body;

    let imageUrl = "";

    if (req.file) {
     imageUrl = `http://localhost:5000/public/temp/${req.file.filename}`; // ✅ local file path
    }

    const post = await Post.create({
      title,
      content,
      image: imageUrl
    });

    res.json(post);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ✅ Get All Posts
export const getPosts = async (req, res) => {
  const posts = await Post.find().sort({ createdAt: -1 });
  res.json(posts);
};

// ✅ Get Single Post (👉 WRITE IT HERE)
export const getPostById = async (req, res) => {
  const post = await Post.findById(req.params.id);
  res.json(post);
};