const createOne = (Model) => async (req, res) => {
  try {
    const data = await Model.create(req.body);
    return res.status(201).json({
      status: "success",
      description: `Created successfully`,
      data,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message ? error.message : "Internal Server Error",
    });
  }
};

const getAll = (Model) => async (req, res) => {
  try {
    const data = await Model.find();
    return res.json({
      status: "success",
      description: "Retrieved successfully",
      data,
      totalCount: data.length,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getOne = (Model, name) => async (req, res) => {
  try {
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
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createOne,
  getAll,
  getOne,
};
