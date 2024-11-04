const catchAsync = require("../utils/catch-async");

const createOne = (Model) =>
  catchAsync(async (req, res) => {
    const data = await Model.create(req.body);
    return res.status(201).json({
      status: "success",
      description: `Created successfully`,
      data,
    });
  });

const getAll = (Model) =>
  catchAsync(async (req, res, next) => {
    const data = await Model.finds();
    return res.json({
      status: "success",
      description: "Retrieved successfully",
      data,
      totalCount: data.length,
    });
  });

const getOne = (Model, name) =>
  catchAsync(async (req, res, next) => {
    const { id } = req.params;
    const data = await Model.findById(id);
    if (!data) {
      return res.status(404).json({
        status: "error",
        description: `${name} with id ${id} not found`,
      });
    }
    res.json({
      status: "success",
      description: `Retrieved successfully`,
      data,
    }); // Change 'user' to 'blog'
  });

const updateOne = (Model, name) =>
  catchAsync(async (req, res) => {
    const { id } = req.params;
    const data = await Model.findByIdAndUpdate(id, req.body, { new: true });
    if (!data) {
      return res
        .status(404)
        .json({ message: `${name} with id ${id} does not exist` });
    }
    res.json({
      status: "success",
      code: "00",
      description: "Updated successfully",
      data,
    });
  });

const deleteOne = (Model, name) =>
  catchAsync(async (req, res) => {
    const { id } = req.params;
    const data = await Model.findByIdAndDelete(id);
    if (!data) {
      return res
        .status(404)
        .json({ message: `${name} with id ${id} does not exist` });
    }
    res.status(204).json({ message: `${name} with id ${id} has been deleted` }); // No content to send back
  });

module.exports = {
  createOne,
  getAll,
  getOne,
  updateOne,
  deleteOne,
};
