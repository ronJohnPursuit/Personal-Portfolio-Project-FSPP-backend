// IMPORTS
const express = require("express");
const cors = require("cors");
const servicesController = require("./controllers/servicesController");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(express.json());
app.use(cors());
app.use("/Services", servicesController);

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to Leaf Services App");
});

// 404 page
app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});

//test

module.exports = app;
