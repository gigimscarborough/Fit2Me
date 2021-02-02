const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    id: {
      type: Schema.Types.ObjectId,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
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
      // required: true
    },
    canTravel: {
      type: Boolean,
      required: true
    }
  }, {
    timestamps: true
  })
  
  module.exports = User = mongoose.model('User', UserSchema);