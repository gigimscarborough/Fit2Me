import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import LoginForm from './login_form';
import { openModal, closeModal } from '../../actions/modal_actions';
import {fetchUser} from '../../actions/users_actions'

const mapStateToProps = (state) => {
    return {
        errors: state.errors.session,
        currentUser: state.session.isAuthenticated
}};

const mapDispatchToProps = (dispatch) => {
    return {
        login: user => dispatch(login(user)),
        closeModal: () => dispatch(closeModal()),
        openModal: modal => dispatch(openModal(modal)),
        fetchUser: userId => dispatch(fetchUser(userId))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginForm);
