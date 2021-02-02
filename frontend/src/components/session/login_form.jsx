import React from 'react';
import { withRouter } from 'react-router-dom';
import fit2me from '../../assets/images/fit2me.png'


class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            errors: {}
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
    }

   
    componentWillReceiveProps(nextProps) {
        if (nextProps.currentUser === true) {
            this.props.history.push('/');
        }

        this.setState({ errors: nextProps.errors })
    }

 
    update(type) {
        return e => this.setState({
            [type]: e.currentTarget.value
        });
    }


    handleSubmit(e) {
        e.preventDefault();

        let user = {
            email: this.state.email,
            password: this.state.password
        };

        this.props.login(user);
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
                <h1 className="session-form-header">Log into your account to view your reservations</h1>
                <div className="session-form-container">
                    <form className="session-form" onSubmit={this.handleSubmit}>
                        <input type="text"
                            value={this.state.email}
                            onChange={this.update('email')}
                            placeholder="Email"
                            className="username-input"
                        />
                        <br />
                        <input type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                            placeholder="Password"
                            className="password-input"
                        />
                        <br />
                        <input type="submit" value="Login" className="form-submit"/>
                        {this.renderErrors()}
                    </form>
                    <div className="switch-session">
                        <p>Not Yet A Member?</p>
                        <p className="switch-link" onClick={() => this.props.openModal('signup')}>Join Us!</p>
                    </div>

                </div>
            </div>
        );
    }
}

export default withRouter(LoginForm);