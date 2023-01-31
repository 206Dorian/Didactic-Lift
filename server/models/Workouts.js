const mongoose = require('mongoose');
const workoutSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
  },
  {
    toJSON:{
      getters:true,
      virtuals: true,
  }
  }
);

module.exports = workoutSchema;
