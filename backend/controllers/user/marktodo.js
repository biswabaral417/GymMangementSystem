const verifyAccessToken = require('../../middlewares/checkJWtoken');
const Todo = require('../../db/models/todo');

const markTodo = async (req, res) => {
    const { jwt: accessToken, refreshToken } = req.cookies;
    const { todo_id } = req.query;

    if (!accessToken) {
        return res.status(400).json({ message: 'No access token provided.' });
    }

    try {
        const { valid, accessToken: newAccessToken } = await verifyAccessToken(accessToken, refreshToken);

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

        const todo = await Todo.findOne({ _id: todo_id });
        if (!todo) {
            return res.status(404).json({ message: 'Todo not found.' });
        }

        if (todo.type !== 'daily') {
            todo.status = !todo.status;
            const savedTodo = await todo.save();
            return res.status(200).json({ message: 'Todo updated successfully.', todo: savedTodo });
        } else {
            const todayDate = (new Date()).toLocaleDateString();
            let dailyStatusEntry = todo.dailyStatus.find(entry => entry.date === todayDate);

            if (dailyStatusEntry) {
                dailyStatusEntry.status = !dailyStatusEntry.status;
            } else {
                todo.dailyStatus.push({ date: todayDate, status: true });
            }

            const savedTodo = await todo.save();
            return res.status(200).json({ message: 'Daily type todo updated successfully.', todo: savedTodo });
        }
    } catch (error) {
        console.error('Error updating todo:', error);
        return res.status(500).json({ message: 'Internal server error.' });
    }
};

module.exports = markTodo;
