const User = require('../../db/models/user');
const verifyAccessToken = require('../../middlewares/checkJWtoken');
const verifyRefreshToken = require('../../middlewares/CheckRefreshToken');
const generateAuthTokens = require('../../middlewares/generateAuthTokens');

const getUserData = async (req, res) => {
    const { jwt:token, refreshToken } = req.cookies;

    if (!token && !refreshToken) {
        return res.status(401).json({ message: 'Access denied, no token provided.' });
    }

    try {
        let user;
        if (token) {
            const { valid, user, accessToken: newAccessToken } = await verifyAccessToken(token, refreshToken);
        
            if (!valid && !newAccessToken) {
                return res.status(401).json({ message: 'Invalid or expired access token.' });
            }
            if (newAccessToken) {
                res.cookie('jwt', newAccessToken, { 
                    httpOnly: true,
                    secure: process.env.NODE_ENV === 'production',
                    sameSite: 'lax',}); 
                return res.status(200).json({user})
            }
            if (valid) {
                return res.status(200).json({ user });
            }
        }
        if (refreshToken) {
            const { valid, user: verifiedUser, message } = await verifyRefreshToken(refreshToken);
            if (!valid) throw new Error(message);
            const { accessToken, refreshToken: newRefreshToken } = await generateAuthTokens(verifiedUser);
            res.cookie('jwt', accessToken, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'lax',
            });

            res.cookie('refreshToken', newRefreshToken, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'lax',
            });

            user = verifiedUser;
        }

        if (user) {
            return res.status(200).json({ user });
        } else {
            return res.status(401).json({ message: 'Authentication failed' });
        }
    } catch (error) {
        console.error('Token verification or refresh error:', error.message);
        return res.status(401).json({ message: error.message });
    }
};

module.exports = getUserData;
