const { Schema, model } = require('mongoose');

const filterSchema = new Schema({
  filterName: {
    type: String,
    required: true,
    trim: true,
  },
  filterType: {
    type: String,
    required: true,
    trim: true,
  },
});

const Filter = model('Filter', filterSchema);

module.exports = Filter;
