const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true
    },

    //update the password 
    password: {
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
