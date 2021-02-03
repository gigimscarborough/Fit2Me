import React from 'react';
import { Link, Redirect } from 'react-router-dom'
import './review_form.scss'

class ReviewForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            body: '',
            rating: '',
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
        debugger
        this.props.getTrainer(this.props.trainer.id)
    }

    handleSubmit(e){
        e.preventDefault(); 
        this.props.createReview(this.state).then(()=> this.props.history.push(`/trainers/${this.props.trainer.id}`))
    }

    render(){
        debugger
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
                                    <span className="review-form-trainer-name">{this.props.trainer.name}</span>
                                </div>
                                <div className="review-content-box">
                                    <div className="">
                                        <p className="select-rating-text">Select your rating</p>
                                        <input type="number" min="1" max="5" className="rating-number"value={this.state.rating} onChange={this.handleChange("rating")}/>
                                    </div>                                   
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