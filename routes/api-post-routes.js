const express = require('express');
const {
   getPost,
   deletePost,
   editPost,
   getPosts,
   addPost,
} = require('../controllers/api-post-controller')

const router = express.Router();

// Get All Posts
router.get('/api/posts', getPosts)

// Get Add New Posts
router.post('/api/post', addPost);

// Get Post By Id
router.get('/api/post/:id', getPost);

// Delete Post By Id
router.delete('/api/post/:id', deletePost);

// Update Post By Id
router.put('/api/post/:id', editPost);

module.exports = router;