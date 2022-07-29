const route = require("express").Router()
const {logoutController} = require("../controllers/logoutController.js")

route.get("/logout", logoutController)

module.exports = {
    logoutController: route
}