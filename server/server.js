require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const PORT = 5000;
const logger = require('./logger');
const cors = require('cors');

// Middlewares
app.use(cors({
  origin: 'http://localhost:3000',
}));
app.use(bodyParser.json());
app.use((req, res, next) => {
  logger.debug(`Received request: ${req.method} ${req.url}`);
  next();
});


mongoose.connect(process.env.DB_HOST, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

const newuserRoutes= require('./routes/signup');
const authRoutes = require('./routes/signin');
const authGoogle = require('./routes/googleAuthRouts/oauthGoogle')

// Use the imported route files
app.use('/api', newuserRoutes); 
app.use('/api', authRoutes);
app.use('/api', authGoogle);


app.listen(PORT, () => {
  logger.info(`Server is running on port ${PORT}`);
});