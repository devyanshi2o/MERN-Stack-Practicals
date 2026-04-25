import express from "express";

// 👇 WRITE THIS HERE (top of file)
import { createPost, getPosts, getPostById } from "../controllers/post.controller.js";

import { upload } from "../middlewares/multer.middleware.js";

const router = express.Router();

// routes
router.post("/", upload.single("image"), createPost);
router.get("/", getPosts);
router.get("/:id", getPostById);

export default router;