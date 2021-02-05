import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';
import { fetchUser } from '../../actions/users_actions';
import {deleteWorkout} from '../../actions/workout_actions'

import NextUserShow from './next_user_show';
import modal from '../session/modal';

const mSTP = (state, ownProps) => {

    return { currentUser: state.entities.users }
};

const mDTP = dispatch => ({
    fetchUser: userId => dispatch(fetchUser(userId)),
    deleteWorkout: workoutId => dispatch(deleteWorkout(workoutId))
});



export default connect(
    mSTP,
    mDTP
)(NextUserShow);