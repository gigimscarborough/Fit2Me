import React from 'react';
import { Link } from 'react-router-dom';
import './trainer_show.scss';

class TrainerShow extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        debugger
        this.props.getTrainer(this.props.trainerId)
    }

    render(){   
        debugger
        if (!this.props.trainer) {
            return (
                <div>Loading..</div>
            )
        } else {
            const hasLocation = this.props.trainer.hasLocation ? "YES" : "NO"
            const canTravel = this.props.trainer.canTravel ? "YES" : "NO"
            return (
                <div>
                    <div className="trainer-intro-container">
                        <div className="trainer-profile-box">
                            <img src={this.props.trainer.imageUrl} />
                            <div className="trainer-profile">
                                <div className="trainer-profile-top">
                                    <p>Name: {this.props.trainer.firstName} {this.props.trainer.lastName}</p>
                                    <Link className="trainer-review-button"to="">LEAVE A REVIEW</Link>
                                </div>
                                <p>THIS IS WHERE THE AVG RATING GOES??</p>
                                <p>Experience Level: {this.props.trainer.experienceLevel}</p>
                                <div >
                                    <div className="trainer-specialties">Specialties:
                                      {this.props.trainer.specialties.map((specialty, i) => (
                                        <span key={i} className="trainer-specialty">{specialty},</span>
                                    ))}</div>
                                </div>
                                <div className="trainer-workout-container">
                                    <div className="trainer-booleans">
                                        <p className="trainer-booleans-title">Workout Options</p>
                                        <p className="trainer-booleans-option">Workout Location Provided? {hasLocation}</p>
                                        <p className="trainer-booleans-option">Can Trainer Come to You? {canTravel}</p>
                                    </div>
                                    <Link className="trainer-book-workout" to="">BOOK A WORKOUT</Link>
                                </div>
                                
                                
                            </div>
                        </div>
                    
                    </div>
                    <div className="trainer-review-container">
                        <h4 className="recommended-reviews">Recommended Reviews</h4>
                        {/* <ReviewIndexContainer trainer={this.props.trainer} /> */}
                    </div>
                    <div>

                    </div>
                </div>
            )
        }
    }
}

export default TrainerShow