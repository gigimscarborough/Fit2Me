import TrainerShow from './trainer_show';
import { connect } from 'react-redux';
import { getTrainer } from '../../actions/trainer_actions'
import { fetchUser } from '../../actions/users_actions'

const msp = (state, ownProps) => {

    return {
        trainer: state.entities.trainers[ownProps.match.params.trainerId],
        trainerId: ownProps.match.params.trainerId,
        currentUserId: state.session.user,
        currentUser: state.entities.users[state.session.user],
    }
}

const mdp = dispatch => (
    {
        getTrainer: (trainerId) => dispatch(getTrainer(trainerId)),
        fetchUser: (userId) => dispatch(fetchUser(userId))
    }
)

export default connect(msp, mdp)(TrainerShow)

