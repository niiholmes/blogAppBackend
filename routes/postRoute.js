const {Router} = require('express')
const router=Router()
const {postBlog, getAllPosts, getPost, updatePost, deletePost} = require('../controllers/postController')


//create =post
router.post('/api/post/new', postBlog)


//read =get
router.get('/api/post/find', getAllPosts)

router.get('/api/post/:title', getPost)

//update=put
router.put('/api/post/update', updatePost)

//delete=delete
router.delete('/api/post/delete', deletePost)



module.exports = router