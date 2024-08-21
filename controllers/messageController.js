const Message = require('../models/Message');

exports.createMessage = async (req, res) => {
    const { content } = req.body;
    try {
        const message = await Message.create({ user: req.user.id, content });
        res.json(message);
    } catch (err) {
        res.status(400).json({ error: 'Could not send message' });
    }
};

exports.getMessages = async (req, res) => {
    try {
        const messages = await Message.find().populate('user', 'username').sort({ createdAt: -1 });
        res.json(messages);
    } catch (err) {
        res.status(400).json({ error: 'Could not fetch messages' });
    }
};
