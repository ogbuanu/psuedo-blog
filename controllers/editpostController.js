const { validationResult } = require("express-validator")
const {PostModel} = require("../models")

const editpostController = (req, res) => {
    const user = req.session.user 
    // const postId = `${req.params.postId}`
    const postId = `${req.params.postId}`
    let errors = null
    PostModel.findOne({ _id: postId }, (err, post) => {
        if (err) {
            throw err
        }

        res.render("pages/editpost", {user, errors, post})
    })
}

const editpostControllerPost = (req, res) => {
    const result = validationResult(req)
    const postId = `${req.params.postId}`

    if (result.errors.length) {
        let user = req.session.user 
        PostModel.findOne({ _id: postId}, (err, post) => {
            if (err) {
                throw err
            }
    
            res.render("pages/editpost", {user, errors, post})
        })
      
    }
    else {
        
        PostModel.findOneAndUpdate({ _id: postId }, req.body, (err, post) => {
            if (err) {
                throw err
            }

            res.redirect(`/viewpost/${post._id}`)
        })
    }
}

module.exports = {
    editpostController,
    editpostControllerPost
}