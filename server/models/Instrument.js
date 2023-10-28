const { Schema, model } = require('mongoose');

const instrumentSchema = new Schema({
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

const Instrument = model('Instrument', instrumentSchema);

module.exports = Instrument;
