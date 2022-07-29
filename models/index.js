const mongoose = require("mongoose")

const UserSchema = mongoose.Schema({
    username: String,
    email: String,
    password: String,
})

const CommentSchema = mongoose.Schema({
    body: String,
    owner: UserSchema,
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

const PostSchema = mongoose.Schema({
    title: String,
    body: String,
    owner: UserSchema,
    comments: [CommentSchema],
    createdAt: {
        type: Date,
        default: Date.now()
    }
})
const connectDB = () => {
    mongoose.connect("mongodb://localhost/psuedo")
}

module.exports = {
    UserModel: mongoose.model("User", UserSchema),
    PostModel: mongoose.model("Post", PostSchema),
    connectDB
}