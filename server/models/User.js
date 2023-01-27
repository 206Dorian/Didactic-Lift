const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    studentScore: {
      type: Number
    },
    officeHours: {
      type: String,
      required: true
    },
    officeLocation: {
      type: String,
      required: true
    },
    workouts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'exercise'
      }
    ]
  }
);

const User = model('User', userSchema);

module.exports = User;
