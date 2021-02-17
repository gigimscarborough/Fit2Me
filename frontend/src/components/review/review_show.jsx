import React from 'react';
// import oneStar from '../../assets/images/rating_star/blue-1-star.png';
// import twoStar from '../../assets/images/rating_star/blue-2-star.png';
// import threeStar from '../../assets/images/rating_star/blue-3-star.png';
// import fourStar from '../../assets/images/rating_star/blue-4-star.png';
// import fiveStar from '../../assets/images/rating_star/blue-5-star.png';
import './review_show.scss'

class ReviewShow extends React.Component {
    constructor(props){
        super(props)
        this.oneStar = (<div ><i className="fas fa-star str"></i><i className="fas fa-star str-g"></i><i className="fas fa-star str-g"></i><i className="fas fa-star str-g"></i><i className="fas fa-star str-g"></i></div>)
        this.twoStar = (<div>
                        <i className="fas fa-star str"></i>
                        <i className="fas fa-star str"></i>
                        <i className="fas fa-star str-g"></i>
                        <i className="fas fa-star str-g"></i>
                        <i className="fas fa-star str-g"></i>
                    </div>);
        this.threeStar = (<div>
                        <i className="fas fa-star str"></i>
                        <i className="fas fa-star str"></i>
                        <i className="fas fa-star str"></i>
                        <i className="fas fa-star str-g"></i>
                        <i className="fas fa-star str-g"></i>
                    </div>);
        this.fourStar = (<div>
                        <i className="fas fa-star str"></i>
                        <i className="fas fa-star str"></i>
                        <i className="fas fa-star str"></i>
                        <i className="fas fa-star str"></i>
                        <i className="fas fa-star str-g"></i>
                    </div>);
        this.fiveStar = (<div>
                        <i className="fas fa-star str"></i>
                        <i className="fas fa-star str"></i>
                        <i className="fas fa-star str"></i>
                        <i className="fas fa-star str"></i>
                        <i className="fas fa-star str"></i>
                    </div>);
        this.ratingStar = "";
        if (this.props.review.rating === 1) {
            this.ratingStar = this.oneStar
        } else if (this.props.review.rating === 2) {
            this.ratingStar = this.twoStar; 
        } else if (this.props.review.rating === 3) {
            this.ratingStar = this.threeStar;
        } else if (this.props.review.rating === 4) {
            this.ratingStar = this.fourStar;
        } else {
            this.ratingStar = this.fiveStar;
        }
        this.date = new Date(this.props.review.createdAt);
        this.deleteModal = this.deleteModal.bind(this);
    }

    
    deleteModal(){
        debugger
        // e.preventDefault();
        // this.props.history("/search/results")
        const deleteBtn = document.getElementById("delete");
        if (deleteBtn) {
            deleteBtn.addEventListener("click", (e) => {
                deleteBtn.style.display = "none";
            })
        }
        return (
            deleteBtn.style.display = "block"
            // window.location.reload()
        )
    }

    editandDelete(){
        debugger
        if (this.props.review.userId === this.props.currentUser._id) {
            return (
                <div className="edit-delete-btn">
                    <p value="update" onClick={this.handleUpdate}>Edit</p>
                    <p className="delete-btn" onClick={() => this.deleteModal()}>Delete</p>
                    {/* <p value="delete" onClick={this.handleDelete}>Delete</p>      */}
                     <div id="delete" className="delete-background">
                        <div className="delete-container-top" onClick={e => e.stopPropagation()}>
                            <div className="delete-text">
                                <p>Are you sure you want to delete the review?</p>
                                <button onClick={() => this.props.deleteReview(this.props.review._id).then(() => window.location.reload())}>Yes</button>
                                <button onClick={() => window.location.reload()}>No</button>
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <p>Fail</p>
            )
        }
    }

    getDate(){
        return(
            `${parseInt(this.date.getMonth()) + 1}` + "/" + this.date.getDate() + "/" + this.date.getFullYear()
        )
    }

    render() {
        const deleteBtn = document.getElementById("delete");
        if (deleteBtn) {
            deleteBtn.addEventListener("click", (e) => {
                deleteBtn.style.display = "none";
            })
        }
        return (
            <div>
                <div className="review-box">
                    <div className="review-left">
                        <div className="rating-top">
                            <div>
                                <span className="review-created-time">{this.getDate()} </span>
                                <span className="review-upload">upload date</span>
                            </div>
                            <div className="rating-date-box">
                                {/* <img className ="rating-star" src={ratingStar} alt=""/> */}
                                {this.ratingStar}
                            </div>
                        </div>
                        <div className="workout-date">
                            <p className="workout-date-date">Last Workout Date: </p>
                            <p>{this.props.review.workoutDate}</p>
                        </div>

                    </div>
                    
                    
                    <div className="review-right">
                        {this.editandDelete()}
                        <div className="review-body">{this.props.review.body}</div>                       
                    </div>
                </div>
            </div>
        )
    }
}

// const ReviewShow = props => {
//     const oneStar = (<div ><i className="fas fa-star str"></i><i className="fas fa-star str-g"></i><i className="fas fa-star str-g"></i><i className="fas fa-star str-g"></i><i className="fas fa-star str-g"></i></div>)
//     const twoStar = (<div>
//                         <i className="fas fa-star str"></i>
//                         <i className="fas fa-star str"></i>
//                         <i className="fas fa-star str-g"></i>
//                         <i className="fas fa-star str-g"></i>
//                         <i className="fas fa-star str-g"></i>
//                     </div>)
//     const threeStar = (<div><i className="fas fa-star str"></i><i className="fas fa-star str"></i><i className="fas fa-star str"></i><i className="fas fa-star str-g"></i><i className="fas fa-star str-g"></i></div>)
//     const fourStar = (<div><i className="fas fa-star str"></i><i className="fas fa-star str"></i><i className="fas fa-star str"></i><i className="fas fa-star str"></i><i className="fas fa-star str-g"></i></div>)
//     const fiveStar = (<div><i className="fas fa-star str"></i><i className="fas fa-star str"></i><i className="fas fa-star str"></i><i className="fas fa-star str"></i><i className="fas fa-star str"></i></div>)
    
    
//     let ratingStar = "";
//     if (props.review.rating === 1) {
//         ratingStar = oneStar
//     } else if (props.review.rating === 2) {
//         ratingStar = twoStar; 
//     } else if (props.review.rating === 3) {
//         ratingStar = threeStar;
//     } else if (props.review.rating === 4) {
//         ratingStar = fourStar;
//     } else {
//         ratingStar = fiveStar;
//     }
//     let editandDelete = "";
//     if (props.review.userId === props.currentUser._id) {
//         editandDelete = (
//             <div>
//                 <p></p>
//                 <p>Delete</p>
//             </div>
//         )
//     } else {
//         editandDelete = (
//             <p>FAIL</p>
//         )
//     }
    
//     debugger
//     let date = new Date(props.review.createdAt);
//     const realDate = `${parseInt(date.getMonth()) + 1}` + "/" + date.getDate() + "/" + date.getFullYear();
//     return (
//         <div>
//             <div className="review-box">
//                 <div className="review-left">
//                     <div className="rating-top">
//                         <div>
//                             <span className="review-created-time">{realDate} </span>
//                             <span className="review-upload">upload date</span>
//                         </div>
//                         <div className="rating-date-box">
//                             {/* <img className ="rating-star" src={ratingStar} alt=""/> */}
//                             {ratingStar}
//                         </div>
//                     </div>
//                     <div className="workout-date">
//                         <p className="workout-date-date">Last Workout Date: </p>
//                         <p>{props.review.workoutDate}</p>
//                     </div>
//                     <div className="edit-delete-btn">
//                         {editandDelete}
//                     </div>

//                 </div>
                
                
//                 <div className="review-right">
//                     <p className="message-text">Message:</p>
//                     <div className="review-body">{props.review.body}</div>
                    
//                 </div>
//             </div>
//         </div>
//     )
// }

export default ReviewShow