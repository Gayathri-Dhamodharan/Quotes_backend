const mongoose = require("mongoose");

const dbconnection = async () => {
  try {
    console.log("Trying to connect to MongoDB...");
    console.log("MONGO_URI exists:", !!process.env.MONGO_URI);

    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    process.exit(1);
  }
};

module.exports = dbconnection;
