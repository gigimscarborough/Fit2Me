import React from 'react';
import { withRouter } from 'react-router-dom';
import fit2me from '../../assets/images/fit2me.png'
import { login } from '../../util/session_api_util';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            firstName: '',
            lastName: '',
            password: '',
            password2: '',
            canTravel: "",
            hasLocation: "",
            // zipCode: "",
            errors: {},

        };
        this.handleDemo = this.handleDemo.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this);
       
    }

    componentWillReceiveProps(nextProps) {

        this.setState({ errors: nextProps.errors })
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        let user = {
            email: this.state.email,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            password: this.state.password,
            password2: this.state.password2,
            canTravel: this.state.canTravel,
            hasLocation: this.state.hasLocation,
            // zipCode: this.state.zipCode
            
        };
   
 
        this.props.signup(user, this.props.history).then(
            (output) => {
                console.log(output.errors)
                if (output.errors == undefined) {
                    let sUser = {
                        email: this.state.email,
                        password: this.state.password
                    }
                    this.props.login(sUser)
                    this.props.closeModal()
                }
            }
        )
    }

    handleDemo() {
        let user = {
            email: "hey@hey.com",
            password: "pass1234"
        }

        this.props.login(user)
        this.props.closeModal()
        
    }

    renderErrors() {
        return (
            <ul>
                {Object.keys(this.state.errors).map((error, i) => (
                    <li key={`error-${i}`}>
                        {this.state.errors[error]}
                    </li>
                ))}
            </ul>
        );
    }


    handleErrors(type) {
        const inputErrors = Object.keys(this.state.errors).filter(error => this.state.errors[error].includes(type))
        return inputErrors.map(error => <li className="err-list">{this.state.errors[error]}</li>)
    }

    render() {
        return (
            <div className="modal-top" onClick={e => e.stopPropagation()}>
                <img className="session-logo" src={fit2me} alt="logo"/>
                <h1 className="session-form-header">CREATE AN ACCOUNT TO BOOK YOUR WORKOUT NOW!</h1>
                <div className="session-form-container">
                    <form className="session-form" onSubmit={this.handleSubmit}>
                        <input type="text"
                            value={this.state.email}
                            onChange={this.update('email')}
                            placeholder="Email"
                            className="username-input"
                        />
                        {this.handleErrors('Email')}
                        <br />
                        <input type="text"
                            value={this.state.handle}
                            onChange={this.update('firstName')}
                            placeholder="First Name"
                        />
                        {this.handleErrors('First')}
                        <br />
                        <input type="text"
                            value={this.state.handle}
                            onChange={this.update('lastName')}
                            placeholder="Last Name"
                        />
                        {this.handleErrors('Last')}
                        <br />
                        <input type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                            placeholder="Password"
                            className="password-input"
                        />
                        {this.handleErrors('Password must be at least')}
                        <br />
                        <input type="password"
                            value={this.state.password2}
                            onChange={this.update('password2')}
                            placeholder="Confirm Password"
                        />
                        {this.handleErrors('Confirm')}
                        {this.handleErrors('Passwords must match')}
                        <br />
                        {/* <div className="signup-travel-radio">
                            <p className="quest">Are you willing to travel?</p>
                            <div className ="radio-cont">
                            <label> 
                                <input type="radio"
                                    value="true"
                                    onChange={this.update('willTravel')}   
                                    className="radio"
                                    name="travel"
                                />                                
                            </label>Yes

                            <label> 
                                <input type="radio"
                                    value=""
                                    onChange={this.update('willTravel')}
                                    className="radio"
                                    name="travel"
                                />
                            </label> No
                            </div> */}
                            {/* </div> */}
                        {/* <input type="text"
                            value={this.state.zipCode}
                            onChange={this.update('zipCode')}
                            placeholder="Zip Code"
                        />
                        {this.handleErrors('Zip')}
                            <br /> */}
                        
                        <input className="form-submit" type="submit" value="Sign Up" />
                        <br />
                        <button className="demo-button" onClick={this.handleDemo}>Login with Demo User</button>
                    </form>
                    <div className="switch-session">
                        <p>Already a member?</p>
                        <p className="switch-link" onClick={() => this.props.openModal('login')}>Log in!</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(SignupForm);