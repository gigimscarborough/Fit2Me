const express = require("express");
const router = express.Router({ mergeParams: true });
const bcrypt = require('bcryptjs');
const Trainer = require('../../models/Trainer');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');

router.get('/show/:trainerId', (req, res) => {
    Trainer.findById(req.params.trainerId).populate("workouts")
    
    .then(trainer => res.json(trainer))
    .catch(err => console.log(err));
})

router.get('/search', (req, res) => {
    
    let travelFlag1 
    let travelFlag2 
    let locationFlag1
    let locationFlag2

    if(req.query.canTravel === ''){
        travelFlag1 = true
        travelFlag2 = false
    }else{
        travelFlag1 = req.query.canTravel === 'true' ? true : false
        travelFlag2 = req.query.canTravel === 'true' ? true : false
    }

    if(req.query.hasLocation === ''){
        locationFlag1 = true
        locationFlag2 = false
    }else{
        locationFlag1 = req.query.hasLocation === 'true' ? true : false
        locationFlag2 = req.query.hasLocation === 'true' ? true : false
    }
    Trainer.find({'specialties': req.query.specialty.toLowerCase()})
    .where("experienceLevel").equals(req.query.experienceLevel)
    .where("zipCode").equals(req.query.zipCode)
    .find({canTravel: {$in: [travelFlag1, travelFlag2]}})
    .find({hasLocation: {$in: [locationFlag1, locationFlag2]}})
    .then(trainers => {
        return res.json({trainers})       
    })
})


router.post('/create', (req, res) => {
    
    const newTrainer = new Trainer({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        hasLocation: Boolean(req.body.hasLocation),
        canTravel: Boolean(req.body.canTravel),
        dailyAvailability: req.body.dailyAvailability,
        experienceLevel: req.body.experienceLevel,
        specialties: req.body.specialties,
        imageUrl: req.body.imageUrl,
        zipCode: req.body.zipCode,
        bio: req.body.bio,
      })
      
    newTrainer.save()
    .then(trainer => res.json(trainer))
    .catch(err => console.log(err));
})

module.exports = router;