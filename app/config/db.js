const mongoose = require("mongoose");

/**
 * @description Connect to MongoDB
 * @returns {Promise}
 */
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.bold);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDB;
