const express = require("express");
const router = express.Router({ mergeParams: true });
const Review = require('../../models/Review');


router.get('/show/:reviewId', (req, res) => {
  Review.findById(req.params.reviewId)

  .then(review => res.json(review))
  .catch(err => console.log(err));
})

router.post('/create', (req, res) => {
            
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