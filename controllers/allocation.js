const Allocation = require("../models/Allocation");
const Asset = require("../models/Asset");
const Department = require("../models/Department");

// Show all allocations
module.exports.index = async (req, res) => {
  const allocations = await Allocation.find({})
    .populate("asset")
    .populate("department");

  res.render("allocation/index", { allocations });
};

// Show allocation form
module.exports.renderNewForm = async (req, res) => {
  const assets = await Asset.find({ status: "Available" });
  const departments = await Department.find({});

  res.render("allocation/new", {
    assets,
    departments,
  });
};

// Create allocation
module.exports.createAllocation = async (req, res) => {
  const allocation = new Allocation(req.body.allocation);

  await allocation.save();

  // Update asset status
  await Asset.findByIdAndUpdate(req.body.allocation.asset, {
    status: "Allocated",
  });

  res.redirect("/allocations");
};
