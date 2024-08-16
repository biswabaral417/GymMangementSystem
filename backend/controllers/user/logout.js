User = require('../../db/models/user');

const logout = async (req, res) => {
    try {
        const { jwt: accessToken, refreshToken } = req.cookies;

        if (!accessToken && !refreshToken) {
            return res.status(400).json({ message: 'No tokens provided.' });
        }

        if (accessToken) {
            await User.updateOne(
                { 'tokens.token': accessToken },
                { $pull: { tokens: { token: accessToken } } }
            );
        }

        if (refreshToken) {
            await User.updateOne(
                { 'tokens.token': refreshToken },
                { $pull: { tokens: { token: refreshToken } } }
            );
        }

        res.clearCookie('jwt');
        res.clearCookie('refreshToken');

        res.status(200).json({ message: 'Logged out successfully.' });
        
    } catch (error) {
        console.error('Logout error:', error);
        return res.status(500).json({ message: 'Internal server error.' });
    }
};

module.exports = logout;
