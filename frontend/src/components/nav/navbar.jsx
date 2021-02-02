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
                    <button className="session-btn" onClick={this.logoutUser}>LOGOUT</button>
                    <i class="fas fa-user-alt"></i>
                </div>
            );
        } else {
            return (
                <div>
                    <button className="session-btn" onClick={() => this.props.openModal('login')}>SIGN IN</button>
                    <button className="session-btn" onClick={() => this.props.openModal('signup')}>JOIN US</button>
                </div>
            );
        }
    }

    render() {
        return (
            <div className="main-nav-div">
                {this.getButton()}
                <Link to="/"><img src={fit2me} alt="" /></Link>
                <div className="find-t">
                    <span>
                        <i class="fas fa-search"></i>
                        FIND A TRAINER
                    </span>
                </div>
            </div>
        );
    }
}

export default NavBar;