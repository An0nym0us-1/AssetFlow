const mongoose = require("mongoose");

const allocationSchema = new mongoose.Schema(
  {
    asset: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Asset",
      required: true,
    },

    employeeId: {
      type: String,
      required: true,
      trim: true,
    },

    department: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Department",
      required: true,
    },

    assignedDate: {
      type: Date,
      default: Date.now,
    },

    status: {
      type: String,
      enum: ["Allocated", "Returned"],
      default: "Allocated",
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Allocation", allocationSchema);
