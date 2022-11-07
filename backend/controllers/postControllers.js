const Post = require("../models/postModal");
const asyncHandler = require("express-async-handler");

const getAllPosts = asyncHandler(async (req, res) => {
  const posts = await Post.find({ user: req.user._id }).sort({ createdAt: -1 });
  res.json(posts);
});

const createPost = asyncHandler(async (req, res) => {
  const { caption, image } = req.body;
  const post = await Post.create({
    user: req.user._id,
    caption,
    image,
  });
  res.json(post);
});

module.exports = {
  getAllPosts,
  createPost,
};
