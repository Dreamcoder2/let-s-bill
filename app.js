const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const app = express();
app.use(express.json());
dotenv.config();

// ROUTE IMPORTS
const appuserRoute = require("./Routes/appuser");

// MIDDLEWARES
app.use("/v1/appuser", appuserRoute);

// CONNECT TO DB
mongoose
  .connect(process.env.MONGO_URL)
  .then((result) => {
    app.listen(4000);
    console.log("db connected & server started");
  })
  .catch((err) => {
    console.log(err);
  });
