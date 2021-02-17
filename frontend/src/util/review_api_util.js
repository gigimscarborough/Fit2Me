import axios from 'axios'

export const fetchReview = (trainerId, reviewId) => {
    return axios.get(`/api/reviews/show/${reviewId}`)
}

export const fetchReviews = (trainerId) => {
    return axios.get(`/api/trainers/${trainerId}/reviews`)
}

export const createReview = (review) => {
    return axios.post(`/api/reviews/create`, review)
}

export const updateReview = (review) => {
    return axios.patch(`/api/reviews/update/${review._id}`, review)
}

export const deleteReview = (reviewId) => {
    console.log("in our api delete")
    console.log(reviewId)
    return axios.delete(`/api/reviews/delete/${reviewId}`)
}