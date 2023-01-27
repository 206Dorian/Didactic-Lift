const { Schema, model } = require('mongoose');

const workoutSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
   
   user: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User'
      }
    ]
  }
);

const Workout = model('Workout', workoutSchema);

module.exports = Workout;
