require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const dbConnection = require("./config/db");
const departmentRoutes = require("./routes/department");
const categoryRoutes = require("./routes/category");
const assetRoutes = require("./routes/asset");
const allocationRoutes = require("./routes/allocation");
const dashboardRoutes = require("./routes/dashboard");
const requestRoutes = require("./routes/request");

const PORT = process.env.PORT || 3000;

const app = express();

app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));

app.use("/departments", departmentRoutes);
app.use("/categories", categoryRoutes);

app.use("/assets", assetRoutes);
app.use("/allocations", allocationRoutes);
app.use("/", dashboardRoutes);
app.use("/request", requestRoutes);

//dashboard route
app.get("/dashboard", (req, res) => {
  res.render("dashboard/index");
});

dbConnection()
  .then(() => {
    console.log("MongoDB Connected");

    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
