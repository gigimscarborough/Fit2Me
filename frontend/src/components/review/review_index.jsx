import React from 'react';
import ReviewShow from './review_show'
import './review_show.scss'

class ReviewIndex extends React.Component {
    // componentDidMount(){
    //     this.props.fetchReviews(this.props.trainer['_id'])
    //         .catch(err => console.log(err));
    // }

    render() {
        const reviewsList = Object.values(this.props.trainer.reviews).map((review, i) => {
            // console.log(review)
            debugger
            return (
                <div key={i}>
                    {/* passing in updateReview and deleteReview as props */}
                    <ReviewShow trainer={this.props.trainer} review={review} currentUser={this.props.currentUser} updateReview={this.props.updateReview} deleteReview={this.props.deleteReview} key={i}/>
                </div>
            )
        })

        return(
            <div>
                <ul className="review-boxes-container">
                    {reviewsList}
                </ul>
            </div>
        )
    }
}

export default ReviewIndex;