const express = require("express");
const dotenv = require("dotenv");

// load enviroment variables from .env file
const envConfig = dotenv.config();

const { errorHandler } = require("./middlewares/error");
const connectDB = require("./config/db");

// connect to database
connectDB();

// create an Express application
const app = express();

app.use(errorHandler);

module.exports = app;
