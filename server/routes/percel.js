const express = require("express");
const { createParcel, updatePercel } = require("../controllers/parcel");
const shipperJwt = require("../middlewares/shipperJwt");
const authJwt = require("../middlewares/authJwt");

const ParcelRoutes = express.Router();

//create percel route
ParcelRoutes.post("/create", shipperJwt, createParcel);

//update parcel status
ParcelRoutes.put("/update/:id", authJwt, updatePercel);

module.exports = ParcelRoutes;
