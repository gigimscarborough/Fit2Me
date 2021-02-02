const express = require("express");
const router = express.Router({ mergeParams: true });
const bcrypt = require('bcryptjs');
const Trainer = require('../../models/Trainer');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');

router.get('/', (req, res) => {
    return res.json({test: 'test'})
})

router.get('/search', (req, res) => {
    
    Trainer.where('specialties').equals(req.query.specialties)
        .where('canTravel').equals(req.query.hasLocation)
        .where('hasLocation').equals(req.query.canTravel)
        .then(trainers => {
        
        return res.json({trainers})        
    })          
})

module.exports = router;