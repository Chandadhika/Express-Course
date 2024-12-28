// const express = require('express');
import express from 'express';

const router = express.Router();



// setup static folder
// cddk.use(express.static(path.join(__dirname, 'public')));

// // Rout ကို တည်ဆောက်ခြင်း
// cddk.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// //about rout
// cddk.get('/about', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'about.html'));
// });


// Object
let posts = [
    {id: 1, title: 'Post One'},
    {id: 2, title: 'Post Two'},
    {id: 3, title: 'Post Three'},
];

// Get all post
// query
// cddk.get('/api/posts', (req, res) => {
//     console.log(req.query);
//     res.json(posts);
// });

// limit
// status(200)
router.get('/', (req, res, next) => {
    const limit = parseInt(req.query.limit);

    // နံပါတ်ရှိရင် ရှိတဲ့နံပါတ်က 0ထက် ကြီးရင် 
    if (!isNaN(limit) && limit > 0) {
       return res.status(200).json(posts.slice(0, limit));
    } else {
        res.status(200).json(posts);
    }
});

// Get single post
// filter
// cddk.get('/api/posts/:id', (req, res) => {
//     const id = parseInt(req.params.id);
//     res.json(posts.filter((post) => post.id === id));
//     });

// find
router.get('/:id', (req, res, next) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);

    if (!post) {
       const error = new Error(`A post with the id of ${id} was not found`);
       error.status = 404;
       return next(error);
    } 
        res.status(200).json(post);
 });

//  Create new post
router.post('/', (req, res, next) => {
    // console.log(req.body);
    const newPost = {
            id: posts.length + 1,
            title: req.body.title,
    };

    if (!newPost.title) {
        const error = new Error(`Please include a title`);
       error.status = 404;
       return next(error);
    }
    posts.push(newPost);
    res.status(201).json(posts);
});

// Update Post
router.put('/:id', (req, res, next) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);

    if (!post) {
        return res.status(404)
        .json({ msg: `A post with the id of ${id} was not found`});
    }
    post.title = req.body.title;
    res.status(200).json(posts);
});

// Delete Post
router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);

    if (!post) {
        return res.status(404)
        .json({ msg: `A post with the id of ${id} was not found`});
    }
    posts = posts.filter((post) => post.id !== id);
    res.status(200).json(posts);
});

 export default router;

// module.exports = router;

