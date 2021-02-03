const express = require("express");
const router = express.Router({ mergeParams: true });
const Workout = require('../../models/Workout');

router.get('/test', (req, res) => {
    res.send('Hello World')
  })
  

router.get('/show/:workoutId', (req, res) => {
    Workout.findById(req.params.workoutId)

    .then(workout => res.json(workout))
    .catch(err => console.log(err));
})

router.post('/create', (req, res) => {
    
    const newWorkout = new Workout({
        trainerId: req.body.trainerId,
        userId: req.body.userId,
        date: req.body.date,
        time: req.body.time,
        location: req.body.location,
      })
      
    newWorkout.save()
    .then(workout => res.json(workout))
    .catch(err => console.log(err));
})

module.exports = router;