const express = require("express");
const {
  createParcel,
  updatePercel,
  percelShipper,
  allParcels,
  CarrierShipmetns,
} = require("../controllers/parcel");
const shipperJwt = require("../middlewares/shipperJwt");
const authJwt = require("../middlewares/authJwt");

const ParcelRoutes = express.Router();

// get all parcels
ParcelRoutes.get("/", authJwt, allParcels);

//create percel route
ParcelRoutes.post("/create", shipperJwt, createParcel);

//update parcel status
ParcelRoutes.put("/update/:id", authJwt, updatePercel);

//get percels of shippers
ParcelRoutes.get("/shipper/shipments", shipperJwt, percelShipper);

//get percels of cariere
ParcelRoutes.get("/carrier/shipments", authJwt, CarrierShipmetns);

module.exports = ParcelRoutes;
