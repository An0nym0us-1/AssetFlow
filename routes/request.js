const express = require("express");
const router = express.Router();

router.get("/new", (req, res) => {
  res.render("request/new");
});

router.post("/", (req, res) => {
  res.redirect("/");
});
module.exports = router;
