const hashPassword = (req, res, next) => {
  if (req.body.password === "password") {
    return res.status(400).json({ message: "Password cannot be 'password'" });
  }
  req.body.password = req.body.password + "-hashed";
  next();
};

module.exports = {
  hashPassword,
};
