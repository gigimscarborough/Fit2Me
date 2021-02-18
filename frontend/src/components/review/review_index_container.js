import { connect } from 'react-redux';
import ReviewIndex from './review_index';
import {getTrainer} from '../../actions/trainer_actions';
import { fetchReviews, updateReview, deleteReview } from '../../actions/review_actions';

const msp = (state) => (
    {
        reviews: state.entities.trainers.reviews,
        currentUser: state.session.user ? state.entities.users[state.session.user.id] : null
    }
)

const mdp = dispatch => (
    {
        getTrainer: (trainerId) => dispatch(getTrainer(trainerId)),
        fetchReviews: (trainerId) => dispatch(fetchReviews(trainerId)),
        updateReview: (review) => dispatch(updateReview(review)),
        deleteReview: (reviewId) =>  dispatch(deleteReview(reviewId))                                                                                                                                                                                             
    }
)

export default connect(msp, mdp)(ReviewIndex)