const parcel = require("../models/parcel");

// create new parcel
const createParcel = async (req, res, next) => {
  try {
    const { name, pickup_address, dropoff_address } = req.body;
    const userId = req.user._id;
    // simpler validation
    if (!name || !pickup_address || !dropoff_address)
      return res.status(402).json({
        message: "name, pickup address and dropoff address are requred!",
        success: false,
      });
    let newParcel = new parcel({
      name,
      pickup_address,
      dropoff_address,
      createdBy: userId,
    });
    newParcel = await newParcel.save();
    if (!newParcel)
      throw new Error(
        "something went wrong, please try again or connect to customer services "
      );
    return res
      .status(200)
      .json({ message: "create successfully", success: true, data: newParcel });
  } catch (error) {
    return next(error);
  }
};

// update percel by biker
const updatePercel = async (req, res, next) => {
  try {
    const allStatus = ["waiting", "intransit", "delivered"];
    const { status } = req.body;
    const userId = req.user._id;
    // simple validation for status
    if (!allStatus.includes(status)) {
      return res
        .status(402)
        .json({ message: "invalied status", success: false });
    }

    if (status == "intransit") {
      const updatedPercel = await parcel.findOneAndUpdate(
        { _id: req.params.id, status: "waiting" },
        { ...req.body, pickedupBy: userId },
        { new: true }
      );

      if (!updatedPercel)
        return res.status(400).json({
          message: "unfortunately this shipment taken by another biker!",
          success: false,
        });
      return res.status(200).json({
        message: "percel updated successfully",
        success: true,
        data: updatedPercel,
      });
    }
    const updatedPercel = await parcel.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );
    return res.status(200).json({
      message: "Updated successfully",
      data: updatedPercel,
      success: true,
    });
  } catch (error) {
    return next(error);
  }
};

// get percels`s of shipper
const percelShipper = async (req, res, next) => {
  try {
    const allPercels = await parcel
      .find({ createdBy: req.user._id })
      .populate("pickedupBy");
    if (!allPercels)
      return res.status(500).json({
        message:
          "somethign went wrong please try again or contact to customer sevices ",
      });
    return res.status(200).json({ data: allPercels, success: true });
  } catch (error) {
    return next(error);
  }
};

// get all percels
const allParcels = async (req, res, next) => {
  try {
    const getPercels = await parcel.find({ status: "waiting" });
    return res.status(200).json({ data: getPercels, success: true });
  } catch (error) {
    return next(error);
  }
};

//get all carrier shipments
const CarrierShipmetns = async (req, res, next) => {
  try {
    const getPercels = await parcel.find({ pickedupBy: req.user._id });
    if (!getPercels)
      return res.status(500).json({
        message:
          "somethign went wrong please try again or contact to customer sevices ",
      });
    return res.status(200).json({ data: getPercels, success: true });
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  createParcel,
  updatePercel,
  percelShipper,
  allParcels,
  CarrierShipmetns,
};
