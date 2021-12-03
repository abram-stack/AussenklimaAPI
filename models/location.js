const mongoose = require('mongoose');

const Location = mongoose.model('Location',new mongoose.Schema({
  name: String
}));

module.exports.Location = Location;