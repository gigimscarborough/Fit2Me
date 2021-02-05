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
        this.handleDemo = this.handleDemo.bind(this)
    
    }

    handleDemo() {
        let user = {
            email: "hey@hey.com",
            password: "pass1234"
        }

        this.props.login(user)
        this.props.closeModal()
        
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.currentUser === true) {
            this.props.closeModal()
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
        // if (Object.keys(this.props.errors).length === 0) {
        //     console.log(Object.keys(this.props.errors).length)
            
        // }
    }

    handleErrors(type) {
        const inputErrors = Object.keys(this.state.errors).filter(error => this.state.errors[error].includes(type))
        return inputErrors.map(error => <li className="err-list">{this.state.errors[error]}</li>)
    }


    render() {
        return (
            <div className="modal-top" onClick={e => e.stopPropagation()}>
                <img className="session-logo" src={fit2me} alt="logo"/>
                <h1 className="session-form-header">LOG IN TO VIEW YOUR WORKOUTS</h1>
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
                        <input type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                            placeholder="Password"
                            className="password-input"
                        />
                        {this.handleErrors('Password')}
                        <br />
                        <input type="submit" value="Login" className="form-submit"/>
                        {/* {this.renderErrors()} */}
                        <br />
                        <button className="demo-button" onClick={this.handleDemo}>Login with Demo User</button>
                    </form>
                    <div className="switch-session">
                        <p >Not Yet A Member?</p>
                        <p className="switch-link" onClick={() => this.props.openModal('signup')}>Join Us!</p>
                    </div>

                </div>
            </div>
        );
    }
}

export default withRouter(LoginForm);