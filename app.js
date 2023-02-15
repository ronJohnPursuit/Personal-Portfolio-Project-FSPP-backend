// IMPORTS
const express = require("express");
const cors = require("cors");
const ServiceController = require("./controllers/ServiceController");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(express.json());
app.use(cors());
app.use("/snacks", ServiceController);

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to the Snacks App");
});

// 404 page
app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});

//test

module.exports = app;
