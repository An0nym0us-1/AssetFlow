const Department = require("../models/Department");

module.exports.index = async (req, res) => {
  const departments = await Department.find({});
  res.render("department/index", { departments });
};

module.exports.renderNewForm = (req, res) => {
  res.render("department/new");
};

module.exports.createDepartment = async (req, res) => {
  const department = new Department(req.body.department);
  await department.save();

  res.redirect("/departments");
};

module.exports.updateDepartment = async (req, res) => {
  const { id } = req.params;

  await Department.findByIdAndUpdate(id, {
    ...req.body.department,
  });

  res.redirect("/departments");
};

module.exports.destroyDepartment = async (req, res) => {
  const { id } = req.params;

  await Department.findByIdAndDelete(id);

  res.redirect("/departments");
};

module.exports.renderEditForm = async (req, res) => {
  const { id } = req.params;

  const department = await Department.findById(id);

  res.render("department/edit", { department });
};
