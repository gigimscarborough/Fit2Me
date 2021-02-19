import UpdateWorkout from './update_workout';
import { connect } from 'react-redux';
import {updateWorkout} from '../../actions/workout_actions'
import {withRouter} from 'react-router-dom'
import { fetchUser } from '../../actions/users_actions';

const msp = (state, ownProps) => {

    return {
        // currentUser: state.entities.users[ownProps.match.params.userId],
        // workoutId: ownProps.match.params.workoutId


    }
}

const mdp = dispatch => (
    {
        fetchUser: userId => dispatch(fetchUser(userId)),
        updateWorkout: workout => dispatch(updateWorkout(workout))
    }
)

export default withRouter(connect(msp, mdp)(UpdateWorkout))