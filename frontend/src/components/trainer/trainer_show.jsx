import React from 'react';
import { Link } from 'react-router-dom';
import './trainer_show.scss';

class TrainerShow extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.getTrainer(this.props.trainer.id)
    }

    render(){   
        return(
            <div>
                <div className="trainer-intro-container">
                    <div className="trainer-profile-box">
                        <img src={this.props.trainer.imageUrl} />
                        <div className="trainer-profile">
                            <p>{this.props.trainer.firstName} {this.props.trainer.lastName}</p>
                            <p>THIS IS WHERE THE AVG RATING GOES??</p>
                            <div className="trainer-specialties">
                                {this.props.trainer.specialties.map((specialty, i) => (
                                    <ul key={i} className="trainer-specialty">{specialty}</ul>
                                ))}
                            </div>
                            
                        </div>
                    </div>
                    
                </div>
                <div className="">

                </div>
                <div>

                </div>
            </div>
        )
    }
}

export default TrainerShow