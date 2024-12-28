// @desc Get all posts
// @route GET /api/posts

const getPosts = (req, res, next) => {
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
const getPost = (req, res, next) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);

    if (!post) {
       const error = new Error(`A post with the id of ${id} was not found`);
       error.status = 404;
       return next(error);
    } 
        res.status(200).json(post);
 };

 // @desc single post
// @desc /api/posts/:id