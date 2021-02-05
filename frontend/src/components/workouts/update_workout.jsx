import React from 'react';
import './workouts.scss'

class UpdateWorkout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.workoutId,
            date: "",
            time: "",
            location: "",
        }
        this.date = new Date()

    }

    handleInput(type) {
        return e => this.setState({
            [type]: e.currentTarget.value
        });
    }


    handleSubmit(e) {
        e.preventDefault()
        let workout = {
            id: this.state.id,
            date: this.state.date,
            time: this.state.time,
            location: this.state.location,
        }

        this.props.updateWorkout(workout)

            .then(() => this.props.history.push(`/users/${this.props.currentUser._id}`))


    }
    timeOptions() {

        if (this.state.date) {
            const thisWorkout = this.props.currentUser.workouts.filter(workout => workout._id === this.props.workoutId)[0]

            const dateAvail = thisWorkout.trainerAvailability.split(", ").filter(
                avail => avail.includes(this.state.date.split(" ")[0]))[0]

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
                        <select onChange={this.handleInput('time')}>
                            <option disabled selected value=""> --- Select A Time --- </option>
                            {timeOptions}
                        </select>
                    </div>
                </div>
            )

        }


    }



    render() {

        const workout = this.props.currentUser.workouts.filter(workout => workout._id === this.props.workoutId)[0]
        
        const dateOptions = []

        for (let i = 1; i <= 7; i++) {
            let date = new Date();
            let nextDate = date.getDate() + i;
            date.setDate(nextDate)

            if (workout.trainerAvailability.includes(date.toDateString().split(" ").slice(0, 1))) {

                dateOptions.push(<option value={date.toDateString()}>{date.toDateString()}</option>)
            }

        }

        
        return (
            <div className="holder">
                <div className="workout-cont2">
                    <div className="workout-inner">
                        <div className="workout-head">
                            <h1>Update My Workout</h1>
                        </div>
                        <div className="workout-prof">
                            <p>Your Workout With:</p>
                            <div className="t-cont">
                                <div className="t-l">
                                    <img src={workout.trainerImage} />
                                </div>
                                <div className="t-r">
                                    <p>{workout.trainerName}</p>
                                </div>
                                </div>
                                <div >
                                    <form onSubmit={this.handleSubmit}>
                                        <p>Select A Location:</p>
                                        <div className="loc-div">
                                            <select onChange={this.handleInput('location')}>
                                                <option disabled selected value=""> --- Select A Location --- </option>
                                                {workout.trainerLocation ? <option value={workout.trainerLocation}>Trainer's Location</option> : null}
                                                {this.props.currentUser.location ? <option value={this.props.currentUser.location.address.streetAddress}>My Location</option> : null}
                                            </select>
                                        </div>
                                    <p>Select A Date:</p>
                                    <div className="loc-div">
                                        <select onChange={this.handleInput('date')}>
                                            <option disabled selected value=""> --- Select A Date --- </option>
                                            {workout.trainerAvailability.includes(this.date.toDateString().split(" ").slice(0, 1)) ? <option value={this.date.toDateString()}>{this.date.toDateString()}</option> : null}
                
                                            {dateOptions}
                                        </select>
                                    </div>
                                    {this.timeOptions()}
                                    <div className="btn-div">

                                        <button className="book-btn">UPDATE THIS WORKOUT</button>
                                    </div>
                                    </form>
                                </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        )



    }

}
export default UpdateWorkout;