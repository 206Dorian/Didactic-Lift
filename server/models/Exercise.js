const { Schema, model } = require('mongoose');

const exerciseSchema = new Schema(
  {
    
    name: {
      type: String,
      required: false,
      unique: true,
      trim: true
    },
    type: {
      type: String,
      required: true
    },
    muscle: {
      type: String,
      required: true
    },
    difficulty: {
      type: String,
      required: true
    },
    
  }
);

const Exercise = model('Exercise', exerciseSchema);

module.exports = Exercise;
