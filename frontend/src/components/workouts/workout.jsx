import React from 'react'
import './workouts.scss'
import {Link} from 'react-router-dom'


class Workout extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            trainerId: this.props.trainerId,
            userId: this.props.currentUserId,
            date: "",
            time: "",
            location: "",
            trainerName: this.props.trainer.firstName + " " + this.props.trainer.lastName,
            trainerImage: this.props.trainer.imageUrl,
            trainerAvailability: this.props.trainer.dailyAvailability,
            trainerLocation: this.props.trainer.location ? this.props.trainer.location.address.streetAddress : null
        }
        this.date = new Date()
        this.timeOptions = this.timeOptions.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        this.props.getTrainer(this.props.trainerId)
        // this.props.fetchUser(this.props.currentUserId)



    }

    timeOptions() {

        if (this.state.date) {
        
            const dateAvail = this.props.trainer.dailyAvailability.split(", ").filter(
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

    handleInput(type) {
        return e => this.setState({
            [type]: e.currentTarget.value
        });
    }
    


    handleSubmit(e){
        e.preventDefault()
        let workout = {
            trainerId: this.state.trainerId,
            userId: this.state.userId,
            date: this.state.date,
            time: this.state.time,
            location: this.state.location,
            trainerName: this.state.trainerName,
            trainerImage: this.state.trainerImage,
            trainerAvailability: this.state.trainerAvailability,
            trainerLocation: this.state.trainerLocation
        }

        this.props.createWorkout(workout)
        
        .then(() => this.props.history.push(`/users/${this.props.currentUserId}`))
    

    }






    render() {
        const dateOptions = []

        for (let i = 1; i <= 7; i++) {
            let date = new Date();
            let nextDate = date.getDate() + i;
            date.setDate(nextDate)

            if (this.props.trainer.dailyAvailability.includes(date.toDateString().split(" ").slice(0, 1))) {

                dateOptions.push(<option value={date.toDateString()}>{date.toDateString()}</option>)
            }

        }

        // if (this.state.date) {
        //     const dateAvail = this.props.trainer.dailyAvailability.split(", ").filter(
        //         avail => avail.includes(this.state.date.split(" ").slice(0, 1)))

        //     const fullTime = dateAvail.split("-").slice(1)
        //     const twoTimes = fullTime.split(" to ")
        //     const finalTimes = twoTimes.map(time => time.split(":").slice(0, 1))
        //     const timeOptions = []
        //     for (let i = finalTimes[0]; i < finalTimes[1]; i++ ){
        //         timeOptions.push()
        //     }


        // }
        
        return (
            <div className="holder">
                <div className="workout-cont">
                    <div className="workout-inner">
                        <div className="workout-head">
                            <h1>Reserve Your Workout</h1>
                        </div>
                        <div className="workout-prof">
                            <p>You Selected:</p>
                            <div className="t-cont">
                                <div className="t-l">
                                    <Link to={`/trainers/${this.props.trainer._id}`}><img src={this.props.trainer.imageUrl} /></Link>
                                </div>
                                <div className="t-r">
                                    <Link to={`/trainers/${this.props.trainer._id}`}><p>{this.props.trainer.firstName} {this.props.trainer.lastName}</p></Link>
                                </div>
                            </div>
                            <div >
                                <form onSubmit={this.handleSubmit}>
                                        <p>Select A Location:</p>
                                    <div className="loc-div">
                                        <select onChange={this.handleInput('location')}>
                                            <option disabled selected value=""> --- Select A Location --- </option>
                                            {this.props.trainer.location ? <option value={this.props.trainer.location.address.streetAddress}>Trainer's Location</option> : null}
                                            {this.props.currentUser.location ? <option value={this.props.currentUser.location.address.streetAddress}>My Location</option> : null}
                                        </select>
                                    </div>
                                        <p>Select A Date:</p>
                                    <div className="loc-div">
                                        <select onChange={this.handleInput('date')}>
                                            <option disabled selected value=""> --- Select A Date --- </option>
                                            {this.props.trainer.dailyAvailability.includes(this.date.toDateString().split(" ").slice(0, 1)) ? <option value={this.date.toDateString()}>{this.date.toDateString()}</option> : null}
                                            {/* <option value={this.date.toDateString()}>{this.date.toDateString()}</option> */}
                                            {dateOptions}
                                        </select>
                                    </div>
                                        {this.timeOptions()}
                                        {/* </select> */}
                                    <div className="btn-div">

                                    <button className="book-btn">BOOK MY WORKOUT!</button>
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

export default Workout;