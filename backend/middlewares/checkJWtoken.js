const jwt = require('jsonwebtoken');
const User = require('../db/models/user');
const verifyRefreshToken = require('./checkJWtoken');

const verifyAccessToken = async (token, refreshToken) => {
  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const user = await User.findById(decoded._id).select('-Password -tokens');
    if (!user) throw new Error('User not found');
    return { valid: true, decoded, user,accessToken:false};
  } catch (error) {
    console.error('Access token verification error:', error);
    if (error.name === 'TokenExpiredError') {
      const { valid, user } = await verifyRefreshToken(refreshToken);
      if (valid) {
        const accessToken = jwt.sign({ _id: user._id }, process.env.SECRET_KEY, { expiresIn: '1h' });
        return { valid: false, message: 'Token expired, new token generated', accessToken };
      }
    }
    return { valid: false, message: 'Invalid or expired access token.' };
  }
};

module.exports = verifyAccessToken;
