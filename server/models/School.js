const { Schema, model } = require('mongoose');

const schoolSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    location: {
      type: String,
      required: true
    },
    studentCount: {
      type: Number,
      required: true
    },
    classes: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Class'
      }
    ]
  }
);

const School = model('School', schoolSchema);

module.exports = School;
