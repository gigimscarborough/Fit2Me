import Workout from './workout';
import { connect } from 'react-redux';
import { getTrainer } from '../../actions/trainer_actions';
import {fetchUser} from '../../actions/users_actions';
import { createWorkout} from '../../actions/workout_actions'

const msp = (state, ownProps) => {

    return {
        trainer: state.entities.trainers[ownProps.match.params.trainerId],
        trainerId: ownProps.match.params.trainerId,
        currentUserId: state.session.user.id,
        currentUser: state.entities.users[state.session.user.id]

    }
}

const mdp = dispatch => (
    {
        getTrainer: (trainerId) => dispatch(getTrainer(trainerId)), 
        fetchUser: userId => dispatch(fetchUser(userId)),
        createWorkout: workout => dispatch(createWorkout(workout))
    }
)

export default connect(msp, mdp)(Workout)