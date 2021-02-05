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
    
    componentDidUpdate() {
        if (typeof(this.props.currentUser) != "undefined" && Object.keys(this.props.currentUser).length > 0) {
            this.props.fetchUser(this.props.currentUser.id)
        }
    }

    componentDidMount(){
        if (typeof (this.props.currentUser) != "undefined" && Object.keys(this.props.currentUser).length > 0) {
            this.props.fetchUser(this.props.currentUser.id)
        }
    
    }

    getButton() {
        
        if (this.props.loggedIn) {
            return (
                <div>
                    <button className="session-btn" onClick={this.logoutUser}>LOGOUT</button>
                    <Link to={`/users/${this.props.currentUser.id}`}><i class=" user-icon fas fa-user-alt"></i></Link>
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
                    <Link to="/search"><span>
                        <i class="fas fa-search"></i>
                        FIND A TRAINER
                    </span></Link>
                </div>
            </div>
        );
    }
}

export default NavBar;