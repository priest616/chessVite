const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const { phone } = require('phone');
var validator = require("email-validator");

const User = require('../models/User');

router.post('/signup', async (req, res) => {
    const { email, password, username, phoneNumber } = req.body;

  // Basic input validation
  if (!email || !password || !username || !phoneNumber) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  if (!phone(phoneNumber).isValid) {
    return res.status(400).json({ message: 'Phone number is not valid.' });
  }

  if (!validator.validate(email)) {
    return res.status(400).json({ message: 'Email number is not valid.' });
  }

  if (password.length < 6) {
    return res.status(400).json({ message: 'Password must be at least 6 characters long.' });
  }

  if (username.length < 4) {
    return res.status(400).json({ message: 'Username must be at least 4 characters long.' });
  }

  const existingEmail = await User.findOne({ 'email.address': email });
  if (existingEmail) {
    return res.status(409).json({ message: 'Email is already registered.' });
  }
  
  const existingUser = await User.findOne({ username: username });
  if (existingUser) {
    return res.status(409).json({ message: 'username is already registered.' });
  }

  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = new User({
        email: { address: email, verified: false },
        password: hashedPassword,
        username: username,
        phoneNumber: { number: phoneNumber, verified: false },
        });

    await newUser.save();
    res.status(201).json({ message: 'User registered successfully.' });
  } catch (error) {
    console.error('Error during user registration:', error);
    res.status(500).json({ message: 'An error occurred during user registration.' });
  }

});

module.exports = router;