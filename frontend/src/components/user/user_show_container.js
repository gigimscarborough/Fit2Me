import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions'
import { fetchUser } from '../../actions/users_actions'

import UserShow from './user_show';
import modal from '../session/modal';

const mSTP = (state, ownProps) => {

    return {currentUserId: ownProps.match.params.userId}
};

const mDTP = dispatch => ({
    fetchUser: userId => dispatch(fetchUser(userId)),
});



export default connect(
    mSTP,
    mDTP
)(UserShow);