const { validationResult } = require("express-validator")
const {PostModel} = require("../models")

const createpostController = (req, res) => {
    const user = req.session.user 
    let errors = null
    res.render("pages/createpost", {user, errors})
}

const createpostControllerPost = (req, res) => {
    const result = validationResult(req)
    if (result.errors.length) {
        let user = req.session.user 
        res.render("pages/createpost", {user, errors: result.errors})
    }
    else {
        const newPost = new PostModel({ title: req.body.title, body: req.body.body, owner: req.session.user })
        newPost.save()
        res.redirect("/")
    }
}

module.exports = {
    createpostController,
    createpostControllerPost
}