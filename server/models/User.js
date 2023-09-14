const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    address: {
      type: String,
      default: null,
    },
    verified: {
      type: Boolean,
      default: false,
    },
  },
  password: {
    type: String,
    default: null,
  },
  username: {
    type: String,
    default: null,
  },
  phoneNumber: {
    number: {
      type: String,
      default: null,
    },
    verified: {
      type: Boolean,
      default: false,
    },
  },
});


const User = mongoose.model('User', userSchema);

module.exports = User;
