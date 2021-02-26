const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateLocation(data) {
  let errors = {};

  if (Validator.isEmpty(data.address.streetAddress)) {
    errors.streetAddress = "Street Address is required";
  }
  if (Validator.isEmpty(data.address.city)) {
    errors.city = 'City is required';
  }
  if (Validator.isEmpty(data.address.state)) {
    errors.state = 'State is required';
  }
  if (Validator.isEmpty(data.address.borough)) {
    errors.borough = 'Borough is required';
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};