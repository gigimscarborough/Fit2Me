import Workout from './workout';
import { connect } from 'react-redux';
import { getTrainer } from '../../actions/trainer_actions'

const msp = (state, ownProps) => {

    return {
        trainer: state.entities.trainers[ownProps.match.params.trainerId],
        trainerId: ownProps.match.params.trainerId,
        currentUserId: state.session.user
    }
}

const mdp = dispatch => (
    {
        getTrainer: (trainerId) => dispatch(getTrainer(trainerId))
    }
)

export default connect(msp, mdp)(Workout)