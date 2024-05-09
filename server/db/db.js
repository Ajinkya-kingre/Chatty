const mongoose = require("mongoose");

const connectionDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://ajinkyavk143:rudyeris1234@cluster0.yf4tq6z.mongodb.net/"
    );
    console.log("MongoDB connected successfully !!");
  } catch (error) {
    console.log("MongoDB connection error::" + error);
  }
};

module.exports = connectionDB;
