const route = require("express").Router()
const {registerController} = require("../controllers/registerController.js")


route.get("/register", registerController)

module.exports = {
    registerRoute: route
}