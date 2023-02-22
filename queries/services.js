const db = require("../db/dbConfig.js");
// ROUTES

//All - (Index) route
const getAllServices = async () => {
  try {
    const allServices = await db.any("SELECT * FROM services");
    return allServices;
  } catch (error) {
    return error;
  }
};

// One (Show) Route
const getOneServices = async (id) => {
  try {
    const oneServices = await db.one("SELECT * FROM services WHERE id=$1", id);
    return oneServices;
  } catch (error) {
    return error;
  }
};

// CREATE - (New) route
const createServices = async (services) => {
  try {
    const createdOneServices = await db.one(
      "INSERT INTO services (name,descript, starting_rate, add_service, add_serviceprice, add_service2, add_service2price, date_service, image) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *",
      [
        services.name,
        services.descript,
        services.starting_rate,
        services.add_service,
        services.add_serviceprice,
        services.add_service2,
        services.add_service2price,
        services.date_service,
        services.image,
      ]
    );
    return createdOneServices;
  } catch (error) {
    return error;
  }
};

// DELETE
const deleteServices = async (id) => {
  try {
    const deletedServices = await db.one(
      "DELETE FROM services WHERE id=$1 RETURNING *",
      id
    );
    return deletedServices;
  } catch (error) {
    return error;
  }
};

// UPDATE
const updateServices = async (id, services) => {
  try {
    const updatedServices = await db.one(
      "UPDATE services SET name=$1, descript=$2, starting_rate=$3, add_service=$4, add_serviceprice=$5, add_service2=$6, add_service2price=$7, date_service=$8, image=$9 WHERE id=$10 RETURNING *",
      [
        services.name,
        services.descript,
        services.starting_rate,
        services.add_service,
        services.add_serviceprice,
        services.add_service2,
        services.add_service2price,
        services.date_service,
        services.image,
        id,
      ]
    );
    return updatedServices;
  } catch (error) {
    return error;
  }
};
//
module.exports = {
  getAllServices,
  getOneServices,
  createServices,
  deleteServices,
  updateServices,
};
