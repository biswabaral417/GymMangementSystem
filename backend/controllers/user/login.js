const jwt = require('jsonwebtoken');
const User = require('../../db/models/user');
const bcrypt = require('bcrypt');
const generateAuthTokens = require('../../middlewares/generateAuthTokens');

const login = async (req, res) => {
    const { Phone, Password } = req.body;
    try {
        const existingUser = await User.findOne({ Phone });
        if (!existingUser) return res.status(401).json({ message: 'Invalid phone number or password' });
        const isMatch = await bcrypt.compare(Password, existingUser.Password);
        if (!isMatch) return res.status(401).json({ message: 'Invalid phone number or password' });

        const { accessToken, refreshToken } = await generateAuthTokens(existingUser);
        const { Password: _, tokens: __, _id: ___, ...userDataToSendBack } = existingUser.toObject();

        res.cookie('jwt', accessToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
        });

        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
        });

        return res.status(200).json({ message: 'Login successful',user:userDataToSendBack });
} catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({ error: 'Internal server error' });
}
};

module.exports = login;
