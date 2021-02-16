
import { connect } from 'react-redux';
import { logout, login } from '../../actions/session_actions';
import {openModal} from '../../actions/modal_actions'
import {fetchUser} from "../../actions/users_actions"
import {withRouter} from 'react-router-dom'

import NavBar from './navbar';
import modal from '../session/modal';

const mSTP = state => ({
    loggedIn: state.session.isAuthenticated,
    currentUser: state.session.user
});

const mDTP = dispatch => ({
    logout : () => dispatch(logout()),
    openModal : modal => dispatch(openModal(modal)),
    fetchUser: userId => dispatch(fetchUser(userId)),
    login: user => dispatch(login(user))
});



export default withRouter(connect(
    mSTP,
    mDTP
)(NavBar));