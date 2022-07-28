<<<<<<< HEAD
//nonso
=======
const express = require("express")
const {homeRoute} = require("./routes/home")

const app = express()
app.use(express.static("public"))
app.set("view engine", "ejs")

app.use(homeRoute)



app.listen(3000)
>>>>>>> 2cad43b1c9106ee3414c21294717858daf21b18e
