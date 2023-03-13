const JWT = require("jsonwebtoken");
const user = require("../models/user");

// middleware to check if loged in account is shipper or not
// i made this middleware to give permition only to shipper accounts to create parcels

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ message: "Please Login!" });
  }
  const Token = authorization.replace("Bearer ", "");
  JWT.verify(Token, process.env.SECRET_KEY, async (err, payload) => {
    if (err)
      return res.status(401).json({ message: err.message, success: false });

    const { userId, isShipper } = payload;
    if (!isShipper)
      return res
        .status(401)
        .json({ message: "carrier account has no permition " });
    req.user = await user.findById(userId);
    next();
  });
};
