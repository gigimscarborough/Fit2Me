const express = require("express");
const router = express.Router({ mergeParams: true });
const bcrypt = require('bcryptjs');
const Trainer = require('../../models/Trainer');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');



router.get('show/:trainerId', (req, res) => {
    Trainer.findById(req.params.trainerId)

    .then(trainer => res.json(trainer))
    .catch(err => console.log(err));
})

router.get('/search', (req, res) => {
    Trainer.find({'specialties': req.query.specialty.toLowerCase()})
        Trainer.where('canTravel').equals(Boolean(req.query.hasLocation))
        .where('hasLocation').equals(Boolean(req.query.canTravel))
        .where("experienceLevel").equals(req.query.experienceLevel)
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
      })
      
    newTrainer.save()
    .then(trainer => res.json(trainer))
    .catch(err => console.log(err));
})

module.exports = router;