const route = require("express").Router()
const {loginController} = require("../controllers/loginController")

route.get("/login", loginController)

module.exports = {
    loginRoute: route
}