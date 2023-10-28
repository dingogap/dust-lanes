const { Schema, model } = require('mongoose');

const sessionSchema = new Schema({
  telescope: {
    type: String,
    required: true,
    trim: true,
  },
  camera: {
    type: String,
    required: true,
    trim: true,
  },
  mount: {
    type: String,
    required: true,
    trim: true,
  },
});

const Session = model('Session', sessionSchema);

module.exports = Session;
