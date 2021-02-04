import {
    RECEIVE_REVIEW,
    RECEIEVE_REVIEWS,
    RECEIVE_REVIEWS
} from '../actions/review_actions';

const reviewsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_REVIEWS:
            return action.reviews.data
        case RECEIVE_REVIEW:
            return Object.assign({}, state, {[action.review.data['_id']]: action.review.data })
        default:
            return state;
    }
}

export default reviewsReducer