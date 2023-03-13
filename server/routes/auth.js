const express = require("express");
const { Register, Login } = require("../controllers/auth");

const AuthRoutes = express.Router();

//Register route
AuthRoutes.post("/register", Register);

//Login
AuthRoutes.post("/login", Login);

module.exports = AuthRoutes;
