const express = require("express");
const connectionDB = require("./db/db");
const routes = require("./routes/auth/authRoute");
require("dotenv").config();
 // remove this after you've confirmed it is working

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

//auth routes
app.use("/api/auth", routes);

//
// route/router.js

const { authenticate } = require("./middleware/authUserMiddle");

app.route("/protected-route").get(authenticate, (req, res) => {
  // Only authenticated users can access this route
  res.json({
    message: "Protected route accessed successfully",
    user: req.user,
  });
});

// localhost
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on Port ${PORT}`);
});
