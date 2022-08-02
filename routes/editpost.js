const route = require("express").Router();
const {
  editpostController,
  editpostControllerPost,
} = require("../controllers/editpostController.js");
const { body } = require("express-validator");
const { isLoggedIn } = require("../middlewares/SessionMiddleware.js");
const { isOwner } = require("../middlewares/Authorization.js");

route.get("/editpost/:postId", isLoggedIn, isOwner, editpostController);
route.post(
  "/editpost/:postId",
  isLoggedIn,
  isOwner,
  body("title").isLength({ min: 6 }),
  body("body").isLength({ min: 15 }),
  editpostControllerPost
);

module.exports = {
  editpostRoute: route,
};
