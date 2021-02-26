const express = require("express");
const router = express.Router({ mergeParams: true });
const Review = require('../../models/Review');
const validateReview = require("../../validation/review");

router.get('/show/:reviewId', (req, res) => {
  Review.findById(req.params.reviewId)

  .then(review => res.json(review))
  .catch(err => console.log(err));
})

router.patch('/update/:reviewId', (req, res) => {
  const { errors, isValid } = validateReview(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const updatedReview = {
    body: req.body.body,
    workoutDate: req.body.workoutDate,
    rating: req.body.rating
  }

  Review.findOneAndUpdate({'_id': req.body['_id']}, {$set: updatedReview}, {new: true})

  .then(review => res.json(review))
  .catch(err => console.log(err));
})

router.delete('/delete/:reviewId', (req, res) => {
  Review.findOneAndDelete({_id: req.params.reviewId})
.then(review => res.json(review))
.catch((error) => (res.status(400).json({error})))
});

router.post('/create', (req, res) => {
  
  const { errors, isValid } = validateReview(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

            
  const newReview = new Review({
      trainerId: req.body.trainerId,
      userId: req.body.userId,
      body: req.body.body,
      workoutDate: req.body.workoutDate,
      rating: req.body.rating,
    })

    newReview.save()
  .then(review => {
      const update = {$push: {reviews: review._id}}
      const options = { "upsert": false };

      Trainer.updateOne({'_id': review.trainerId}, update, options).catch(err => console.log(err));
      User.updateOne({'_id': review.userId}, update, options).catch(err => console.log(err));

      return res.json(review)
      })
      .catch(err => console.log(err));

})



        


module.exports = router;