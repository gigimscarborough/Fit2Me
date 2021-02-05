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
            zip: "",
            equipment: ""
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


    handleSubmit(e) {
        console.log("attemtping to submit location creation")
        e.preventDefault();

        let form = {
            ownerId: this.state.ownerId,
            address: {
                streetAddress: this.state.streetAddress,
                city: this.state.city,
                state: this.state.state,
                zip: this.state.zip
            },
            equipment: this.state.equipment.split(", ")
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
                    <br/>
                    <br />
                    
                    <span>
                        <strong>City:</strong> {this.props.currentUser.location.address.city}

                    </span>
                    <br />
                    <br/>
                    <span>
                        <strong>State:</strong> {this.props.currentUser.location.address.state}

                    </span>
                    <br />
                    <br/>
                    <span><strong>Zip Code:</strong> {this.props.currentUser.location.address.zip}

                    </span>
                    <br />
                    <br />

                </div>
            )
        } else {}

        return (
            <form className="loc-form" onSubmit={this.handleSubmit}>
                <h2>Add Your Location</h2>
                <input type="text" placeholder="Street Address" onChange={this.handleAddress("streetAddress")} />
                <br />
                <input type="text" placeholder="City" onChange={this.handleAddress("city")} />
                <br />
                <input type="text" placeholder="State" onChange={this.handleAddress("state")} />
                <br />
                <input type="text" placeholder="Zip Code" onChange={this.handleAddress("zip")} />
                <br />
                <input type="text" placeholder="Please enter all available equipment seperated by a comma and space" onChange={this.handleInput("equipment")} />
                <br />
                <button>ADD MY LOCATION</button>
            </form>
        )
    }
}

export default LocationForm;