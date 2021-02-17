import * as ReviewApiUtil from '../util/review_api_util';

export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";
export const REMOVE_REVIEW = "REMOVE_REVIEW";

const receiveReview = review => (
    {
        type: RECEIVE_REVIEW,
        review
    }
)

const receiveReviews = reviews => (
    {
        type: RECEIVE_REVIEWS,
        reviews
    }
)

const removeReview = reviewId => (
    {
        type: REMOVE_REVIEW,
        reviewId
    }
)

export const fetchReviews = (trainerId) => dispatch => (
    ReviewApiUtil.fetchReviews(trainerId)
        .then(reviews => dispatch(receiveReviews(reviews)))
)

export const fetchReview = (trainerId, reviewId) => dispatch => (
    ReviewApiUtil.fetchReview(trainerId, reviewId)
        .then(review => dispatch(receiveReview(review)))
)

export const createReview = (review, trainerId) => dispatch => (
    ReviewApiUtil.createReview(review, trainerId)
        .then(review => dispatch(receiveReview(review)))
)

export const updateReview = (review) => dispatch => (
    ReviewApiUtil.updateReview(review)
        .then(review => dispatch(receiveReview(review)))
)

export const deleteReview = (reviewId) => dispatch => {
    console.log("in delete action!")
    console.log(reviewId)
    return (
        ReviewApiUtil.deleteReview(reviewId)
            .then( () => dispatch(removeReview(reviewId)))
    )
}