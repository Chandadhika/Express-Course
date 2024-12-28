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
router.get('/', (req, res) => {
    const limit = parseInt(req.query.limit);

    // နံပါတ်ရှိရင် ရှိတဲ့နံပါတ်က 0ထက် ကြီးရင် 
    if (!isNaN(limit) && limit > 0) {
        res.status(200).json(posts.slice(0, limit));
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
router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);

    if (!post) {
        res.status(404).json({ msg: `A post with the id of ${id} was not found`});
    } else {
        res.status(200).json(post);
    }
 });

//  Create new post
router.post('/', (req, res) => {
    // console.log(req.body);
    const newPost = {
            id: posts.length + 1,
            title: req.body.title,
    };

    if (!newPost.title) {
            return res.status(400).json({msg: `please include a title`});
    }
    posts.push(newPost);
    res.status(201).json(posts);
});

 export default router;

// module.exports = router;

