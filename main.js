const express = require("express")
const {homeRoute} = require("./routes/home")
const {loginRoute} = require("./routes/login")
const {registerRoute} = require("./routes/register.js")
const { viewpostRoute } = require("./routes/viewpost")
const bodyParser = require("body-parser")
const session = require("express-session")
const { connectDB } = require("./models")
const { createpostRoute } = require("./routes/createpost")
const { isLoggedIn, isLoggedOut } = require("./middlewares/SessionMiddleware")
const { editpostRoute } = require("./routes/editpost")
const { isOwner } = require("./middlewares/Authorization")
const { deletepostRoute } = require("./routes/deletepost")
const { addcommentRoute } = require("./routes/addcomment")
const { deletecommentRoute } = require("./routes/deletecomment")
const { logoutRoute } = require("./routes/logout")
require("dotenv").config()

const app = express()
connectDB()
app.use(session({secret: process.env.SESSION_SECRET}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static("public"))
app.set("view engine", "ejs")

// Home page
app.use(homeRoute)
app.use(viewpostRoute)

// Auth pages
app.use("/auth", logoutRoute)
app.use("/auth",isLoggedOut, loginRoute)
app.use("/auth",isLoggedOut, registerRoute)

// User Activities
app.use(isLoggedIn, createpostRoute)
app.use(isLoggedIn, isOwner, editpostRoute)
app.use(isLoggedIn, isOwner, deletepostRoute)
app.use(isLoggedIn, addcommentRoute)
app.use(isLoggedIn, deletecommentRoute)





app.listen(3000)