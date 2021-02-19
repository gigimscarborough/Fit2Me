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
            workout: null,
            update: false,
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleUpdate = this.handleUpdate.bind(this)
        this.date = new Date()

    }

    timeOptions() {

        if (this.state.workout) {
            const workout = Object.assign({}, this.state.workout)


            const dateAvail = this.state.workout.trainerAvailability.split(", ").filter(
                avail => avail.includes(this.state.workout.date.split(" ")[0]))[0]

            const fullTime = dateAvail.split("-")[1]
            const twoTimes = fullTime.split(" to ").map(time => parseInt(time))
            //    const finalTimes = twoTimes.map(time => time.split(":").slice(0, 1))
            const timeOptions = []
            for (let i = twoTimes[0]; i < twoTimes[1]; i++) {
                timeOptions.push(<option>{i <= 12 ? i : (i - 12)}:00 {i < 12 ? "AM" : "PM"}</option>)
            }

            return (
                <div>
                    <p>Select A Time:</p>
                    <div className="loc-div">
                        <select onChange={(e)=>{workout.time = e.currentTarget.value; this.setState({workout})}}>
                            <option disabled selected value=""> --- Select A Time --- </option>
                            {timeOptions}
                        </select>
                    </div>
                </div>
            )

        }


    }

    componentDidUpdate(){
        if(this.state.update){
            this.props.fetchUser(this.props.currentUserId);
            this.setState({update: false})
        }
    }

    // updateModal(upWorkout){
    //     return () =>{
    //         this.setState({ workout: upWorkout, modal: "update" });
    //         const updateModal = document.getElementById("update-workout-modal")
    //         updateModal.style.display = "block" 
    //     }
    // }



    updateModal() {
        
        if(!this.state.workout)return null
        

        const currentUser = this.props.currentUser[this.props.currentUserId];
        const workout = Object.assign({}, this.state.workout)


        

        const dateOptions = []

        for (let i = 1; i <= 7; i++) {
            let date = new Date();
            let nextDate = date.getDate() + i;
            date.setDate(nextDate)

            if (this.state.workout.trainerAvailability.includes(date.toDateString().split(" ").slice(0, 1))) {

                dateOptions.push(<option value={date.toDateString()}>{date.toDateString()}</option>)
            }

        }


        return (

            <div id="update-workout-modal" onClick={(e) => e.stopPropagation()} className="workout-inner">
                <div className="workout-head">
                    <h1>Update My Workout</h1>
                </div>
                <div className="workout-prof">
                    <div >
                        <form>
                            <p>Select A Location:</p>
                            <div className="loc-div">
                                <select onChange={(e)=>{workout.location = e.currentTarget.value; this.setState({workout})}}>
                                    <option disabled selected value=""> --- Select A Location --- </option>
                                    {this.state.workout.trainerLocation ? <option value={this.state.workout.trainerLocation}>Trainer's Location</option> : null}
                                    {this.props.currentUser.location ? <option value={this.props.currentUser.location.address.streetAddress}>My Location</option> : null}
                                </select>
                            </div>
                            <p>Select A Date:</p>
                            <div className="loc-div">
                                <select onChange={(e)=>{workout.date = e.currentTarget.value; this.setState({workout})}}>
                                    <option disabled selected value=""> --- Select A Date --- </option>
                                    {this.state.workout.trainerAvailability.includes(this.date.toDateString().split(" ").slice(0, 1)) ? <option value={this.date.toDateString()}>{this.date.toDateString()}</option> : null}

                                    {dateOptions}
                                </select>
                            </div>
                            {this.timeOptions()}
                            <div className="btn-div">

                                <button onClick={this.handleUpdate} className="book-btn">UPDATE THIS WORKOUT</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>

        )



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
                            <span onClick={()=> this.setState({modal: "update", workout: workout})}>Update</span>
                            <span onClick={()=> this.setState({modal: "delete", workout: workout})}>Delete</span>
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

    handleSubmit(e){
        e.preventDefault()
        this.props.deleteWorkout(this.state.workout._id); 
        this.setState({ modal: false, update: true });
        
    }
    handleUpdate(e){
        e.preventDefault()
        
        this.props.updateWorkout(this.state.workout); 
        this.setState({ modal: false, update: true });
        
    }

    render() {
        const currentUser = this.props.currentUser[this.props.currentUserId];

        const deleteWorkout = (
            <div onClick={(e) => e.stopPropagation()} className='user-show-delete-modal-container-top'>
                <div class="delete-text">
                    <p class="delete-text-q">Are you sure you want to delete the workout?</p>
                    <div class="buttons-box">
                        <button onClick={this.handleSubmit} class="del-yes">Yes</button>
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
                                        {this.updateModal()}
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