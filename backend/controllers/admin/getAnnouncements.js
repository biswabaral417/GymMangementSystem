const User = require('../../db/models/user');
const verifyAccessToken = require('../../middlewares/checkJWtoken');
const Announcements = require('../../db/models/announcement');

const getAnnouncements = async (req, res) => {
    const { jwt: accessToken, refreshToken } = req.cookies;
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

        const announcements = await Announcements.find();
        
        return res.status(200).json({ announcements });

    } catch (ex) {
        console.error(ex);
        return res.status(500).json({ message: 'An error occurred while fetching announcements.' });
    }
};

module.exports = getAnnouncements;

