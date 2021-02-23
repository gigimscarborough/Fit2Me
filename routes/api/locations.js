const express = require("express");
const router = express.Router({ mergeParams: true });
const Location = require('../../models/Location');
const validateLocation = require('../../validation/location');



router.get('/show/:locationId', (req, res) => {
    Location.findById(req.params.locationId)

    .then(location => res.json(location))
    .catch(err => console.log(err));
})

router.patch('/update/:locationId', (req, res) => {

  const updatedLocation = {
    address: req.body.address,
    equipment: req.body.equipment
  }

  Location.findOneAndUpdate({'_id': req.body['_id']}, {$set: updatedLocation}, {new: true})

  .then(location => res.json(location))
  .catch(err => console.log(err));
})

router.post('/create', (req, res) => {
  
  const { errors, isValid } = validateLocation(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }
            
  const newLocation = new Location({
      ownerId: req.body.ownerId,
      address: req.body.address,
      equipment: req.body.equipment
    })

  newLocation.save()
  .then(location => {
    
      User.updateOne({'_id': location.ownerId}, {location}, { "upsert": false }).catch(err => console.log(err))

      User.findById(location.ownerId).populate('workouts').populate("location")
      .then(user => res.json(user))


      
      })
      .catch(err => console.log(err));

})



        


module.exports = router;