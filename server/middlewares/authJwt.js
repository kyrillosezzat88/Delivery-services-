const JWT = require("jsonwebtoken");
const user = require("../models/user");

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ message: "Please Login!" });
  }
  const Token = authorization.replace("Bearer ", "");
  JWT.verify(Token, process.env.SECRET_KEY, async (err, payload) => {
    if (err)
      return res.status(401).json({ message: err.message, success: false });

    const { userId } = payload;
    req.user = await user.findById(userId);
    next();
  });
};
