const {
  createOne,
  getAll,
  getOne,
  updateOne,
  deleteOne,
} = require("./generic.controller");
const Blog = require("../model/blog.model");

const createBlog = createOne(Blog);

const getBlog = getAll(Blog);

const getBlogById = getOne(Blog, "blog");

const updateBlogById = updateOne(Blog, "blog");

const deleteBlogById = deleteOne(Blog, "blog");

module.exports = {
  createBlog,
  getBlog,
  getBlogById,
  updateBlogById,
  deleteBlogById,
};
