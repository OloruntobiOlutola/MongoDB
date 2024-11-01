const express = require("express");
const {
  getBlog,
  createBlog,
  getBlogById,
  updateBlogById,
  deleteBlogById,
} = require("../controller/blog.controller");

const router = express.Router();

router.get("/", getBlog);
router.post("/", createBlog);
router.get("/:id", getBlogById);
router.patch("/:id", updateBlogById);
router.delete("/:id", deleteBlogById);

module.exports = router;
