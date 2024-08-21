const Post = require('../models/Post');

exports.createPost = async (req, res) => {
    const { content } = req.body;
    try {
        const post = await Post.create({ user: req.user.id, content });
        res.json(post);
    } catch (err) {
        res.status(400).json({ error: 'Could not create post' });
    }
};

exports.getPosts = async (req, res) => {
    try {
        const posts = await Post.find().populate('user', 'username').sort({ createdAt: -1 });
        res.json(posts);
    } catch (err) {
        res.status(400).json({ error: 'Could not fetch posts' });
    }
};
