const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

const generateToken = (user) => {
  const payload = {
    id: user._id,
    username: user.username,
    role: user.role,
  };
  const secret = process.env.JWT_SECRET;
  const options = {
    expiresIn: '1h',
  };
  return jwt.sign(payload, secret, options);
}

const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return decoded;
  } catch (error) {
    return null;
  }
}

const extractTokenFromHeader = (req) => {
  const authHeader = req.headers.authorization;
  if (authHeader && authHeader.startsWith('Bearer ')) {
    return authHeader.split(' ')[1];
  }
  return null;
}

module.exports = {
  generateToken,
  verifyToken,
  extractTokenFromHeader,
}