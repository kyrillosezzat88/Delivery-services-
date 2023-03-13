const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  parcels: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "parcel",
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  isShipper: {
    type: Boolean,
    required: true,
  },
});
module.exports = mongoose.model("user", userSchema);
