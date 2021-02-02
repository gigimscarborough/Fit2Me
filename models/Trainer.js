const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TrainerSchema = new Schema({
    id: {
        type: Schema.Types.ObjectId,
        required: true
      },
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
      type: Boolean,
      required: true
    },
    experienceLevel: {
      type: Boolean,
      required: true
    },
    specialties: {
      type: Array,
      required: true
    }
  }, {
    timestamps: true
  })
  
  module.exports = Trainer = mongoose.model('Trainer', TrainerSchema);