const { PostModel } = require("../models")


const viewpostController = (req, res) => {
    const postId = `${req.params.postId}`
    const user = req.session.user || null
    PostModel.findOne({ _id: postId }, (err, post) => {
        if (err) {
            throw err
        }
        res.render("pages/viewpost", {user, post})

    })
}


module.exports = {
    viewpostController
}