import React from 'react';
import { Link } from 'react-router-dom'
import { openModal } from '../../actions/modal_actions';
import './navbar.scss'
import fit2me from '../../assets/images/fit2me.png'

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.logoutUser = this.logoutUser.bind(this);
        this.getButton = this.getButton.bind(this)
        
    }

    logoutUser(e) {
        e.preventDefault();
        this.props.logout();
    }

    getButton() {
        if (this.props.loggedIn) {
            return (
                <div>
                    <button onClick={this.logoutUser}>Logout</button>
                </div>
            );
        } else {
            return (
                <div>
                    <button onClick={() => this.props.openModal('login')}>Sign In</button>
                    <button onClick={() => this.props.openModal('signup')}>Create an Account</button>
                </div>
            );
        }
    }

    render() {
        return (
            <div className="main-nav-div">
                {this.getButton()}
                <img src={fit2me} alt=""/>
            </div>
        );
    }
}

export default NavBar;