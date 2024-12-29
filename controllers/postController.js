// Object
let posts = [
    {id: 1, title: 'Post One'},
    {id: 2, title: 'Post Two'},
    {id: 3, title: 'Post Three'},
];


// @desc Get all posts
// @route GET /api/posts
export const getPosts = (req, res, next) => {
    const limit = parseInt(req.query.limit);

    // နံပါတ်ရှိရင် ရှိတဲ့နံပါတ်က 0ထက် ကြီးရင် 
    if (!isNaN(limit) && limit > 0) {
       return res.status(200).json(posts.slice(0, limit));
    } else {
        res.status(200).json(posts);
    }
};

// @desc single post
// @desc /api/posts/:id
export const getPost = (req, res, next) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);

    if (!post) {
       const error = new Error(`A post with the id of ${id} was not found`);
       error.status = 404;
       return next(error);
    } 
        res.status(200).json(post);
 };

 // @desc   Get new post
// @desc    POST /api/posts/:id
export const createPost = (req, res, next) => {
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
};

// @desc   Update post
// @desc    PUT /api/posts/:id
export const updatePost =(req, res, next) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);

    if (!post) {
        return res.status(404)
        .json({ msg: `A post with the id of ${id} was not found`});
    }
    post.title = req.body.title;
    res.status(200).json(posts);
};

// @desc   Delete post
// @desc    DELETE /api/posts/:id
export const deletePost = (req, res) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);

    if (!post) {
        return res.status(404)
        .json({ msg: `A post with the id of ${id} was not found`});
    }
    posts = posts.filter((post) => post.id !== id);
    res.status(200).json(posts);
};