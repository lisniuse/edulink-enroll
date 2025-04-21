const User = require('../models/user');
const { generateToken } = require('../utils/jwt');
const bcrypt = require('bcryptjs');

const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const user = new User({
      name,
      email,
      password: await bcrypt.hash(password, 10),
    });

    await user.save();

    const token = generateToken(user._id);
    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

const login = async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ email: username });
  if (user && bcrypt.compareSync(password, user.password)) {
    const token = generateToken(user);
    res.json({ token });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
}

module.exports = { register, login };