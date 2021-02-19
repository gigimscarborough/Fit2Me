import { Discovery } from 'aws-sdk';
import React from 'react'
import './user.scss'



class LocationForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ownerId: this.props.currentUser["_id"],
            streetAddress: "",
            city: "",
            state: "",
            borough: "",
            equipment: {
                "Squat Rack": "",
                "Weight Set": "",
                "Medicine Balls": "",
                "Resistance Bands": "",
                "Treadmill": "",
                "Stationary Bike": "",
                "Pull-Up Bar": ""
            }
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleAddress(type) {
        return e => this.setState({
            [type]: e.currentTarget.value
        });
    }

    handleInput(type) {
        return e => this.setState({
            [type]: e.currentTarget.value
        });
    }

    handleEqipment(type) {
        return () => {
            const equipment = Object.assign({}, this.state.equipment)
            const value = this.state.equipment[type] === type ? "" : type

            equipment[type] = value
            this.setState({ equipment: equipment })

        }
    }


    handleSubmit(e) {
        e.preventDefault();

        const equipment = Object.values(this.state.equipment).filter(type => type)

        let form = {
            ownerId: this.state.ownerId,
            address: {
                streetAddress: this.state.streetAddress,
                city: this.state.city,
                state: this.state.state,
                borough: this.state.borough
            },
            equipment
        };
        

        this.props.createLocation(form)
            .then(() => window.location.reload())
    }


    render() {
        if (this.props.currentUser.location) {
            return (
                <div className="loc-form">
                    <h2>My Location</h2>
                    <span>
                        <strong>Street Address:</strong> {this.props.currentUser.location.address.streetAddress}
                    </span>
                    <br />
                    <br />

                    <span>
                        <strong>City:</strong> {this.props.currentUser.location.address.city}

                    </span>
                    <br />
                    <br />
                    <span>
                        <strong>State:</strong> {this.props.currentUser.location.address.state}

                    </span>
                    <br />
                    <br />
                    <span><strong>Borough:</strong> {this.props.currentUser.location.address.borough}

                    </span>
                    <br />
                    <br />

                </div>
            )
        } else { }

        return (
            <form className="loc-form" onSubmit={this.handleSubmit}>
                <h2>Add Your Location</h2>
                <input type="text" placeholder="Street Address" onChange={this.handleAddress("streetAddress")} />
                <br />
                <input type="text" placeholder="City" onChange={this.handleAddress("city")} />
                <br />
                <input type="text" placeholder="State" onChange={this.handleAddress("state")} />
                <br />
                <select type="text" onChange={this.handleAddress("borough")} >
                    <option value="" selected disabled>Borough</option>
                    <option value="Manhattan">Manhattan</option>
                    <option value="Queens">Queens</option>
                    <option value="Brooklyn">Brooklyn</option>
                    <option value="Bronx">Bronx</option>
                    <option value="Staten Island">Staten Island</option>
                </select>
                <br />
                {/* <input type="text" placeholder="Please enter all available equipment seperated by a comma and space" onChange={this.handleInput("equipment")} /> */}


                <div className="checkbox-outer-cont">
                <h2>Equipment</h2>

                    <div className="checkbox-row">
                        <div className="checkbox-inner-cont">
                            <p>Squat Rack</p>
                            <input className="checkbox-location" type="checkbox" onChange={this.handleEqipment("Squat Rack")} />
                        </div>
                        <div className="checkbox-inner-cont">
                            <p>Medicine Balls</p>
                            <input className="checkbox-location" type="checkbox" onChange={this.handleEqipment("Medicine Balls")} />
                        </div>
                        <div className="checkbox-inner-cont">
                            <p>Weight Set</p>
                            <input className="checkbox-location" type="checkbox" onChange={this.handleEqipment("Weight Set")} />
                        </div>
                        <div className="checkbox-inner-cont">
                            <p>Resistance Bands</p>
                            <input className="checkbox-location" type="checkbox" onChange={this.handleEqipment("Resistance Bands")} />
                        </div>

                    </div>

                    <div className="checkbox-row">
                        <div className="checkbox-inner-cont">
                            <p>Treadmill</p>
                            <input className="checkbox-location" type="checkbox" onChange={this.handleEqipment("Treadmill")} />
                        </div>

                        <div className="checkbox-inner-cont">
                            <p>Stationary Bike</p>
                            <input className="checkbox-location" type="checkbox" onChange={this.handleEqipment("Stationary Bike")} />
                        </div>
                        <div className="checkbox-inner-cont">
                            <p>Pull-Up Bar</p>
                            <input className="checkbox-location" type="checkbox" onChange={this.handleEqipment("Pull-Up Bar")} />
                        </div>
                    </div>
                </div>
                <br />
                <button>ADD MY LOCATION</button>
            </form>
        )
    }
}

export default LocationForm;