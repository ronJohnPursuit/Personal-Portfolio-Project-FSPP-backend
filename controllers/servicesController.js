const express = require("express");
// const confirmHealth = require("../confirmHealth")

const {
  getAllServices,
  getOneServices,
  createServices,
  deleteServices,
  updateServices,
} = require("../queries/services");

// const {
//   checkName,
//   checkBoolean,
//   validateAndSetImage,
// } = require("../validations/checkServices");

const services = express.Router();

services.get("/", async (req, res) => {
  const allServices = await getAllServices();

  if (allServices[0]) {
    res.status(200).json(allServices);
  } else {
    res.status(500).json({ error: "server error" });
  }
});

services.get("/:id", async (req, res) => {
  const { id } = req.params;
  const services = await getOneServices(id);
  if (!services.message) {
    res.json(services);
  } else {
    res.status(404).json({ error: "not found" });
  }
});

// my values for my additional fees keeps coming back NULL !!!!

services.post(
  "/",
  // validateAndSetImage,
  // checkName,
  // checkBoolean,
  // confirmHealth,
  async (req, res) => {
    const copy = { ...req.body };
    const updatedServices2 = req.body.name
      .trim()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
    copy.name = updatedServices2;
    try {
      const services = await createServices(copy);
      res.status(200).json(services);
    } catch (error) {
      res.status(400).json({ error: "Services not Healthy" });
    }
  }
);

services.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedServices = await deleteServices(id);
  if (deletedServices.id) {
    res.status(200).json(deletedServices);
  } else {
    res.status(404).json("Services not found");
  }
});

// services.put(
//   “/:id”,
//   checkName,
//   checkBoolean,
//   validateAndSetImage,
//   async (req, res) => {
//     try {
//       const { id } = req.params
//       const updatedServices = await updateServices(id, req.body)
//       res.status(200).json(updatedServices)
//     } catch (error) {
//       res.status(404).json({ error: `Page not found` })
//     }
//   }
// )

services.put(
  "/:id",
  // checkName,
  // checkBoolean,
  // validateAndSetImage,
  async (req, res) => {
    const { id } = req.params;
    const updatedServices = await updateServices(id, req.body);
    if (!updatedServices.message) {
      res.status(200).json(updatedServices);
    } else {
      res.status(404).json({ error: `Page not found` });
    }
  }
);

module.exports = services;
