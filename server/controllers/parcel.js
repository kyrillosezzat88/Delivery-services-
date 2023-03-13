const parcel = require("../models/parcel");

// create new parcel
const createParcel = async (req, res, next) => {
  try {
    const { name, address } = req.body;
    const userId = req.user._id;
    // simpler validation
    if (!name || !address)
      return res
        .status(402)
        .json({ message: "name and address are requred!", success: false });
    let newParcel = new parcel({ name, address, createdBy: userId });
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
    if (!allStatus.includes(status))
      return res
        .status(402)
        .json({ message: "invalied status", success: false });

    const updatedPercel = await parcel.findByIdAndUpdate(
      req.params.id,
      { ...req.body, pickedupBy: userId },
      { new: true }
    );
    if (!updatedPercel)
      return res.status(500).json({
        message:
          "something went wront, please try again or connect ot customer services ",
        success: false,
      });
    return res.status(200).json({
      message: "percel updated successfully",
      success: true,
      data: updatedPercel,
    });
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  createParcel,
  updatePercel,
};
