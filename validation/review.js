const Validator = require("validator");
const validText = require("./valid-text");

module.exports = function validateReview(data) {
  let errors = {};

  let stringRating = ""
  if (data.rating != null) {
    stringRating = data.rating.toString();
  }
  

  if (Validator.isEmpty(stringRating)) {
    errors.rating = "Rating is required";
  }
  if (Validator.isEmpty(data.workoutDate)) {
    errors.date = "Date is required";
  }
  if (Validator.isEmpty(data.body)) {
    errors.body = "Body is required";
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};
