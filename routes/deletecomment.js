const route = require("express").Router();
const {
  deletecommentController,
} = require("../controllers/deletecommentController.js");
const { isLoggedIn } = require("../middlewares/SessionMiddleware.js");
route.get(
  "/:postId/deletecomment/:commentId",
  isLoggedIn,
  deletecommentController
);

module.exports = {
  deletecommentRoute: route,
};
