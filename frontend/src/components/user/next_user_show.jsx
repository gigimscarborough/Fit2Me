import React from 'react'
import './user.scss'
import LocationForm from './location_form'
import LocationFormContainer from "./location_form_container"
import { HashLink as Link } from 'react-router-hash-link'


class NextUserShow extends React.Component {
    constructor(props) {
        super(props);
        
    }


    upcomingWorkouts(currentUser){
        if(currentUser && currentUser.workouts.length > 0){
            const workouts = currentUser.workouts.map(workout =>
                <div className='wkc'>
                    <div className='work-left'>
                        <img src={workout.trainerImage}/>
                    </div>
                    <div className='work-right'>
                        <span><strong>Your Workout With: </strong>{workout.trainerName}</span><br/>
                        <span><strong>Date: </strong> {workout.date}</span><br />
                        <span><strong>Time:</strong> {workout.time}</span><br />
                        <span><strong>Location: </strong>{workout.location}</span><br />
                        <div className="wkc-links">
                            <span>Update</span>
                            <span onClick={() => this.props.deleteWorkout(workout._id).then(() => window.location.reload())}>Delete</span>
                        </div>
                    </div>

                </div>
            )

          return workouts
        }  else {
            return(
                <p>You have no upcoming workouts...</p>
            )
        }
    }

    render() {
        const currentUser = this.props.currentUser[this.props.currentUserId];

        if (currentUser != null) {


            return (
                <div className="cont-div">
                    <div className="dashboard">
                        <h2>Dashboard</h2>
                        <Link to={`/users/${this.props.currentUserId}/#loc`}><p>My Location</p></Link>
                        <Link to={`/users/${this.props.currentUserId}/#upc-workouts`}><p>View My Upcoming Workouts</p></Link>
                    </div>
                    <div className="main-cont">
                        <div className="header">
                            <h1>Welcome {currentUser.firstName}!</h1>
                        </div>
                        <div id="loc" className="loc-form-div">
                            <LocationFormContainer currentUser={this.props.currentUser[this.props.currentUserId]}/>
                        </div>
                        <div id="upc-workouts">
                            <h2>My Upcoming Workouts</h2>
                            {this.upcomingWorkouts(currentUser)}
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