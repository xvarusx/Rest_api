const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.db);
    console.log("db connected.....");
  } catch (error) {
    console.error(error.message);
  }
};
module.exports = connectDB;
