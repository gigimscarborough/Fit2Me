import React from 'react';
import ReviewShow from './review_show'

class ReviewIndex extends React.Component {
    componentDidMount(){
        this.props.fetchReviews(this.props.trainer.data['_id'])
    }

    componentDidUpdate(){
        if (this.props.trainer.reviews.length !== Object.values(this.props.reviews.data).length) {
            this.props.fetchReviews(this.props.trainer.data['_id'])
        }
    }

    render() {
        return(
            <div>
                <ul className="review-boxes-container">
                    {Object.values(this.props.reviews).map(review => (
                        <div key={review.id}>
                            <ReviewShow review={review}/>
                        </div>
                    ))}
                </ul>
            </div>
        )
    }
}

export default ReviewIndex;