const express = require("express");
const router = express.Router({ mergeParams: true });
const Workout = require('../../models/Workout');
const Trainer = require('../../models/Trainer');
const User = require('../../models/User');


  router.get('/index/', (req, res) => {
    Workout.find()

    .then(workouts => res.json(workouts))
    .catch(err => console.log(err));
})
  

router.get('/show/:workoutId', (req, res) => {
    Workout.findById(req.params.workoutId)

    .then(workout => res.json(workout))
    .catch(err => console.log(err));
})

router.patch('/update/:workoutId', (req, res) => {


    const updatedWorkout = {
      date: req.body.date,
      time: req.body.time,
      location: req.body.location
    }

    Workout.findOneAndUpdate({'_id': req.params.workoutId}, {$set: updatedWorkout}, {new: true})

    .then(workout => res.json(workout))
    .catch(err => console.log(err));
})

router.delete('/delete/:workoutId', (req, res) => {
  Workout.findOneAndDelete({_id: req.params.workoutId})
  .then(workout => res.json(workout))
  .catch((error) => (res.status(400).json({error})))
});

router.post('/create', (req, res) => {
            
            const newWorkout = new Workout({
                trainerId: req.body.trainerId,
                trainerName: req.body.trainerName,
                trainerImage: req.body.trainerImage,
                trainerAvailability: req.body.trainerAvailability,
                trainerLocation: req.body.trainerLocation,
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