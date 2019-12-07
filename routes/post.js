const {
    Router
} = require('express');

const Post = require('../models/Post');
const User = require('../models/User');
const isAuth = require('../middlewares/auth');

const router = Router({
    strict: 'true'
});

// @ROUTE           >  GET  /api/posts
// @DESC            >  GET ALL POSTS
// @ACCESS CONTROL  >  PUBLIC
router.get('/', async (req, res, next) => {
    try {
        const posts = await Post.find().sort({
            date: -1
        }).exec();
        if (!posts || posts.length < 1) return res.status(409).send('Posts not found!');
        return res.status(200).json(posts);
    } catch (error) {
        console.log(error.message);
        return res.status(500).send('Something went wrong!');
    }
});


// @ROUTE           >  GET  /api/posts/:id
// @DESC            >  GET SINGLE POST
// @ACCESS CONTROL  >  PUBLIC
router.get('/:id', async (req, res, next) => {
    const {
        id
    } = req.params;

    try {
        const post = await Post.findById(id).exec();
        if (!post) return res.status(409).send('Post does not exist!');
        return res.status(200).json(post);
    } catch (error) {
        console.log(error.message);
        return res.status(500).send('Something went wrong!');
    }
});


// @ROUTE           >  POST  /api/posts
// @DESC            >  ADD POSTS
// @ACCESS CONTROL  >  PRIVATE
router.post('/', isAuth, async (req, res, next) => {
    let post;
    const {
        title,
        description
    } = req.body;

    if (!title || !description) return res.status(400).send('Invalid fields!');
    try {
        const user = await User.findById(req.user.id).exec();
        if (!user) return res.status(400).send('No user found, You are not authorized!');

        post = new Post({
            title,
            description,
            owner: req.user.id
        });
        post = await post.save();

        user.posts.push(post);
        await user.save();

        return res.status(201).json(post);
    } catch (error) {
        console.log(error.message);
        return res.status(500).send('Something went wrong!');
    }
});


// @ROUTE           >  PATCH  /api/posts
// @DESC            >  UPDATE EXISTING POST
// @ACCESS CONTROL  >  PRIVATE
router.put('/:id', isAuth, async (req, res, next) => {
    const {
        id
    } = req.params;
    const {
        title,
        description
    } = req.body;

    if (!title || !description) return res.status(400).send('Invalid fields!');

    try {
        const user = await User.findById(req.user.id).exec();
        if (!user) return res.status(401).send('No user found, You are not authorized!');

        const post = await Post.findById(id).exec();
        if (!post) return res.status(409).send('Post does not exist!');

        const payload = {
            title,
            description
        };

        const isUpdated = await Post.findByIdAndUpdate({
            _id: id.toString()
        }, {
            $set: payload
        }).exec();

        user.posts.map(post => post.id === id ? isUpdated : post);

        return res.status(200).json(isUpdated);

    } catch (error) {
        console.log(error.message);
        return res.status(500).send('Something went wrong!');
    }
});


// @ROUTE           >  DELETE  /api/posts
// @DESC            >  DELETE EXISTING POST
// @ACCESS CONTROL  >  PRIVATE
router.delete('/:id', isAuth, async (req, res, next) => {
    const {
        id
    } = req.params;

    try {
        const user = await User.findById(req.user.id).exec();
        if (!user) return res.status(401).send('No user found, You are not authorized!');

        const post = await Post.findById(id).exec();
        if (!post) return res.status(409).send('Post does not exist!');

        const findIndex = user.posts.map(post => post._id).indexOf(id.toString());
        user.posts.splice(findIndex, 1);

        await user.save();
        await post.remove();

        return res.status(200).send('Post deleted successfully!');
    } catch (error) {
        console.log(error.message);
        return res.status(500).send('Something went wrong!');
    }
});


module.exports = router;