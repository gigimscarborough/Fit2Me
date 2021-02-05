import { connect } from 'react-redux';
import ReviewIndex from './review_index';
import { fetchReviews } from '../../actions/review_actions';

const msp = (state, ownProps) => (
    {
        reviews: state.entities.trainers.reviews,
        currentUser: state.entities.users[state.session.user.id]
    }
)

const mdp = dispatch => (
    {
        fetchReviews: (trainerId) => dispatch(fetchReviews(trainerId))                                                                                                                                                                                                     
    }
)

export default connect(msp, mdp)(ReviewIndex)