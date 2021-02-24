import React from 'react';
import { Link, Redirect } from 'react-router-dom'
import './review_form.scss'

class ReviewForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            body: '',
            rating: null,
            userId: this.props.user_id,
            trainerId: this.props.match.params.trainerId,
            workoutDate: '',
            errors: {}
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentWillReceiveProps(nextProps) {
        this.setState({errors: nextProps.errors})
    }

    handleErrors(type) {
        const inputErrors = Object.keys(this.state.errors).filter(error => this.state.errors[error].includes(type))
        return inputErrors.map(error => <li className="err-list">{this.state.errors[error]}</li>)
    }

    handleErrorBody(type) {
        const inputErrors = Object.keys(this.state.errors).filter(error => this.state.errors[error].includes(type))
        debugger
        return this.state.errors[inputErrors[0]]
    }

    // .map(error => <li className="err-list">{this.state.errors[error]}

    handleChange(type){
        return(e) => (
            this.setState({[type]: e.currentTarget.value})
        )
    }

    componentDidMount(){
        
        this.props.getTrainer(this.props.match.params.trainerId)
        // if (!this.props.user_id) {
        //     this.props.openModal("login").then()
        //     return(
        //         <Redirect to="/"/>
        //     )
        // }
    }

    handleSubmit(e){
        
        e.preventDefault();
        let form = {
            body: this.state.body,
            rating: parseInt(this.state.rating),
            userId: this.state.userId,
            trainerId: this.state.trainerId,
            workoutDate: this.state.workoutDate
        } 
       
        this.props.createReview(form).then((payload)=> {if (payload) this.props.history.push(`/trainers/${this.props.trainer['_id']}`)})
    }

    render(){
        if (!this.props.trainer) {
            return (
                <div>Loading..</div>
            )
        } else {
            return(
                <div className="review-container">
                    <div className="review-form-main">
                        <form onSubmit={this.handleSubmit}>
                            <div className="review-form-box">
                                <div className="review-form-texts">
                                   <img className="review-trainer-pic" src={this.props.trainer.imageUrl} alt=""/>
                                    <span className="review-form-trainer-name">{this.props.trainer.firstName} {this.props.trainer.lastName}</span>
                                </div>
                                <div className="review-content-box">
                                    <div className="review-content">
                                        <p className="select-rating-text">How would you rate your workout with them? (must choose one)</p>
                                        <div className="radio-button-container">
                                            <span className="rating-radio-button">
                                                <input className="radio-button" type="radio" name="trainer-rating" id="1" value={1} onChange={this.handleChange('rating')}/>
                                                <label htmlFor="1">{1}</label>
                                            </span>
                                            <span className="rating-radio-button">
                                                <input className="radio-button"type="radio" name="trainer-rating" id="2" value={2} onChange={this.handleChange('rating')} />
                                                <label htmlFor="2">{2}</label>
                                            </span>
                                            <span className="rating-radio-button">
                                                <input className="radio-button"type="radio" name="trainer-rating" id="3" value={3} onChange={this.handleChange('rating')}/>
                                                <label htmlFor="3">{3}</label>
                                            </span>
                                            <span className="rating-radio-button">
                                                <input className="radio-button"type="radio" name="trainer-rating" id="4" value={4} onChange={this.handleChange('rating')}/>
                                                <label htmlFor="4">{4}</label>
                                            </span>
                                            <span className="rating-radio-button">
                                                <input className="radio-button"type="radio" name="trainer-rating" id="5" value={5} onChange={this.handleChange('rating')}/>
                                                <label htmlFor="5">{5}</label>
                                            </span>
                                        </div>
                                        <ul className="rev-errors-rating">{this.handleErrors("Rating")}</ul>
                                    </div>
                                    <div className="rating-workout-date">
                                        <span className="last-workout-date">last workout date </span>
                                        <input className="rating-workout-d" type="date" value={this.state.workoutDate} onChange={this.handleChange("workoutDate")}/>
                                        <ul className="rev-errors-date">{this.handleErrors("Date")}</ul>
                                    </div>
                                    <h3 className="review-body">WRITE YOUR REVIEW</h3>                                   
                                    <textarea className={`text-area-text ${this.handleErrorBody("Body") ? "b-err" : "n-err"}`}value={this.state.body} onChange={this.handleChange("body")} 
                                    placeholder={this.handleErrorBody("Body") ? this.handleErrorBody("Body") : "Your Review Goes Here!" }></textarea>
                                    {/* <ul className="rev-errors">{this.handleError("Body")}</ul> */}
                                </div>
                            </div>
                            <button className="review-post-button">Post Review</button>
                        </form>
                    </div>
                </div>
        )
        }
        
    }
}

export default ReviewForm