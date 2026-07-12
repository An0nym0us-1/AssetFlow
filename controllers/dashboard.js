const Asset = require("../models/Asset");
const Category = require("../models/Category");
const Department = require("../models/Department");
const Allocation = require("../models/Allocation");

module.exports.index = async (req, res) => {
  const assetCount = await Asset.countDocuments();

  const categoryCount = await Category.countDocuments();

  const departmentCount = await Department.countDocuments();

  const allocationCount = await Allocation.countDocuments();

  const recentAssets = await Asset.find({})
    .populate("department")
    .sort({ createdAt: -1 })
    .limit(5);

  res.render("dashboard/index", {
    assetCount,
    categoryCount,
    departmentCount,
    allocationCount,
    recentAssets,
  });
};
