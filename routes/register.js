const route = require("express").Router()
const { registerController, registerControllerPost } = require("../controllers/registerController.js")
const { body } = require('express-validator');



route.get("/register", registerController)
route.post("/register",body("username").isLength({ min: 5, max: 15 }), body("password").isLength({ min: 8, max: 16 }),body("email").isEmail(), registerControllerPost)

module.exports = {
    registerRoute: route
}