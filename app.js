const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("AssetFlow Running...");
});

app.listen(3000, () => {
  console.log("Server Started");
});
