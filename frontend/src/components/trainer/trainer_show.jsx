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
        // this.props.fetchUser(this.props.currentUserId)
    }

    render() {
        
        if (!this.props.trainer) {
            return (
                <div>Loading..</div>
            )
        } else {
            let finalRating = 0;
            if (this.props.trainer.reviews.length === 0) {
                finalRating = 5.00.toFixed(2);
            } else {
                let sumRating = 0;
                let avgRating = 0;
                for (let i = 0; i < this.props.trainer.reviews.length; i++) {
                    
                    sumRating += this.props.trainer.reviews[i].rating;
                    
                }
                avgRating = sumRating / this.props.trainer.reviews.length;
                finalRating = avgRating.toFixed(2);               
            }
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
                                        <p><strong>Daily Availability: </strong>{this.props.trainer.dailyAvailability.split(", ").map(available => {
                                            const day = available.split('-')[0]
                                            let firstTime = available.split('-')[1].split(' to ')[0]
                                            let secondTime = available.split('-')[1].split(' to ')[1]
                                            let newFirstTime = firstTime.split(':').map(time => {
                                                if (parseInt(time) > 12) {
                                                    return parseInt(time) - 12
                                                } else {
                                                    return time;
                                                    };
                                            }).join(':')
                                            let newSecondTime = secondTime.split(':').map(time => {
                                                if (parseInt(time) > 12) {
                                                    return parseInt(time) - 12;
                                                } else {
                                                    return time;
                                                };
                                            }).join(':')
                                            if (firstTime.split(':')[0] > 12) {
                                                newFirstTime = newFirstTime + ' PM'
                                            } else {
                                                newFirstTime = newFirstTime + ' AM'
                                            }
                                            if (secondTime.split(':')[0] > 12) {
                                                newSecondTime = newSecondTime + ' PM'
                                            } else {
                                                newSecondTime = newSecondTime + ' AM'
                                            }
                                            return (
                                                <p className="available-times">{day} - {newFirstTime} to {newSecondTime}</p>
                                            )

                                        })}</p>
                                        <Link className="trainer-review-button" to={`/trainers/${this.props.trainer._id}/reviews/create`}><button className="leave-review-button">LEAVE A REVIEW</button></Link>
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