const express = require("express")
const {homeRoute} = require("./routes/home")

const app = express()
app.use(express.static("public"))
app.set("view engine", "ejs")

app.use(homeRoute)



app.listen(3000)
