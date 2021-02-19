const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateLocation(data) {
  let errors = {};


        // if (Validator.isEmpty(data.address.city)) {
        //   errors.address = 'City is required';
        // }
        // if (Validator.isEmpty(data.address.state)) {
        //   errors.address = 'State is required';
        // }
        // if (Validator.isEmpty(data.address.borough)) {
        //   errors.address = 'Borough is required';
        // }

        // if (Validator.isEmpty(data.equipment)) {
        //   errors.equipment = 'Equipment is required';
        // }


  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};