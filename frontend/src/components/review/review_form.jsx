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
            workoutDate: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

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
        debugger
        e.preventDefault(); 
        this.props.createReview(this.state).then(()=> this.props.history.push(`/trainers/${this.props.trainer.id}`))
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
                                        <p className="select-rating-text">How would you rate your workout with him? (must choose one)</p>
                                        <div className="radio-button-container">
                                            <span className="rating-radio-button">
                                                <input className="radio-button" type="radio" name="trainer-rating" id="1" value={this.state.rating} onChange={this.handleChange('rating')}/>
                                                <label htmlFor="1">{1}</label>
                                            </span>
                                            <span className="rating-radio-button">
                                                <input className="radio-button"type="radio" name="trainer-rating" id="2" value={this.state.rating} onChange={this.handleChange('rating')} />
                                                <label htmlFor="2">{2}</label>
                                            </span>
                                            <span className="rating-radio-button">
                                                <input className="radio-button"type="radio" name="trainer-rating" id="3" value={this.state.rating} onChange={this.handleChange('rating')}/>
                                                <label htmlFor="3">{3}</label>
                                            </span>
                                            <span className="rating-radio-button">
                                                <input className="radio-button"type="radio" name="trainer-rating" id="4" value={this.state.rating} onChange={this.handleChange('rating')}/>
                                                <label htmlFor="4">{4}</label>
                                            </span>
                                            <span className="rating-radio-button">
                                                <input className="radio-button"type="radio" name="trainer-rating" id="5" value={this.state.rating} onChange={this.handleChange('rating')}/>
                                                <label htmlFor="5">{5}</label>
                                            </span>
                                        </div>
                                    </div>
                                    <h3 className="review-body">WRITE YOUR REVIEW</h3>                                   
                                    <textarea className="text-area-text"value={this.state.body} onChange={this.handleChange("body")} 
                                    placeholder="If it weren't for Jim, I don't know how I would have kept my body this way during the Covid! He is so fantastic with the equipment, and his workout routine helped me get in shape even during this time!!"></textarea>
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