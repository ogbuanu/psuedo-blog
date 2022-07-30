const {PostModel} = require("../models")

const addcommentController = (req, res) => {
    const postId = `${req.params.postId}`
    const user = req.session.user
    const comment = {
        body: req.body.body, 
        owner: user
    }
    PostModel.findOneAndUpdate({ _id: postId }, { $push: { comments: comment } }, (err, success) => {
        if (err) {
            throw err
        }
        res.redirect(`/viewpost/${postId}`)
    })
}

module.exports = {
    addcommentController
}