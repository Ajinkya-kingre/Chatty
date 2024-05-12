// route/router.js
const express = require("express");
const router = express.Router();
const { registrationSchema,loginSchema} = require("../../validator/authValid.js")
const {register, login} = require("../../controller/authController")
const validate = require("../../middleware/authMiddle.js")



router.route("/register").post(validate(registrationSchema),register)
router.route("/login").post(validate(loginSchema),login)



module.exports = router;