const express = require("express");
const {
  createAuthor,
  getAuthors,
  getUserById,
  updateAuthorById,
  deleteAuthorById,
} = require("../controller/author.controller");
const { hashPassword } = require("../middleware/author.middleware");

const router = express.Router();

router.route("/").get(getAuthors).post(hashPassword, createAuthor);
router
  .route("/:id")
  .get(getUserById)
  .patch(updateAuthorById)
  .delete(deleteAuthorById);

module.exports = router;
