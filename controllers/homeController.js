const { PostModel } = require("../models")


const homeController = async (req, res) => {
    const user = req.session.user || null
     PostModel.find({}, (err, posts) => {
        if (err) {
            throw err
        }
        res.render("index", {user, posts})

    })
}

exports.homeController = homeController