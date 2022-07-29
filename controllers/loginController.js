const {validationResult} = require("express-validator")
const { UserModel } = require("../models")
const bcrypt = require("bcrypt")

const loginController = (req, res) => {
    let errors = null
    let message = null
    res.render("pages/auth/login", {message, errors})
}
const loginControllerPost = (req, res) => {
    let errors = null
    let message = null
    let result = validationResult(req)
    if (result.errors.length) {
        res.render("pages/auth/login", {errors: result.errors, message})
    }
    else {
        UserModel.findOne({ username: req.body.username }, async (err, user) => {
            if (err) {
                throw err
            }
            if (user) {
                const validPassword = await bcrypt.compare(req.body.password, user.password);
                if (validPassword) {
                    req.session.user = user
                    res.redirect("/")
                }
                else {
                   res.render("pages/auth/login", {message: "invalid", errors})
                }
            }
            else {
                res.render("pages/auth/login", {message: "invalid", errors})
            }
        })
    }
}

module.exports = {
    loginController,
    loginControllerPost
}