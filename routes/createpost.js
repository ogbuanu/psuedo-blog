const route = require("express").Router()
const { createpostController, createpostControllerPost } = require("../controllers/createpostController.js")
const {body} = require("express-validator")

route.get("/createpost", createpostController)
route.post("/createpost", body("title").isLength({min: 6}), body("body").isLength({min: 15}), createpostControllerPost)

module.exports = {
    createpostRoute: route
}