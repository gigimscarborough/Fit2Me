const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
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
      required: true
    },
    canTravel: {
      type: Boolean,
      required: true
    },
    workouts: [{type: Schema.Types.ObjectId, ref: 'Workout'}],
    location: {type: Schema.Types.ObjectId, ref: 'Location'}
  }, {
    timestamps: true
  })
  
  module.exports = User = mongoose.model('User', UserSchema);