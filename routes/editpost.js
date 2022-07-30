const route = require("express").Router()
const { editpostController, editpostControllerPost } = require("../controllers/editpostController.js")
const {body} = require("express-validator")

route.get("/editpost/:postId", editpostController)
route.post("/editpost/:postId", body("title").isLength({min: 6}), body("body").isLength({min: 15}), editpostControllerPost)

module.exports = {
    editpostRoute: route
}