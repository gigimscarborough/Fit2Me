import axios from 'axios'

export const fetchReview = (trainerId, reviewId) => {
    return axios.get(`/api/trainers/${trainerId}/reviews/${reviewId}`)
}

export const fetchReviews = (trainerId) => {
    return axios.get(`/api/trainers/${trainerId}/reviews`)
}

export const createReview = (review) => {
    return axios.post(`/api/reviews/create`, review)
}

export const updateReview = (review, trainerId) => {
    return axios.patch(`/api/trainers/${trainerId}/reviews/${review.id}`, review)
}