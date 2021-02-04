import React from 'react';
import { Link } from 'react-router-dom';
import './trainer_show.scss';
import ReviewIndexContainer from '../review/review_index_container'

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
            const hasLocation = this.props.trainer.hasLocation ? "YES" : "NO"
            const canTravel = this.props.trainer.canTravel ? "YES" : "NO"
            return (
                <div className="holder">
                    <div className="trainer-intro-container">
                        <div className="trainer-profile-box">
                            <div className="trainer-pro-cont">
                                <div className="trainer-pro-l">
                                    <img src={this.props.trainer.imageUrl} />
                                </div>
                                <div className="trainer-pro-r">
                                    <div className="trainer-profile">
                                        <div className="trainer-profile-top">
                                            <p><strong>Name:</strong> {this.props.trainer.firstName} {this.props.trainer.lastName}</p>
                                        </div>
                                        <p>THIS IS WHERE THE AVG RATING GOES??</p>
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
                    {/* <div className="trainer-review-container">
                        <h4 className="recommended-reviews">Recommended Reviews</h4>
                        {/* <ReviewIndexContainer trainer={this.props.trainer} /> */}
                    {/* </div>  */}
                </div>
            )
        }
    }
}

export default TrainerShow