const route = require("express").Router()
const {logoutController} = require("../controllers/logoutController.js")
const { isLoggedIn } = require("../middlewares/SessionMiddleware.js")

route.get("/logout",isLoggedIn, logoutController)

module.exports = {
    logoutRoute: route
}