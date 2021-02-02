const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LocationSchema = new Schema({
    ownerId: {
        type: Schema.Types.ObjectId,
      required: true
    },
    address: {
        type: Object,
      required: true
    },
    equipment: {
      type: Array,
      required: true
    }
  }, {
    timestamps: true
  })
  
  module.exports = Location = mongoose.model('Location', LocationSchema);