const { Schema, model } = require('mongoose');

const targetSchema = new Schema({
    targetName: {
        type: String,
        required: true,
        trim: true,
      },
      commonName: {
        type: String,
        trim: true,
      },
      dsoCategory: {
        type: String,
        trim: true,
      },
      image: {
        type: String,
        required: true,
        trim: true,
      },

});
const Target = model('Target', targetSchema);

module.exports = Target;