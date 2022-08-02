const route = require("express").Router();
const {
  deletepostController,
} = require("../controllers/deletepostController.js");
const { isOwner } = require("../middlewares/Authorization.js");

route.get("/deletepost/:postId", isOwner, deletepostController);

module.exports = {
  deletepostRoute: route,
};
