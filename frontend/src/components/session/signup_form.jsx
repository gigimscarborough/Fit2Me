import React from 'react';
import { withRouter } from 'react-router-dom';
import fit2me from '../../assets/images/fit2me.png'

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            first_name: '',
            last_name: '',
            password: '',
            password2: '',
            willTravel: "false",
            errors: {}
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearedErrors = false;
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.signedIn === true) {
            this.props.history.push('/login');
        }

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
            password: this.state.password,
            password2: this.state.password2,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
        };

        this.props.signup(user, this.props.history);
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

    render() {
        return (
            <div className="modal-top" onClick={e => e.stopPropagation()}>
                <img className="session-logo" src={fit2me} alt="logo"/>
                <h1 className="session-form-header">Please create an account if you would like to make reservations</h1>
                <div className="session-form-container">
                    <form className="session-form" onSubmit={this.handleSubmit}>
                        <input type="text"
                            value={this.state.email}
                            onChange={this.update('email')}
                            placeholder="Email"
                            className="username-input"
                        />
                        <br />
                        <input type="text"
                            value={this.state.handle}
                            onChange={this.update('firstName')}
                            placeholder="First Name"
                        />
                        <br />
                        <input type="text"
                            value={this.state.handle}
                            onChange={this.update('lastName')}
                            placeholder="Last Name"
                        />
                        <br />
                        <input type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                            placeholder="Password"
                            className="password-input"
                        />
                        <br />
                        <input type="password"
                            value={this.state.password2}
                            onChange={this.update('password2')}
                            placeholder="Confirm Password"
                        />
                        <br />
                        <div className="signup-travel-radio">
                            <p>Are you willing to travel?</p>
                            <label> Yes
                                <input type="radio"
                                    value="true"
                                    onChange={this.update('willTravel')}   
                                    className="radio"
                                    name="travel"
                                />                                
                            </label>

                            <label> No
                                <input type="radio"
                                    value="false"
                                    onChange={this.update('willTravel')}
                                    className="radio"
                                    name="travel"
                                />
                            </label>
                            <br />
                        </div>
                        
                        <input className="form-submit" type="submit" value="Sign Up" />
                        {this.renderErrors()}
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