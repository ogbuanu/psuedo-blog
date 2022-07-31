const route = require("express").Router()
const {deletecommentController} = require("../controllers/deletecommentController.js")
route.get("/:postId/deletecomment/:commentId", deletecommentController)

module.exports = {
    deletecommentRoute: route
}