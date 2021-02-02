import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions'

import UserShow from './user_show';
import modal from '../session/modal';

const mSTP = state => ({
    currentUser: state.session.user
});

const mDTP = dispatch => ({

});



export default connect(
    mSTP,
    mDTP
)(UserShow);