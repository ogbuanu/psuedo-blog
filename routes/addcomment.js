const route = require("express").Router()
const {addcommentController} = require("../controllers/addcommentController.js")


route.post("/:postId/addcomment", addcommentController)

module.exports = {
    addcommentRoute: route
}