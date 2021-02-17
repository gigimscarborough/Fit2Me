import { connect } from 'react-redux';
import ReviewIndex from './review_index';
import { fetchReviews, updateReview, deleteReview } from '../../actions/review_actions';

const msp = (state) => (
    {
        reviews: state.entities.trainers.reviews,
        currentUser: state.session.user ? state.entities.users[state.session.user.id] : null
    }
)

const mdp = dispatch => (
    {
        fetchReviews: (trainerId) => dispatch(fetchReviews(trainerId)),
        updateReview: (review) => dispatch(updateReview(review)),
        deleteReview: (reviewId) =>  dispatch(deleteReview(reviewId))                                                                                                                                                                                             
    }
)

export default connect(msp, mdp)(ReviewIndex)