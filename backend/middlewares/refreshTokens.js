const User = require('../db/models/user');
const jwt = require('jsonwebtoken');

const refresh = async (refreshToken) => {
    try {
        if (!refreshToken) {
            return { valid: false, message: 'Refresh token not provided' };
        }

        const decoded = jwt.verify(refreshToken, process.env.REFRESH_SECRET_KEY);
        const user = await User.findOne({ _id: decoded._id, 'tokens.token': refreshToken });

        if (!user) {
            return { valid: false, message: 'User not found or invalid refresh token' };
        }

        return { valid: true, user };
    } catch (error) {
        console.error("Token refresh error:", error.message);
        return { valid: false, message: 'Failed to refresh token' };
    }
};

module.exports = refresh;
