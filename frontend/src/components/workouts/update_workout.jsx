import React from 'react';

class UpdateWorkout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.workoutId,
            date: "",
            time: "",
            location: "",
        }

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


    render() {
        return(

        )

    

    }

}
export default UpdateWorkout;