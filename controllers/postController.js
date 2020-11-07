const Post = require('../models/postModel')

const postControl = {}

postControl.postBlog = async (req, res) => {
    try{
        const newBlog = new Post(req.body)
        let result = await newBlog.save()
        res.status(200).send({message: 'You dey form!', result})
    } catch(error){
        res.status(400).send({message:'Tweaa, you shaa ruff', error})
    }
}

//read
postControl.getAllPosts = async (req, res)=>{
    try{

        let result = await Post.find({})
        res.status(200).send(result)

    } catch (error){
        res.status(500).send({message: 'sorry could not get posts'})

    }
}
  
//read post

postControl.getPost = async (req, res) => {
    try{
        let result = await Post.findOne({title:req.params.title})
        res.status(200).send(result)

    } catch(error){
        res.status(404).send({message: 'sorry could not find post'})

    }
}

//update
postControl.updatePost= async (req, res) => {

    const {title,description, date, author, content, upVotes, downVotes} = req.body
    try{
        let result = await Post.findByIdAndUpdate({_id:req.params}, { title, description, date, author, content, upVotes, downVotes})
        res.status(200).send(result)

    } catch(error){
        res.status(404).send({message: 'sorry could not update post'})

    }
}


//delete
postControl.deletePost= async (req, res) =>{
    try{

        let result = await Post.findByIdAndDelete({_id:req.params})
        res.status(200).send({message: ' post successfully deleted'})
    } catch(error){
        res.status(500).send({message: 'sorry post could not be deleted. Please try again.'})

    }
}


module.exports = postControl
