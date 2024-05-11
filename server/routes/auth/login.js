const express = require("express");
const router = express.Router();
const userModel = require("../../model/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");





//Login
router.post("/login", async (req, res) => {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        return res.status(400).send("Please fill all the required fields");
      }
  
      const user = await userModel.findOne({ email });
      if (!user) {
        return res.status(400).send("User's email or password is incorrect");
      }
  
      const validateUser = await bcrypt.compare(password, user.password);
      if (!validateUser) {
        return res.status(400).send("User's email or password is incorrect");
      }
  
      // Generate JWT token
      const payload = {
        userId: user._id,
        email: user.email,
      };
  
      const JWT_SECRET_KEY =
        process.env.JWT_SECRET_KEY || "THIS_IS_JWT_SECRET_KEY";
      jwt.sign(
        payload,
        JWT_SECRET_KEY,
        { expiresIn: 84600 },
        async function (err, token) {
          if (err) {
            console.error("JWT signing error:", err);
            return res.status(500).json({ message: "Internal server error" });
          }
  
          // Update user document with the token
          await userModel.updateOne(
            { _id: user._id },
            { $set: { usertoken: token } }
          );
  
          // Send response with user object and token
          res
            .status(200)
            .json({
              user: { username: user.username, email: user.email },
              token,
            });
        }
      );
    } catch (error) {
      console.error("Login error:", error);
      res.status(500).json({ message: "Server error" });
    }
  });

  module.exports = router;

  