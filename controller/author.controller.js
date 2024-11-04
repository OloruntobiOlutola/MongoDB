const { Author } = require("../model/author.model");
const {
  createOne,
  getAll,
  getOne,
  updateOne,
  deleteOne,
} = require("./generic.controller");

const createAuthor = createOne(Author);

const getAuthors = getAll(Author);

const getUserById = getOne(Author, "author");

const updateAuthorById = updateOne(Author, "author");

const deleteAuthorById = deleteOne(Author, "author");

module.exports = {
  createAuthor,
  getAuthors,
  getUserById,
  updateAuthorById,
  deleteAuthorById,
};
