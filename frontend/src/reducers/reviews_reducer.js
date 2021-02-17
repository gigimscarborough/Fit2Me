import {
    RECEIVE_REVIEW,
    RECEIVE_REVIEWS,
    REMOVE_REVIEW
} from '../actions/review_actions';

const reviewsReducer = (state = {}, action) => {
    // debugger
    Object.freeze(state);
    const newState = Object.assign({}, state);
    switch(action.type) {
        case RECEIVE_REVIEWS:
            return action.reviews.data
        case RECEIVE_REVIEW:
            return Object.assign({}, state, {[action.review.data['_id']]: action.review.data })
        case REMOVE_REVIEW:
            delete newState[action.reviewId]
            return newState;
        default:
            return state;
    }
}

export default reviewsReducer