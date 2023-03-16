const user = require("../models/user");
const bcrypt = require("bcryptjs");
const JWT = require("jsonwebtoken");

// Register
const Register = async (req, res, next) => {
  try {
    const { first_name, last_name, email, password, phone, isShpper } =
      req.body;

    // simple validation
    if (!first_name || !last_name || !email || !password || !phone)
      return res
        .status(402)
        .json({ message: "all fields required !!", success: false });

    //check user if regiter before or not
    const getUser = await user.findOne({ email });

    if (getUser)
      return res
        .status(400)
        .json({ message: "this email already exist !", success: false });

    // hash password
    const hashPassword = bcrypt.hashSync(password, 10);
    //create new user
    let newUser = new user({ ...req.body, password: hashPassword });
    newUser = await newUser.save();
    // check if user saved or not
    if (!newUser)
      return res
        .status(500)
        .json({ message: "something went wrong!!", success: false });

    return res
      .status(200)
      .json({ message: "your account created successfully ", success: true });
  } catch (error) {
    next(error);
  }
};

// Login
const Login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    // simpler validation
    if (!email || !password)
      return res
        .status(402)
        .json({ message: "please enter email and password!", success: false });

    // get user
    const getUser = await user.findOne({ email });
    if (getUser && bcrypt.compareSync(password, getUser.password)) {
      //generate token
      const token = JWT.sign(
        { userId: getUser._id, isShipper: getUser.isShipper },
        process.env.SECRET_KEY,
        { expiresIn: "1d" }
      );
      // delete password from user object what send it to frontend
      delete getUser._doc.password;
      return res
        .status(200)
        .json({ user: { ...getUser._doc, token }, success: true });
    }
    return res
      .status(400)
      .json({ message: "email or password wrong", success: false });
  } catch (error) {
    // return next(error);
    return res.status(400).json({ message: error.message });
  }
};

module.exports = {
  Register,
  Login,
};
