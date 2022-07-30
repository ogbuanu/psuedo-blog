const {PostModel} = require("../models")
const deletepostController = (req, res) => {
    const postId = `${req.params.postId}`
    return PostModel.findOneAndDelete({ _id: postId }, (err, post) => {
        if (err) {
            throw err
        }
        return res.redirect("/")
    })
}

module.exports = {
    deletepostController
}