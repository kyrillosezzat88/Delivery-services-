const mongoose = require("mongoose");

const parcelSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
    default: "waiting",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  pickedupBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  pickupTime: {
    type: Date,
  },
  deliveryTime: {
    type: Date,
  },
});

module.exports = mongoose.model("parcel", parcelSchema);
