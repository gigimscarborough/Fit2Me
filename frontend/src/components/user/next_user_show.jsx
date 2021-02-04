import React from 'react'
import './user.scss'
import LocationForm from './location_form'
import LocationFormContainer from "./location_form_container"


class NextUserShow extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        const currentUser = this.props.currentUser[this.props.currentUserId];

        if (currentUser != null) {


            return (
                <div className="cont-div">
                    <div className="dashboard">
                        <h2>Dashboard</h2>
                        <p>Add My Location</p>
                        <p>View My Upcoming Workouts</p>
                    </div>
                    <div className="main-cont">
                        <div className="header">
                            <h1>Welcome {currentUser.firstName}!</h1>
                        </div>
                        <div className="loc-form-div">
                            <LocationFormContainer currentUser={this.props.currentUser[this.props.currentUserId]}/>
                        </div>
                        <div>
                            <h2>My Upcoming Workouts</h2>
                        </div>
                    </div>

                </div>
            )
        } else {
            return null
        }
    }
}

export default NextUserShow;