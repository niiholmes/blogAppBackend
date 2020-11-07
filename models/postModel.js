const mongoose = require('mongoose')
const Schema = mongoose.Schema


const postSchema = new Schema({
    title: String,
    description: String,
    date: { type: Date, default: Date.now },
    author: String,
    content: String,
    upVotes: Number,
    downVotes: Number
})
 const Post = mongoose.model('posts' , postSchema)

 module.exports = Post