import UpdateWorkout from './update_workout';
import { connect } from 'react-redux';
import {updateWorkout} from '../../actions/workout_actions'

const msp = (state, ownProps) => {
 debugger
    return {
        currentUser: state.entities.users[ownProps.match.params.userId],
        workoutId: ownProps.match.params.workoutId


    }
}

const mdp = dispatch => (
    {
        updateWorkout: workout => dispatch(updateWorkout(workout))
    }
)

export default connect(msp, mdp)(UpdateWorkout)