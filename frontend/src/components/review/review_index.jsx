import React from 'react';
import ReviewShow from './review_show'
import './review_show.scss'

class ReviewIndex extends React.Component {
    componentDidMount(){
        this.props.fetchReviews(this.props.trainer['_id'])
    }

    render() {
        return(
            <div>
                <ul className="review-boxes-container">
                    {Object.values(this.props.trainer.reviews).map((review, i) => (
                        <div key={i}>
                            <ReviewShow review={review} currentUser={this.props.currentUser}/>
                        </div>
                    ))}
                </ul>
            </div>
        )
    }
}

export default ReviewIndex;