const express = require("express");
const router = express.Router();
const userModel = require("../../model/user");
const bcrypt = require("bcryptjs");


//register
router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      console.log("Please fill all the required fields")
      res.status(400).send("Please fill all the required fields");
    } else {
      const isEmailExist = await userModel.findOne({ email });
      if (isEmailExist) {
        return res.status(400).json({ message: "Email already exists" });
      } else {
        //hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new userModel({
          username,
          email,
          password: hashedPassword,
        });

        await newUser.save();

        res
          .status(200)
          .send({ message: "User created successfully!!!", user: newUser });
      }
    }
  } catch (error) {
    res.status(500).json({ message: "server Error" });
  }
});




module.exports = router;
