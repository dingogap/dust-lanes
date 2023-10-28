const { Schema, model } = require('mongoose');

const sessionSchema = new Schema({
  targetName: {
    type: String,
    required: true,
    trim: true,
  },
  commonName: {
    type: String,
    trim: true,
  },
  sessionDate: {
    type: String,
    required: true,
    trim: true,
  },
  dsoCategory: {
    type: String,
    trim: true,
  },
  location: {
    type: String,
    trim: true,
  },
  moonPhase: {
    type: String,
    trim: true,
  },

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

  rotation: {
    type: String,
    trim: true,
  },

  exposureCount: {
    type: String,
    required: true,
    trim: true,
  },

  duration: {
    type: String,
    required: true,
    trim: true,
  },

  filter: {
    type: String,
    required: true,
    trim: true,
  },
});
const Session = model('Session', sessionSchema);

module.exports = Session;
