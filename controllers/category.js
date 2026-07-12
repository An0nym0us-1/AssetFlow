const Category = require("../models/Category");

// Show all categories
module.exports.index = async (req, res) => {
  const categories = await Category.find({});
  res.render("category/index", { categories });
};

// Show create form
module.exports.renderNewForm = (req, res) => {
  res.render("category/new");
};

// Create category
module.exports.createCategory = async (req, res) => {
  const category = new Category(req.body.category);

  await category.save();

  res.redirect("/categories");
};

// Show edit form
module.exports.renderEditForm = async (req, res) => {
  const { id } = req.params;

  const category = await Category.findById(id);

  res.render("category/edit", { category });
};

// Update category
module.exports.updateCategory = async (req, res) => {
  const { id } = req.params;

  await Category.findByIdAndUpdate(id, {
    ...req.body.category,
  });

  res.redirect("/categories");
};

// Delete category
module.exports.destroyCategory = async (req, res) => {
  const { id } = req.params;

  await Category.findByIdAndDelete(id);

  res.redirect("/categories");
};
