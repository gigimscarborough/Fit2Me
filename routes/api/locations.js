const express = require("express");
const router = express.Router({ mergeParams: true });
const Location = require('../../models/Location');

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
            .then(workout => {

                const update = {$push: {workouts: workout._id}}
                const options = { "upsert": false };

                Trainer.updateOne({'_id': workout.trainerId}, update, options).catch(err => console.log(err));
                User.updateOne({'_id': workout.userId}, update, options).catch(err => console.log(err));



                return res.json({workout})
                })
                .catch(err => console.log(err));

})



        


module.exports = router;