import React from 'react';
import { Link } from 'react-router-dom';
import './trainer_show.scss';
import ReviewIndexContainer from '../review/review_index_container'
import goldBadge from '../../assets/images/gold_badge.png';

class TrainerShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

        this.props.getTrainer(this.props.trainerId)
        this.props.fetchUser(this.props.currentUserId)
    }

    render() {
        
        if (!this.props.trainer) {
            return (
                <div>Loading..</div>
            )
        } else {
            let sumRating = 0;
            for (let i = 0; i < this.props.trainer.reviews.length; i++) {
                sumRating += this.props.trainer.reviews[i].rating;
            }
            let avgRating = sumRating / this.props.trainer.reviews.length;
            let finalRating = avgRating.toFixed(2);
            const reviews = this.props.trainer.reviews.map((review) => (
                <ul>
                    <ul>{review.body}</ul>
                    <ul>{review.workoutDate}</ul>
                    <ul>{review.rating}</ul>
                </ul>
            ))
            const hasLocation = this.props.trainer.hasLocation ? "YES" : "NO"
            const canTravel = this.props.trainer.canTravel ? "YES" : "NO"
            return (
                <div className="holder">
                    <div className="trainer-intro-container">
                        <div className="trainer-profile-box">
                            <div className="trainer-pro-cont">
                                <div className="trainer-pro-l">
                                    <img className="trainer-prof-pic"src={this.props.trainer.imageUrl} />
                                </div>
                                <div className="trainer-pro-r">
                                    <div className="trainer-profile">
                                        <div className="trainer-profile-top">
                                            <p><strong>Name:</strong> {this.props.trainer.firstName} {this.props.trainer.lastName}</p>
                                            <p className="show-page-bio"><i>{this.props.trainer.bio}</i></p>
                                        </div>
                                        <div className="ratings-box">
                                            <img src={goldBadge}/>
                                            <div className="rating-image-box">
                                                <p className="avg-score">Avg Score:</p>
                                                <p className="avg-score-trainer">{finalRating}</p>
                                            </div>   
                                        </div>
                                        {/* <p>{this.props.trainer.dailyAvailability}</p> */}
                                        <p><strong>Experience Level:</strong> {this.props.trainer.experienceLevel}</p>
                                        <div >
                                            <div className="trainer-specialties"><strong>Specialties:</strong>
                                       &nbsp;{this.props.trainer.specialties.join(", ")}</div>
                                        </div>
                                        <Link className="trainer-review-button" to={`/trainers/${this.props.trainer._id}/reviews/create`}><button>LEAVE A REVIEW</button></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="trainer-revs">
                                <div className="revs-head">
                                    <h2>CLIENT REVIEWS</h2>
                                </div>
                                <div className="review-index-container"><ReviewIndexContainer trainer={this.props.trainer}/></div>
                            </div>
                        </div>
                        <div className="trainer-workout-container trainer-booleans">
                            <h2 className="trainer-booleans-title">Workout Options</h2>
                            <p className="trainer-booleans-option">Workout Location Available? {hasLocation}</p>
                            <p className="trainer-booleans-option">Trainer Available At Your Location? {canTravel}</p>
                            <Link className="trainer-book-workout" to={{pathname: `/trainers/${this.props.trainer._id}/workout`, currentUser: this.props.currentUser}}>
                                <button>BOOK A WORKOUT!</button>
                                </Link>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default TrainerShow