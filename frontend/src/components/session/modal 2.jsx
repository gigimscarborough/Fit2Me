import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LoginFormContainer from './login_form_container';
import SignupFormContainer from './signup_form_container';
import './session.scss'

function Modal({ modal, closeModal }) {
    let component;
    if (!modal) {
        return null;
    } else {
        component = modal === 'login' ? <LoginFormContainer /> :  <SignupFormContainer /> 
    }

    return (
        <div className="behind-modal" onClick={closeModal}>
            {component}
        </div>
    );
}


const mapStateToProps = state => {
    return {
        modal: state.ui.modal
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);