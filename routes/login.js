const route = require("express").Router()
const {body} = require("express-validator")
const {loginController, loginControllerPost} = require("../controllers/loginController")

route.get("/login", loginController)
route.post("/login", body("username").isLength({min: 5, max: 15}), body("password").isLength({ min: 8, max: 16}), loginControllerPost)

module.exports = {
    loginRoute: route
}