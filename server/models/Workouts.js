const {mongoose, Schema} = require('mongoose');
const workoutsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    workout: [{
      type: Schema.Types.ObjectId,
      ref: 'Workout'
    }],

  },

  {
    toJSON: {
      getters: true,
      virtuals: true,
    },
  }
);

module.exports = workoutsSchema;
