const { validationResult } = require('express-validator');
const bcrypt = require("bcrypt");
const {UserModel} = require("../models")
const registerController = (req, res) => {
    const errors = null
    const message = null
    res.render("pages/auth/register", {errors, message})
}
const registerControllerPost = (req, res) => {
    let message = null
    let errors
    if (req.body.username && req.body.email && req.body.password) {
        const result = validationResult(req)
        if (result.errors.length) {
            console.log(result);
    res.render("pages/auth/register", {errors: result.errors, message})
        return    
        }
        else {
            return UserModel.findOne({ username: req.body.username }, async (err, user) => {
                    if (err) {
                        throw err
                }
                if (user) {
                    res.render("pages/auth/register", {message: "alreadyExist", errors})
                }
                else {
                    const salt = await bcrypt.genSalt(10);
                    const newUser = new UserModel(req.body)
                    newUser.password = await bcrypt.hash(newUser.password, salt)
                    newUser.save()
                    return res.redirect("/auth/login")
                }
           })
        }
        
    }
    res.redirect("/auth/register")
}

module.exports = {
    registerController,
    registerControllerPost
}