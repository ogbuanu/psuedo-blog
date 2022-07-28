const editPost = require("express").Router()
const {editPostController} = require("../controllers/editPostController")
editPost.get("/editPost", editPostController)
const {editPostController, editPostControllerPost} = require("../controllers/editPostController")
editPost.get("/editPost/:postId", editPostController)
editPost.post("/editpost/:postId", editPostControllerPost)

exports.editPostRoute = editPost 