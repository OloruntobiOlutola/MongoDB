const { createOne, getAll, getOne } = require("./generic.controller");
const Blog = require("../model/blog.model");

const createBlog = createOne(Blog);

const getBlog = getAll(Blog);

const getBlogById = getOne(Blog, "blog");

const updateBlogById = async (req, res) => {
  try {
    const { blogId } = req.params;
    const blog = await Blog.findByIdAndUpdate(blogId, req.body, { new: true });
    console.log(blog);
    if (!blog) {
      return res.status(404).json({ message: "Blog does not exist" });
    }
    res.json(blog);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteBlogById = async (req, res) => {
  try {
    const { blogId } = req.params;
    const blog = await Blog.findByIdAndDelete(blogId);
    console.log(blog);
    if (!blog) {
      return res.status(404).json({ message: "Blog does not exist" });
    }
    res.status(204).json({ message: "Blog has been deleted" }); // No content to send back
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createBlog,
  getBlog,
  getBlogById,
  updateBlogById,
  deleteBlogById,
};
