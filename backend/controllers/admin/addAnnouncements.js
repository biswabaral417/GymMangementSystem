const verifyAccessToken = require('../../middlewares/checkJWtoken');
const Announcements = require('../../db/models/announcement');

const addAnnouncements = async (req, res) => {
    const { jwt: accessToken, refreshToken } = req.cookies;
    const announcementData = { 
        description: req.body.desc, 
        title: req.body.title, 
        endDate: req.body.date, 
        priority: req.body.priority, 
        created: new Date() 
    };
    console.log(announcementData);

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

        const newAnnouncement = new Announcements(announcementData);
        const savedAnnouncement = await newAnnouncement.save();
        
        if (savedAnnouncement) {
            return res.status(200).json({ announcement: savedAnnouncement });
        } else {
            return res.status(500).json({ message: 'Error adding announcement.' });
        }

    } catch (ex) {
        console.error('Error adding announcement:', ex);
        return res.status(500).json({ message: 'An error occurred while adding the announcement.' });
    }
};

module.exports = addAnnouncements;

