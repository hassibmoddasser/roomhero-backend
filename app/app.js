const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");

// load enviroment variables from .env file
const envConfig = dotenv.config();

const { errorHandler } = require("./middlewares/error");
const connectDB = require("./config/db");

// connect to database
connectDB();

// create an Express application
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/supplier", require("./routes/v1/admin/private/supplier.route"));

app.use(errorHandler);

module.exports = app;
