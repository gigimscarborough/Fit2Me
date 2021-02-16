import React from 'react';
// import oneStar from '../../assets/images/rating_star/blue-1-star.png';
// import twoStar from '../../assets/images/rating_star/blue-2-star.png';
// import threeStar from '../../assets/images/rating_star/blue-3-star.png';
// import fourStar from '../../assets/images/rating_star/blue-4-star.png';
// import fiveStar from '../../assets/images/rating_star/blue-5-star.png';
import './review_show.scss'

const ReviewShow = props => {
    let oneStar = (<div ><i className="fas fa-star str"></i><i className="fas fa-star str-g"></i><i className="fas fa-star str-g"></i><i className="fas fa-star str-g"></i><i className="fas fa-star str-g"></i></div>)
    let twoStar = (<div>
                        <i className="fas fa-star str"></i>
                        <i className="fas fa-star str"></i>
                        <i className="fas fa-star str-g"></i>
                        <i className="fas fa-star str-g"></i>
                        <i className="fas fa-star str-g"></i>
                    </div>)
    let threeStar = (<div><i className="fas fa-star str"></i><i className="fas fa-star str"></i><i className="fas fa-star str"></i><i className="fas fa-star str-g"></i><i className="fas fa-star str-g"></i></div>)
    let fourStar = (<div><i className="fas fa-star str"></i><i className="fas fa-star str"></i><i className="fas fa-star str"></i><i className="fas fa-star str"></i><i className="fas fa-star str-g"></i></div>)
    let fiveStar = (<div><i className="fas fa-star str"></i><i className="fas fa-star str"></i><i className="fas fa-star str"></i><i className="fas fa-star str"></i><i className="fas fa-star str"></i></div>)
    
    
    let ratingStar = "";
    if (props.review.rating === 1) {
        ratingStar = oneStar
    } else if (props.review.rating === 2) {
        ratingStar = twoStar; 
    } else if (props.review.rating === 3) {
        ratingStar = threeStar;
    } else if (props.review.rating === 4) {
        ratingStar = fourStar;
    } else {
        ratingStar = fiveStar;
    }
    let date = new Date(props.review.createdAt);
    const realDate = `${parseInt(date.getMonth()) + 1}` + "/" + date.getDate() + "/" + date.getFullYear();
    return (
        <div>
            <div className="review-box">
                <div className="review-left">
                    <div className="rating-top">
                        <div>
                            <span className="review-created-time">{realDate} </span>
                            <span className="review-upload">upload date</span>
                        </div>
                        <div className="rating-date-box">
                            {/* <img className ="rating-star" src={ratingStar} alt=""/> */}
                            {ratingStar}
                        </div>
                    </div>
                    <div className="workout-date">
                        <p className="workout-date-date">Last Workout Date: </p>
                        <p>{props.review.workoutDate}</p>
                    </div>

                </div>
                
                
                <div className="review-right">
                    <p className="message-text">Message:</p>
                    <div className="review-body">{props.review.body}</div>
                    
                </div>
            </div>
        </div>
    )
}

export default ReviewShow