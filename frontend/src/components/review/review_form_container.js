import {connect} from 'react-redux';
import ReviewForm from './review_form';
import { createReview } from '../../actions/review_actions';
import { getTrainer } from '../../actions/trainer_actions';
import { openModal } from '../../actions/modal_actions'

const msp = (state, ownProps) => {
   
    return {
        trainer: state.entities.trainers[ownProps.match.params.trainerId],
        user_id: state.session.user.id
    }
}

const mdp = dispatch => (
    {
        getTrainer: (trainerId) => dispatch(getTrainer(trainerId)),
        createReview: (review, trainerId) => dispatch(createReview(review, trainerId)),
        openModal: (modal) => dispatch(openModal(modal))
    }
)

export default connect(msp, mdp)(ReviewForm);
