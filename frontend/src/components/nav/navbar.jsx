import React from 'react';
import { Link } from 'react-router-dom'
import './navbar.css'

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.logoutUser = this.logoutUser.bind(this);
        
    }

    logoutUser(e) {
        e.preventDefault();
        this.props.logout();
    }



    render() {
        return (
            <div>
       
            </div>
        );
    }
}

export default NavBar;