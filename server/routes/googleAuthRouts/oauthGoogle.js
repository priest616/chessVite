const express = require('express');
const jwt = require('jsonwebtoken');
const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(process.env.CLIENT_ID);
const router = express.Router();

const User = require('../../models/User');
const jwtSecret = process.env.JWT_SECRET; // Define your JWT secret

router.post('/google-login', async (req, res) => {
  const { clienId, credentials} = req.body;

  if(!credentials|| !clienId){
    return res.status(401).json({ error: 'Token verification failed' });
  }
  

  try {
    const ticket = await client.verifyIdToken({
      idToken: credentials,
      audience: process.env.CLIENT_ID,
    });

    const { email } = ticket.getPayload();

    const user = await User.findOne({ 'email.address': email });
    if (!user) {
      const newUser = new User({
        email: { address: email, verified: true },
        password: null,
        username: null,
        phoneNumber: { number: null, verified: false },
      });

      user = await newUser.save();
    }

    const tokenPayload = { userId: user._id };
    const authToken = jwt.sign(tokenPayload, jwtSecret, { expiresIn: '12h' });

    res.status(200).json({
      _id: user._id,
      username: user.username,
      email: user.email.address,
      emailVerified: user.email.verified,
      phoneNumber: user.phoneNumber.number,
      phoneNumberVerified: user.phoneNumber.verified,
      token: authToken,
    });

  } catch (error) {
    console.log('Token verification failed:', error);
    res.status(401).json({ error: 'Token verification failed' });
  }
});

module.exports = router;