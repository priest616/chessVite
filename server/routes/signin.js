const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const jwt = require('jsonwebtoken');


const User = require('../models/User'); // Import the User model

const { jwtSecret } = require('../config');

// API endpoint for user sign-in
router.post('/signin', async (req, res) => {
  const { emailOrUsername, password } = req.body;

  if (!emailOrUsername || !password) {
    return res.status(400).json({ message: 'Email/Username and password are required.' });
  }

  try {
    // Find user by email or username
    const user = await User.findOne({
      $or: [{ 'email.address': emailOrUsername }, { username: emailOrUsername }],
    });

    if (!user) {
      return res.status(404).json({ message: 'invalid user or password!' });
    }

    // Compare provided password with hashed password
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: 'invalid user or password!' });
    }

    const token = jwt.sign({ userId: user._id }, jwtSecret, { expiresIn: '12h' });
    
    res.status(200).json({
      _id: user._id,
      username: user.username,
      email: user.email.address,
      emailVerified: user.email.verified,
      phoneNumber: user.phoneNumber.number,
      phoneNumberVerified: user.phoneNumber.verified,
      token: token,
    });
  } catch (error) {
    console.error('Error during user sign-in:', error);
    res.status(500).json({ message: 'An error occurred during user sign-in.' });
  }
});

module.exports = router;