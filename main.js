const express = require("express")
const {homeRoute} = require("./routes/home")
const {loginRoute} = require("./routes/login")
const {registerRoute} = require("./routes/register.js")
const { viewpostRoute } = require("./routes/viewpost")

const app = express()
app.use(express.static("public"))
app.set("view engine", "ejs")

// Home page
app.use(homeRoute)


// Auth pages
app.use("/auth", loginRoute)
app.use("/auth", registerRoute)

// User Activities

app.use(viewpostRoute)



app.listen(3000)