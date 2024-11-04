const errorHandler = (err, req, res, next) => {
  return res.status(err.status || 500).json({
    description: err.message,
    status: "fail",
    code: "100",
  });
};

module.exports = errorHandler;
