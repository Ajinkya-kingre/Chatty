const express = require("express");
const connectionDB = require("./db/db");

// user Model
const userModel = require("./model/user");

//mongoDB connection
connectionDB();

// app use
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("welcome");
});


// localhost 
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on Port ${PORT}`);
});
