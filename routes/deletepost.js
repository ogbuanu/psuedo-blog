const route = require("express").Router()
const {deletepostController} = require("../controllers/deletepostController.js")

route.get("/deletepost/:postId", deletepostController)

module.exports = {
    deletepostRoute: route
}