route = require("express").Router()

const {homeController} = require("../controllers/homeController")


route.get("/",homeController)


exports.homeRoute = route