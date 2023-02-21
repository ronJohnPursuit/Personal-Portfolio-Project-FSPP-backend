const db = require("../db/dbConfig.js");
// ROUTES

//All - (Index) route
const getAllSnack = async () => {
  try {
    const allSnacks = await db.any("SELECT * FROM snacks");
    return allSnacks;
  } catch (error) {
    return error;
  }
};

// One (Show) Route
const getOneSnack = async (id) => {
  try {
    const oneSnacks = await db.one("SELECT * FROM snacks WHERE id=$1", id);
    return oneSnacks;
  } catch (error) {
    return error;
  }
};

// CREATE - (New) route
const createSnack = async (snacks) => {
  try {
    const createdOneSnacks = await db.one(
      "INSERT INTO snacks (name,descript, starting_rate, add_service, add_serviceprice, add_service2, add_service2price, date_service, image) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *",
      [
        snacks.name,
        snacks.descript,
        snacks.starting_rate,
        snacks.add_service,
        snacks.add_serviceprice,
        snacks.add_service2,
        snacks.add_service2price,
        snacks.date_service,
        snacks.image,
      ]
    );
    return createdOneSnacks;
  } catch (error) {
    return error;
  }
};

// DELETE
const deleteSnack = async (id) => {
  try {
    const deletedSnacks = await db.one(
      "DELETE FROM snacks WHERE id=$1 RETURNING *",
      id
    );
    return deletedSnacks;
  } catch (error) {
    return error;
  }
};

// UPDATE
const updateSnack = async (id, snacks) => {
  try {
    const updatedSnacks = await db.one(
      "UPDATE snacks SET name=$1, descript=$2, starting_rate=$3, add_service=$4, add_serviceprice=$5, add_service2=$6, add_service2price=$7, date_service=$8, image=$9 WHERE id=$10 RETURNING *",
      [
        snacks.name,
        snacks.descript,
        snacks.starting_rate,
        snacks.add_service,
        snacks.add_serviceprice,
        snacks.add_service2,
        snacks.add_service2price,
        snacks.date_service,
        snacks.image,
        id,
      ]
    );
    return updatedSnacks;
  } catch (error) {
    return error;
  }
};
//
module.exports = {
  getAllSnack,
  getOneSnack,
  createSnack,
  deleteSnack,
  updateSnack,
};
