const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const Trainer = require('../../models/Trainer');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');

router.get('/', (req, res) => {
    return res.json({test: 'test'})
})

router.get('/search', (req, res) => {
    return res.send(req.params.specialties)
    
    // Trainer.where('specialties').equals(req.params.specialties)
    //     .where('canTravel').equals(true)
    //     .where('hasLocation').equals(false).then(trainers => {
        
    //     return res.json({trainers})        
    // })  

    // if (req.params.canTravel !== null) {
    //     allTrainers = allTrainers.where('canTravel').equals(req.params.canTravel)
    // }

    // if (req.params.hasLocation !== null) {
    //     allTrainers = allTrainers.where('hasLocation').equals(req.params.hasLocation)
    // }

    

})

module.exports = router;