const { PostModel} = require("../models")

const deletecommentController = (req, res) => {
    
const postId = `${req.params.postId}`
const commentId = `${req.params.commentId}`
    PostModel.findOneAndUpdate({ _id: postId }, { $pull: {comments: {_id: commentId}} }, function (err, sucess) {
        if (err) {
            console.log(err);

        }
        // console.log(sucess);
         res.redirect(`/viewpost/${postId}`)
    })   
}

module.exports = {
    deletecommentController
}