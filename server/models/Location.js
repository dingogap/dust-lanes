const { Schema, model } = require('mongoose');

const locationSchema = new Schema({
  place: {
    type: String,
    required: true,
    trim: true,
  },
  lat: {
    type: String,
  },
  lon: {
    type: String,
  },
  altitude: {
    type: String,
  },
  bortle: {
    type: String,
  },
});

const Location = model('Location', locationSchema);

module.exports = Location;
