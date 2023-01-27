const { Schema, model } = require('mongoose');

const classSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    building: {
      type: String,
      required: true
    },
    creditHours: {
      type: Number,
      required: true
    },
    professor: {
      type: Schema.Types.ObjectId,
      ref: 'Professor'
    }
  }
);

const Class = model('Class', classSchema);

module.exports = Class;
