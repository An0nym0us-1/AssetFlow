const express = require("express");
const router = express.Router();

const categoryController = require("../controllers/category");

router
  .route("/")
  .get(categoryController.index)
  .post(categoryController.createCategory);

router.get("/new", categoryController.renderNewForm);

router.get("/:id/edit", categoryController.renderEditForm);

router
  .route("/:id")
  .put(categoryController.updateCategory)
  .delete(categoryController.destroyCategory);

module.exports = router;
