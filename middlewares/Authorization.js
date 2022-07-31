const { PostModel } = require("../models")


const isOwner = (req, res, next) => {
    const user = req.session.user
    // const postId = `${req.params.postId}`
    const postId = req.params.postId
    
    PostModel.findOne({ id: postId }, (err, post) => {
  
        if (err) {
            throw err
        }
    //   console.log(user);
    //     next()
        if (post.owner._id == user._id) {
            next()
        }
        else {
            res.redirect(`/viewpost/${postId}`)
        }
    })
}

module.exports = {
    isOwner
}