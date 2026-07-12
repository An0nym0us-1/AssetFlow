const express = require("express");
const router = express.Router();

const allocationController = require("../controllers/allocation");

router
  .route("/")
  .get(allocationController.index)
  .post(allocationController.createAllocation);

router.get("/new", allocationController.renderNewForm);

module.exports = router;
