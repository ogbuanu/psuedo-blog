const route = require("express").Router();
const {
  addcommentController,
} = require("../controllers/addcommentController.js");
const { isLoggedIn } = require("../middlewares/SessionMiddleware.js");

route.post("/:postId/addcomment", isLoggedIn, addcommentController);

module.exports = {
  addcommentRoute: route,
};
