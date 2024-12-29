// const express = require('express');
import express from 'express';
import { 
    getPosts,
    getPost,
    createPost,
    updatePost,
    deletePost,
} from '../controllers/postController.js';

const router = express.Router();





// // Rout ကို တည်ဆောက်ခြင်း
// cddk.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// //about rout
// cddk.get('/about', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'about.html'));
// });




// Get all post
// query
// cddk.get('/api/posts', (req, res) => {
//     console.log(req.query);
//     res.json(posts);
// });

// limit
// status(200)
router.get('/', getPosts);

// Get single post
// filter
// cddk.get('/api/posts/:id', (req, res) => {
//     const id = parseInt(req.params.id);
//     res.json(posts.filter((post) => post.id === id));
//     });

// find
// Get single post
router.get('/:id', getPost);

//  Create new post
router.post('/', createPost);

// Update Post
router.put('/:id', updatePost);

// Delete Post
router.delete('/:id', deletePost);

 
export default router;

// module.exports = router;

