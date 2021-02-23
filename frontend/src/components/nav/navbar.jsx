import React from 'react';
import { Link } from 'react-router-dom'
import { openModal } from '../../actions/modal_actions';
import './navbar.scss'
import fit2me from '../../assets/images/fit2me.png'
import fit2meT from '../../assets/images/fit2me-wl.png'
import {Redirect} from "react-router"

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.logoutUser = this.logoutUser.bind(this);
        this.getButton = this.getButton.bind(this)
    }

    logoutUser(e) {
        e.preventDefault();
        this.props.logout();
        this.props.history.push("/")
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
        if (this.props.loggedIn && this.props.location.pathname === '/') {
            return (
                <div>
                    <button className="session-btn2" onClick={this.logoutUser}>LOGOUT</button>
                    <Link to={`/users/${this.props.currentUser.id}`}><i id="useri-2" className=" user-icon fas fa-user-alt "></i></Link>
                </div>
            );
        } else if (!this.props.loggedIn && this.props.location.pathname === '/') {
            return (
                <div>
                    <button className="session-btn2" onClick={() => this.props.openModal('login')}>SIGN IN</button>
                    <button className="session-btn2" onClick={() => this.props.openModal('signup')}>JOIN US</button>
                </div>
            );
        }else if (this.props.loggedIn) {
            return (
                <div>                    
                    <button className="session-btn" onClick={this.logoutUser}>LOGOUT</button>
                    <Link to={`/users/${this.props.currentUser.id}`}><i className=" user-icon fas fa-user-alt"></i></Link>
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
        if (this.props.location.pathname === '/'){
            return (
                <div className="main-nav-div-s">
                    {this.getButton()}
                    <Link to="/"><img src={fit2meT} alt="" /></Link>
                    <div className="find-t-s">
                        <Link to="/search"><span>
                            <i className="fas fa-search i-s"></i>
                        FIND A TRAINER
                    </span></Link>
                    </div>
                </div>
            );
        }

        return (
            <div className="main-nav-div">
                {this.getButton()}
                <Link to="/"><img src={fit2me} alt="" /></Link>
                <div className="find-t">
                    <Link to="/search"><span>
                        <i className="fas fa-search"></i>
                        FIND A TRAINER
                    </span></Link>
                </div>
            </div>
        );
    }
}

export default NavBar;