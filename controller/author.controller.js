const { Author } = require("../model/author.model");
const { createOne, getAll, getOne } = require("./generic.controller");

const createAuthor = createOne(Author);

const getAuthors = getAll(Author);

const getUserById = getOne(Author, "author");

const updateAuthorById = async (req, res) => {
  try {
    const { authorId } = req.params;
    const user = await Author.findByIdAndUpdate(authorId, req.body, {
      new: true,
    });
    console.log(user);
    if (!user) {
      return res.status(404).json({ message: "Author does not exist" });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteAuthorById = async (req, res) => {
  try {
    const { authorId } = req.params;
    const user = await Author.findByIdAndDelete(authorId);
    console.log(user);
    if (!user) {
      return res.status(404).json({ message: "Author does not exist" });
    }
    res.status(204).json({ message: "Author has been deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createAuthor,
  getAuthors,
  getUserById,
  updateAuthorById,
  deleteAuthorById,
};
