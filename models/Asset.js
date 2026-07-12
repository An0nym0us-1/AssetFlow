const mongoose = require("mongoose");

const assetSchema = new mongoose.Schema(
  {
    assetName: {
      type: String,
      required: true,
      trim: true,
    },

    assetTag: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    serialNumber: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },

    department: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Department",
      required: true,
    },

    purchaseDate: {
      type: Date,
    },

    location: {
      type: String,
      trim: true,
    },

    status: {
      type: String,
      enum: ["Available", "Allocated", "Maintenance"],
      default: "Available",
    },

    condition: {
      type: String,
      enum: ["Excellent", "Good", "Fair", "Damaged"],
      default: "Good",
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Asset", assetSchema);
