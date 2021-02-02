const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    trainerId: {
        type: Schema.Types.ObjectId,
      required: true
    },
    userId: {
        type: Schema.Types.ObjectId,
      required: true
    },
    date: {
        type: String,
      required: true
    },
    time: {
      type: String,
      required: true
    },
    location: {
      type: String,
      required: true
    }
  }, {
    timestamps: true
  })
  
  module.exports = Workout = mongoose.model('Workout', WorkoutSchema);