import React from 'react';

const ReviewShow = props => {

    let date = new Date(props.review.created_at);
    const realDate = date.getMonth() + "1" + "/" + date.getDate() + "/" + date.getFullYear();
    return (
        <div>
            <div>
                <div className="profile-box">
                    <img src="" alt=""/>
                    <div className="user-info">
                        {/* <li>{props.review.user.fname} {props.review.user.lname.slice(0,1)}</li>
                        <li>{props.review.user.zip_code}</li> */}
                    </div>
                </div>
                <div className="rating-date-box">
                    <span className="review-rating">
                        {/* <img src={ratingStar} alt=""/> */}
                    </span>
                    <span className="review-created-time">{realDate}</span>
                </div>
                <div className="review-main-box">
                    {props.review.body}
                </div>
            </div>
        </div>
    )
}

export default ReviewShow