const User = require('../../db/models/user');
const verifyAccessToken = require('../../middlewares/checkJWtoken');
const Todo = require('../../db/models/todo');

const getTodo = async (req, res) => {
    const { jwt: accessToken, refreshToken } = req.cookies;
    const { type } = req.query;

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

        let userWithTodos;

        if (type !== 'daily') {
            userWithTodos = await User.findById(user._id).populate({
                path: 'Todos',
                match: { type: type },
                select: '-dailyStatus' 
            });
        } else {
            userWithTodos = await User.findById(user._id).populate({
                path: 'Todos',
                match: {
                    type: 'daily'

                }
            });
        }

        if (!userWithTodos) {
            return res.status(404).json({ message: 'User not found.' });
        }

        const processedTodos = userWithTodos.Todos.map(todo => {
            console.log(todo)
            if (type === 'daily') {
                const todayDate = (new Date()).toLocaleDateString();
                const dailyStatusEntry = (todo.dailyStatus || []).find(statusEntry => statusEntry.date === todayDate);
                return {
                    ...todo.toObject(), 
                    status: dailyStatusEntry ? dailyStatusEntry.status  : false,
                    dailyStatus: undefined 
                };
            } else {
                return {...todo.toObject(),dailyStatus: undefined} 
            }
        });
        

        res.status(200).json({ message: 'Todos retrieved successfully.', todos: processedTodos });
    } catch (error) {
        console.error('Error fetching todos:', error);
        return res.status(500).json({ message: 'Internal server error.' });
    }
};

module.exports = getTodo;
