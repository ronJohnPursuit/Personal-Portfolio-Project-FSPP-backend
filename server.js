// // DEPENDENCIES
// const app = require("./app");
// // CONFIGURATION
// require("dotenv").config();

// const express = require("express"); //Line 1
// // const app = express(); //Line 2
// const PORT = process.env.PORT; //Line 3

// // This displays message that the server running and listening to specified PORT
// app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`)); //Line 6

// // create a GET route
// app.get("/express_backend", (req, res) => {
//   //Line 9
//   res.send({ express: "YOUR EXPRESS BACKEND IS CONNECTED TO REACT" }); //Line 10
// }); //Line 11

// DEPENDENCIES
const app = require("./app");

// CONFIGURATION
require("dotenv").config();
const PORT = process.env.PORT;

// LISTEN
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
