const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
    trainerId: {
        type: Schema.Types.ObjectId,
      required: true
    },
    userId: {
        type: Schema.Types.ObjectId,
      required: true
    },
    body: {
        type: Text,
      required: true
    },
    workoutDate: {
      type: String,
      required: true
    },
    rating: {
      type: Number,
      required: true
    }
  }, {
    timestamps: true
  })
  
  module.exports = Review = mongoose.model('Review', ReviewSchema);