const express = require("express");
const router = express.Router();

const departmentController = require("../controllers/department");

router
  .route("/")
  .get(departmentController.index)
  .post(departmentController.createDepartment);

router.get("/new", departmentController.renderNewForm);

router.get("/:id/edit", departmentController.renderEditForm);

router
  .route("/:id")
  .put(departmentController.updateDepartment)
  .delete(departmentController.destroyDepartment);

module.exports = router;
