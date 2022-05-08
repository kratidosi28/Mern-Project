const express = require("express")
const router = express.Router()

const userController = new(require("../Controllers/User.Controller"))()
const userValidators = require("../Middleware/Validators/User.Validator")

//Sign In
router.route("/sign-in")
    .post(userValidators.signIn, userController.signIn)

//Sign Up
router.route("/sign-up")
    .post(userValidators.signUp, userController.signUp)

module.exports = router;