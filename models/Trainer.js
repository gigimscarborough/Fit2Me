const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TrainerSchema = new Schema({
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    hasLocation: {
      type: Boolean,
      required: true
    },
    canTravel: {
      type: Boolean,
      required: true
    },
    dailyAvailability: {
      type: String,
      required: true
    },
    experienceLevel: {
      type: String,
      required: true
    },
    specialties: {
      type: Array,
      required: true
    },
    imageUrl: {
      type: String,
      required: true
    }
  }, {
    timestamps: true
  })
  
  module.exports = Trainer = mongoose.model('Trainer', TrainerSchema);