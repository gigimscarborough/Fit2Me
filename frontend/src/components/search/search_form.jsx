import React from 'react'
import './search.scss'
import {Redirect} from 'react-router-dom'

class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            canTravel: this.props.search.canTravel || "",
            hasLocation: this.props.search.hasLocation || "",
            experienceLevel: this.props.search.experienceLevel || "intermediate",
            specialty: this.props.search.specialty || "cardio",
            borough: this.props.search.borough ? this.props.search.borough : this.props.currentUser ? this.props.currentUser.location ? this.props.currentUser.location.address.borough : null : null,
            didSubmit: false
        }

        this.handleLocation = this.handleLocation.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount(){
        this.props.clearTrainers()
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
        borough: this.state.borough
      }

      this.props.sendForm(this.state)
      this.props.history.push("/search/results")
    //   this.props.searchTrainers(form)
      
      
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
                        <div className="search-form-d">
                            <h2>Select Your Workout Type</h2>
                            <select onChange={this.handleInput("specialty")}>
                                <option value="" disabled selected> --- Workout Type --- </option>
                                <option value="Cardio">Cardio</option>
                                <option value="Yoga">Yoga</option>
                                <option value="High Intensity Interval Training">High Intensity Interval Training</option>
                                <option value="Weight Training"> Weight Training</option>
                                <option value="Kickboxing">Kickboxing</option>
                                <option value="Tabata">Tabata</option>
                            </select>
                        </div>
                        <div className="search-form-d"> 
                            <h2>Select Your Trainers Experience Level</h2>
                            <select onChange={this.handleInput("experienceLevel")}>
                                <option value="" disabled selected> --- Experience Level --- </option>
                                <option value="Beginner">Beginner</option>
                                <option value="Intermediate">Intermediate</option>
                                <option value="Master">Master</option>
                            </select>
                        </div>
                        <div className="search-form-d">
                            <h2>Would You Prefer A Workout At Your Own Location Or Your Trainers?</h2>
                            <select onChange={this.handleLocation}>
                                <option value="" disabled selected> --- Location Preference --- </option>
                                <option value="users">My Location</option>
                                <option value="trainers">Trainer's Location</option>
                                <option value="both">No Preference</option>
                            </select>
                        </div >
                        <div className="search-form-d">
                            <h2>Please Select Your Borough</h2>
                            <select className="zipcode-inp" type="text" onChange={this.handleInput("borough")}>
                                {!this.props.currentUser || !this.props.currentUser.location ? <option selected value="" disabled> --- Borough --- </option> : <option value="" disabled> --- Borough --- </option>}
                                {this.props.currentUser ? this.props.currentUser.location ? this.props.currentUser.location.address.borough === "Manhattan" ? <option selected value="Manhattan">Manhattan</option> : <option value="Manhattan">Manhattan</option> : <option value="Manhattan">Manhattan</option> : <option value="Manhattan">Manhattan</option>}
                                {this.props.currentUser ? this.props.currentUser.location ? this.props.currentUser.location.address.borough === "Brooklyn" ? <option selected value="Brooklyn">Brooklyn</option> : <option value="Brooklyn">Brooklyn</option> : <option value="Brooklyn">Brooklyn</option> : <option value="Brooklyn">Brooklyn</option>}
                                {this.props.currentUser ? this.props.currentUser.location ? this.props.currentUser.location.address.borough === "Queens" ? <option selected value="Queens">Queens</option> : <option value="Queens">Queens</option> : <option value="Queens">Queens</option> : <option value="Queens">Queens</option>}
                                {this.props.currentUser ? this.props.currentUser.location ? this.props.currentUser.location.address.borough === "Bronx" ? <option selected value="Bronx">Bronx</option> : <option value="Bronx">Bronx</option> : <option value="Bronx">Bronx</option> : <option value="Bronx">Bronx</option>}
                                {this.props.currentUser ? this.props.currentUser.location ? this.props.currentUser.location.address.borough === "Staten Island" ? <option selected value="Staten Island">Staten Island</option> : <option value="Staten Island">Staten Island</option> : <option value="Staten Island">Staten Island</option> : <option value="Staten Island">Staten Island</option>}
                            </select>
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