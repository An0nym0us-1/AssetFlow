const express = require("express");
const router = express.Router();

const assetController = require("../controllers/asset");

router.route("/").get(assetController.index).post(assetController.createAsset);

router.get("/new", assetController.renderNewForm);

router
  .route("/:id")
  .get(assetController.showAsset)
  .put(assetController.updateAsset)
  .delete(assetController.destroyAsset);

router.get("/:id/edit", assetController.renderEditForm);

module.exports = router;
