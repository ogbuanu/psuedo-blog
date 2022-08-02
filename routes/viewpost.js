const route = require("express").Router();
const { viewpostController } = require("../controllers/viewpostController.js");

route.get("/viewpost/:postId", viewpostController);

module.exports = {
  viewpostRoute: route,
};
