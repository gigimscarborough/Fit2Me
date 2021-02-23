import { Discovery } from 'aws-sdk';
import React from 'react'
import './user.scss'



class LocationForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ownerId: this.props.currentUser["_id"],
            streetAddress: this.props.currentUser.location ? this.props.currentUser.location.address.streetAddress ? this.props.currentUser.location.address.streetAddress : "" : "",
            city: this.props.currentUser.location ? this.props.currentUser.location.address.city ? this.props.currentUser.location.address.city: "" : "",
            state: this.props.currentUser.location ? this.props.currentUser.location.address.state ? this.props.currentUser.location.address.state : "" : "",
            borough: this.props.currentUser.location ? this.props.currentUser.location.address.borough ? this.props.currentUser.location.address.borough : "" : "",
            equipment: {
                "Squat Rack": this.props.currentUser.location ? this.props.currentUser.location.equipment.includes("Squat Rack") ? "Squat Rack" : "" : "",
                "Weight Set": this.props.currentUser.location ? this.props.currentUser.location.equipment.includes("Weight Set") ? "Weight Set" : "" : "",
                "Medicine Balls": this.props.currentUser.location ? this.props.currentUser.location.equipment.includes("Medicine Balls") ? "Medicine Balls" : "" : "",
                "Resistance Bands": this.props.currentUser.location ? this.props.currentUser.location.equipment.includes("Resistance Bands") ? "Resistance Bands" : "" : "",
                "Treadmill": this.props.currentUser.location ? this.props.currentUser.location.equipment.includes("Treadmill") ? "Treadmill" : "" : "",
                "Stationary Bike": this.props.currentUser.location ? this.props.currentUser.location.equipment.includes("Stationary Bike") ? "Stationary Bike" : "" : "",
                "Pull-Up Bar": this.props.currentUser.location ? this.props.currentUser.location.equipment.includes("Pull-Up Bar") ? "Pull-Up Bar" : "" : ""
            },
            update: false,
            handleUpdate: false
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleUpdate = this.handleUpdate.bind(this)
    }

    componentDidUpdate(){
        if(this.state.handleUpdate){
            this.props.fetchUser(this.props.currentUser._id);
            this.setState({handleUpdate: false, update: false})
        }
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
        
        console.log('submitting')

        this.props.createLocation(form)
            // .then(() => window.location.reload())
            
    }

    handleUpdate(e){
        e.preventDefault()

        const equipment = Object.values(this.state.equipment).filter(type => type)

        let form = {
            _id: this.props.currentUser.location._id,
            ownerId: this.state.ownerId,
            address: {
                streetAddress: this.state.streetAddress,
                city: this.state.city,
                state: this.state.state,
                borough: this.state.borough
            },
            equipment
        };
        
        this.props.updateLocation(form); 
        this.setState({ handleUpdate: true });
        
    }


    render() {

        if (this.props.currentUser.location) {

            if(this.state.update){
                return (
                    <form className="loc-form" onSubmit={this.handleUpdate}>
                    <h2>Update Your Location</h2>
                    <input type="text" defaultValue={this.props.currentUser.location.address.streetAddress}  placeholder="Street Address" onChange={this.handleAddress("streetAddress")} />
                    <br />
                    <input type="text" defaultValue={this.props.currentUser.location.address.city}  placeholder="City" onChange={this.handleAddress("city")} />
                    <br />
                    <input type="text" defaultValue={this.props.currentUser.location.address.state}  placeholder="State" onChange={this.handleAddress("state")} />
                    <br />
                    <select type="text" onChange={this.handleAddress("borough")} >
                    {!this.props.currentUser || !this.props.currentUser.location ? <option selected value="" disabled> Borough </option> : <option value="" disabled> --- Borough --- </option>}
                                {this.props.currentUser ? this.props.currentUser.location ? this.props.currentUser.location.address.borough === "Manhattan" ? <option selected value="Manhattan">Manhattan</option> : <option value="Manhattan">Manhattan</option> : <option value="Manhattan">Manhattan</option> : <option value="Manhattan">Manhattan</option>}
                                {this.props.currentUser ? this.props.currentUser.location ? this.props.currentUser.location.address.borough === "Brooklyn" ? <option selected value="Brooklyn">Brooklyn</option> : <option value="Brooklyn">Brooklyn</option> : <option value="Brooklyn">Brooklyn</option> : <option value="Brooklyn">Brooklyn</option>}
                                {this.props.currentUser ? this.props.currentUser.location ? this.props.currentUser.location.address.borough === "Queens" ? <option selected value="Queens">Queens</option> : <option value="Queens">Queens</option> : <option value="Queens">Queens</option> : <option value="Queens">Queens</option>}
                                {this.props.currentUser ? this.props.currentUser.location ? this.props.currentUser.location.address.borough === "Bronx" ? <option selected value="Bronx">Bronx</option> : <option value="Bronx">Bronx</option> : <option value="Bronx">Bronx</option> : <option value="Bronx">Bronx</option>}
                                {this.props.currentUser ? this.props.currentUser.location ? this.props.currentUser.location.address.borough === "Staten Island" ? <option selected value="Staten Island">Staten Island</option> : <option value="Staten Island">Staten Island</option> : <option value="Staten Island">Staten Island</option> : <option value="Staten Island">Staten Island</option>}
                    </select>
                    <br />    
    
                    <div className="checkbox-outer-cont">
                    <h2>Equipment</h2>
    
                        <div className="checkbox-row">
                            <div className="checkbox-inner-cont">
                                <p>Squat Rack</p>
                                {
                                     this.state.equipment["Squat Rack"] ?
                                    <input checked className="checkbox-location" type="checkbox" onChange={this.handleEqipment("Squat Rack")} /> :
                                    <input className="checkbox-location" type="checkbox" onChange={this.handleEqipment("Squat Rack")} />
                                }
                            </div>
                            <div className="checkbox-inner-cont">
                                <p>Medicine Balls</p>
                                {
                                    this.state.equipment["Medicine Balls"] ?
                                    <input checked className="checkbox-location" type="checkbox" onChange={this.handleEqipment("Medicine Balls")} /> :
                                    <input className="checkbox-location" type="checkbox" onChange={this.handleEqipment("Medicine Balls")} />
                                }
                            </div>
                            <div className="checkbox-inner-cont">
                                <p>Weight Set</p>
                                {
                                    this.state.equipment["Weight Set"] ?
                                    <input checked className="checkbox-location" type="checkbox" onChange={this.handleEqipment("Weight Set")} /> :
                                    <input className="checkbox-location" type="checkbox" onChange={this.handleEqipment("Weight Set")} />
                                }
                            </div>
                            <div className="checkbox-inner-cont">
                                <p>Resistance Bands</p>
                                {
                                    this.state.equipment["Resistance Bands"] ?
                                    <input checked className="checkbox-location" type="checkbox" onChange={this.handleEqipment("Resistance Bands")} /> :
                                    <input className="checkbox-location" type="checkbox" onChange={this.handleEqipment("Resistance Bands")} />
                                }
                            </div>
    
                        </div>
    
                        <div className="checkbox-row">
                            <div className="checkbox-inner-cont">
                                <p>Treadmill</p>
                                {
                                    this.state.equipment["Treadmill"] ?
                                    <input checked className="checkbox-location" type="checkbox" onChange={this.handleEqipment("Treadmill")} /> :
                                    <input className="checkbox-location" type="checkbox" onChange={this.handleEqipment("Treadmill")} />
                                }
                            </div>
    
                            <div className="checkbox-inner-cont">
                                <p>Stationary Bike</p>
                                {
                                    this.state.equipment["Stationary Bike"] ?
                                    <input checked className="checkbox-location" type="checkbox" onChange={this.handleEqipment("Stationary Bike")} /> :
                                    <input className="checkbox-location" type="checkbox" onChange={this.handleEqipment("Stationary Bike")} />
                                }
                            </div>
                            <div className="checkbox-inner-cont">
                                <p>Pull-Up Bar</p>
                                {
                                    this.state.equipment["Pull-Up Bar"] ?
                                    <input checked className="checkbox-location" type="checkbox" onChange={this.handleEqipment("Pull-Up Bar")} /> :
                                    <input className="checkbox-location" type="checkbox" onChange={this.handleEqipment("Pull-Up Bar")} />
                                }
                            </div>
                        </div>
                    </div>
                    <br />
                    <button>UPDATE MY LOCATION</button>
                </form>
                )
            }else{
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
                        <button onClick={()=>this.setState({update: true})}>Update</button>
    
                    </div>
                )
            }
            
        } 

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