import React from 'react'
import './search.scss'
import {Redirect} from 'react-router-dom'

class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            canTravel: "",
            hasLocation: "",
            experienceLevel: "beginner",
            specialty: "yoga",
            zipCode: "",
            didSubmit: false

        }
        this.handleLocation = this.handleLocation.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleInput(type) {
        return e => this.setState({
            [type]: e.currentTarget.value
        });
    }

    handleLocation(e) {
        if (e.currentTarget.value === "users") {
            this.setState({
                "canTravel": "true"
            });

        } else if (e.currentTarget.value === "trainers"){
            this.setState({
                "hasLocation": "true"
            });
        }
    }

    handleSubmit(e) {
      e.preventDefault()

      let form = {
        canTravel: this.state.canTravel,
        hasLocation: this.state.hasLocation,
        experienceLevel: this.state.experienceLevel,
        specialty: this.state.specialty,
        zipCode: this.state.zipCode
      }

      this.props.searchTrainers(form)
      this.props.history.push("/search/results")
        // this.setState({ didSubmit: true })
    }


    render() {
        // if (this.state.didSubmit)
        // {
        //     return (
        //         <Redirect to="/search/results" />
        //     )
        // } else {

        return (
            <div className="search-form">
                <div className="search-form-inner">
                    <form onSubmit={this.handleSubmit} >
                        <div className="search-form-header">
                            <h1>Select Your Trainer Preferences</h1>
                        </div>
                        <div>
                            <h2>Select Your Workout Type</h2>
                            <select onChange={this.handleInput("specialty")}>
                                <option value="" disabled selected> --- Workout Type --- </option>
                                <option value="cardio">Cardio</option>
                                <option value="yoga">Yoga</option>
                                <option value="hiit">High Intensity Interval Training</option>
                                <option value="weight training"> Weight Training</option>
                                <option value="kickboxing">Kickboxing</option>
                                <option value="tabata">Tabata</option>
                            </select>
                        </div>
                        <div>
                            <h2>Select Your Trainers Experience Level</h2>
                            <select onChange={this.handleInput("experienceLevel")}>
                                <option value="" disabled selected> --- Experience Level --- </option>
                                <option value="beginner">Beginner</option>
                                <option value="intermediate">Intermediate</option>
                                <option value="master">Master</option>
                            </select>
                        </div>
                        <div>
                            <h2>Would You Prefer A Workout At Your Own Location Or Your Trainers?</h2>
                            <select onChange={this.handleLocation}>
                                <option value="" disabled selected> --- Location Preference --- </option>
                                <option value="users">My Location</option>
                                <option value="trainers">Trainer's Location</option>
                                <option value="both">No Preference</option>
                            </select>
                        </div >
                        <div>
                            <h2>Please Enter Your Zip Code</h2>
                            <input className="zipcode-inp" type="text" onChange={this.handleInput("zipCode")} placeholder="Zip Code"/>
                        </div >
                        <div className="search-btn-div">
                            <button className="search-form-btn">FIND MY TRAINER!</button>
                        </div>
                    </form>

                </div>
            </div>
        )
        // }
    }
}

export default SearchForm;