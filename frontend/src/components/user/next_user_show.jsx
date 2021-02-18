import React from 'react'
import './user.scss'
import LocationForm from './location_form'
import LocationFormContainer from "./location_form_container"
import { HashLink as Link } from 'react-router-hash-link'
import UpdateWorkout from "../workouts/update_workout_container"


class NextUserShow extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            modal: false,
            workout: null
        }

    }

    

    upcomingWorkouts(currentUser) {
        if (currentUser && currentUser.workouts.length > 0) {
            const workouts = currentUser.workouts.map(workout =>
                <div className='wkc'>
                    <div className='work-left'>
                        <Link to={`/trainers/${workout.trainerId}`}><img src={workout.trainerImage} /></Link>
                    </div>
                    <div className='work-right'>
                        <span><strong>Your Workout With: </strong>{workout.trainerName}</span><br />
                        <span><strong>Date: </strong> {workout.date}</span><br />
                        <span><strong>Time:</strong> {workout.time}</span><br />
                        <span><strong>Location: </strong>{workout.location}</span><br />
                        <div className="wkc-links">
                            <span onClick={()=> this.setState({ workout, modal: "update" })}>Update</span>
                            <span onClick={()=> this.setState({ workout, modal: "delete" })}>Delete</span>
                        </div>
                    </div>

                </div>
            )

            return workouts
        } else {
            return (
                <p>You have no upcoming workouts...</p>
            )
        }
    }

    formattedTimes(workout) {

        if (this.state.date) {

            const dateAvail = workout.trainerAvailability.split(", ").filter(
                avail => avail.includes(this.state.date.split(" ")[0]))[0]

            const fullTime = dateAvail.split("-")[1]
            const twoTimes = fullTime.split(" to ").map(time => parseInt(time))
            const timeOptions = []
            for (let i = twoTimes[0]; i < twoTimes[1]; i++) {
                timeOptions.push(`${i <= 12 ? i : (i - 12)}:00 ${i < 12 ? "AM" : "PM"}`)
            }

            return timeOptions
        }
    }


    render() {
        const currentUser = this.props.currentUser[this.props.currentUserId];

        const deleteWorkout = (
            <div onClick={(e) => e.stopPropagation()} className='user-show-delete-modal-container-top'>
                <div class="delete-text">
                    <p class="delete-text-q">Are you sure you want to delete the workout?</p>
                    <div class="buttons-box">
                        <button onClick={() => this.props.deleteWorkout(this.state.workout._id).then(() => window.location.reload())} class="del-yes">Yes</button>
                        <button onClick={() => this.setState({ modal: false })} class="del-no">No</button>
                    </div>
                </div>
            </div>
        )



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
                            <LocationFormContainer currentUser={this.props.currentUser[this.props.currentUserId]} />
                        </div>
                        <div id="upc-workouts">
                            <h2>My Upcoming Workouts</h2>
                            {
                                this.state.modal ?
                                
                                    this.state.modal === "delete" ?
                                    <div onClick={() => this.setState({ modal: false })} className="user-show-modal-background">
                                        {deleteWorkout}
                                    </div>
                                    :

                                    <div onClick={() => this.setState({ modal: false })} className="user-show-modal-background">
                                        <UpdateWorkout workout={this.state.workout} currentUser={currentUser}/>
                                    </div>
                                    : null
                            }
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