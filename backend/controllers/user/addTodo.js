const User = require('../../db/models/user');
const verifyAccessToken = require('../../middlewares/checkJWtoken');
const Todo = require('../../db/models/todo');

const addTodo = async (req, res) => {
    const { jwt: accessToken, refreshToken } = req.cookies;
    const todoData = { ...req.body, status: false, created: Date.now() };

    if (!accessToken) {
        return res.status(400).json({ message: 'No access token provided.' });
    }

    try {
        const { valid, user, accessToken: newAccessToken } = await verifyAccessToken(accessToken, refreshToken);
        
        if (!valid && !newAccessToken) {
            return res.status(401).json({ message: 'Invalid or expired access token.' });
        }

        if (newAccessToken) {
            res.cookie('jwt', newAccessToken, { 
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'lax',
                }); 
        }
        
        const newTodo = new Todo(todoData);
        const savedTodo = await newTodo.save();

        await User.updateOne(
            { _id: user._id },
            { $push: { Todos: savedTodo._id } }
        );

        res.status(200).json({ message: 'Todo added successfully.', todo: savedTodo });
    } catch (error) {
        console.error('Error adding todo:', error);
        return res.status(500).json({ message: 'Internal server error.' });
    }
};

module.exports = addTodo;
