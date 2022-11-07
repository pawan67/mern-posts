const express = require("express");
const { getAllPosts, createPost } = require("../controllers/postControllers");
const { protect } = require("../middlewares/authMiddleware");
const router = express.Router();

router.route("/").get(protect, getAllPosts).post(protect, createPost);

module.exports = router;
