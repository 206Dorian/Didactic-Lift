const {mongoose, Schema} = require('mongoose');
const workoutSchema = new mongoose.Schema(
    {
      name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
      },
  
      exercises: [{
        type: Schema.Types.ObjectId,
        ref: 'Exercise'
      }],
  
    },
  
    {
      toJSON: {
        getters: true,
        virtuals: true,
      },
    }
  );
  
  module.exports = workoutSchema;
  