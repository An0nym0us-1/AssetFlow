const Asset = require("../models/Asset");
const Department = require("../models/Department");
const Category = require("../models/Category");

// Show all assets
module.exports.index = async (req, res) => {
  const assets = await Asset.find({})
    .populate("department")
    .populate("category");

  res.render("asset/index", { assets });
};

// Show new asset form
module.exports.renderNewForm = async (req, res) => {
  const departments = await Department.find({});
  const categories = await Category.find({});

  if (categories.length === 0) {
    return res.redirect("/categories/new");
  }

  res.render("asset/new", { departments, categories });
};

// Create asset
module.exports.createAsset = async (req, res) => {
  //   console.log(req.body);
  //   console.log(req.body.body);
  const asset = new Asset(req.body.asset);

  await asset.save();

  res.redirect("/assets");
};

// Show single asset
module.exports.showAsset = async (req, res) => {
  const { id } = req.params;

  const asset = await Asset.findById(id)
    .populate("department")
    .populate("category");

  if (!asset) {
    return res.redirect("/assets");
  }

  res.render("asset/show", { asset });
};

// Show edit form
module.exports.renderEditForm = async (req, res) => {
  const { id } = req.params;

  const asset = await Asset.findById(id);

  const departments = await Department.find({});
  const categories = await Category.find({});

  if (!asset) {
    return res.redirect("/assets");
  }

  res.render("asset/edit", {
    asset,
    departments,
    categories,
  });
};

// Update asset
module.exports.updateAsset = async (req, res) => {
  const { id } = req.params;

  await Asset.findByIdAndUpdate(id, req.body.asset);

  res.redirect(`/assets/${id}`);
};

// Delete asset
module.exports.destroyAsset = async (req, res) => {
  const { id } = req.params;

  await Asset.findByIdAndDelete(id);

  res.redirect("/assets");
};
