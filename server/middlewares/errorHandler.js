const errorHandler = (error, req, res, next) => {
  return res.status(400).json({ message: error.message, success: false });
};

module.exports = errorHandler;
