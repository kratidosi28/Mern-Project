const { header, body } = require("express-validator")

exports.signIn = [
    body("email", "Email is required").trim().notEmpty(),
    body("password", "Password is required").trim().notEmpty()
        .isLength({ min: 8 }).withMessage("Password must have minimum 8 characters!!"),
]

exports.signUp = [
    body("name", "Name is required").trim().notEmpty(),
    body("userName", "Username is required").trim().notEmpty(),
    body("email", "Email is required").trim().notEmpty().isEmail(),
    body("password", "Password is required").trim().notEmpty()
         .isLength({ min: 8 }).withMessage("Password must have minimum 8 characters!!")
]