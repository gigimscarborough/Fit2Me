import TrainerShow from './trainer_show';
import { connect } from 'react-redux';
import { getTrainer } from '../../actions/trainer_actions'

const msp = (state, ownProps) => {

    return {
        trainer: state.entities.trainers[ownProps.match.params.trainerId],
        trainerId: ownProps.match.params.trainerId
    }
}

const mdp = dispatch => (
    {
        getTrainer: (trainerId) => dispatch(getTrainer(trainerId))
    }
)

export default connect(msp, mdp)(TrainerShow)

