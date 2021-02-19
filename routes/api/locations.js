const express = require("express");
const router = express.Router({ mergeParams: true });
const Location = require('../../models/Location');
const validatelocationInput = require('../../validation/login');



router.get('/show/:locationId', (req, res) => {
    Location.findById(req.params.locationId)

    .then(location => res.json(location))
    .catch(err => console.log(err));
})

router.post('/create', (req, res) => {
            
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