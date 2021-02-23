const Validator = require("validator");
const validText = require("./valid-text");

module.exports = function validateWorkout(data) {
  let errors = {};

  if (Validator.isEmpty(data.location)) {
    errors.location = "Location is required";
  }
  if (Validator.isEmpty(data.date)) {
    errors.date = "Date is required";
  }
  if (Validator.isEmpty(data.time)) {
    errors.time = "Time is required";
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};
