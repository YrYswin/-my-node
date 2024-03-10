const express = require('express');
const {
   getPost,
   deletePost,
   getEditPost,
   editPost,
   getPosts,
   getAddPost,
   addPost,
} = require('../controllers/post-controller')

const router = express.Router();

router.get('/posts/:id', getPost);
router.delete('/posts/:id', deletePost);
router.get('/edit/:id', getEditPost);
router.put('/edit/:id', editPost);
router.get('/posts', getPosts);
router.get('/add-post', getAddPost);
router.post('/add-post', addPost);

router.use((req, res) => {
   const title = 'Not Found';
   res
      .status(404)
      .render(createPath('error'), { title });
});

module.exports = router;