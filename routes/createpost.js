const route = require("express").Router();
const {
  createpostController,
  createpostControllerPost,
} = require("../controllers/createpostController.js");
const { body } = require("express-validator");
const { isLoggedIn } = require("../middlewares/SessionMiddleware.js");

route.get("/createpost", isLoggedIn, createpostController);
route.post(
  "/createpost",
  isLoggedIn,
  body("title").isLength({ min: 6 }),
  body("body").isLength({ min: 15 }),
  createpostControllerPost
);

module.exports = {
  createpostRoute: route,
};
