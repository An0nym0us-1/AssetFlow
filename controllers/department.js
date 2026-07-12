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
