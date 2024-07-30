const mongoose = require("mongoose");

const mongoDbUrl = process.env.mongodburls;
const connectDb = () => {
  return mongoose.connect(mongoDbUrl);
};

module.exports = { connectDb };
