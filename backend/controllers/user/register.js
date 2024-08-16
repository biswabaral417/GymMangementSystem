const User = require('../../db/models/user');

const register = async (req, res) => {
    const { Name, Address, Phone, Email, Password } = req.body;
    try {
        // Check if the user already exists
        const existingUser = await User.findOne({ Phone });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Create a new user
        const newUser = new User({ Name, Address, Phone, Email, Password });
        await newUser.save();

        return res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = register;
