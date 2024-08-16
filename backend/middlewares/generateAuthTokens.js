const jwt = require('jsonwebtoken');

const generateAuthTokens = async (user) => {
  const accessToken = jwt.sign({ _id: user._id }, process.env.SECRET_KEY, { expiresIn: '1h' });
  const refreshToken = jwt.sign({ _id: user._id }, process.env.REFRESH_SECRET_KEY, { expiresIn: '30d' });

  user.tokens = user.tokens.concat({ token: accessToken, type: 'access' });
  user.tokens = user.tokens.concat({ token: refreshToken, type: 'refresh' });
  await user.save();

  return { accessToken, refreshToken };
};

module.exports = generateAuthTokens;
