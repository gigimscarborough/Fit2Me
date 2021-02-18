import React from 'react';

// import oneStar from '../../assets/images/rating_star/blue-1-star.png';
// import twoStar from '../../assets/images/rating_star/blue-2-star.png';
// import threeStar from '../../assets/images/rating_star/blue-3-star.png';
// import fourStar from '../../assets/images/rating_star/blue-4-star.png';
// import fiveStar from '../../assets/images/rating_star/blue-5-star.png';
import './review_show.scss'

class ReviewShow extends React.Component {
    constructor(props){
        // 
        super(props);
        this.state = {
            body: this.props.review.body,
            rating: this.props.review.rating,
            userId: this.props.user_id,
            trainerId: this.props.trainer.id,
            workoutDate: this.props.review.workoutDate,
            update: false
        }
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
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        let form = {
            _id: this.props.review._id,
            body: this.state.body,
            rating: parseInt(this.state.rating),
            userId: this.state.userId,
            trainerId: this.state.trainerId,
            workoutDate: this.state.workoutDate
        } 
        this.props.updateReview(form)
        this.setState({update: true});
            // .then(() => window.location.reload())
    }
    componentDidUpdate(prevProps) {
        if (this.state.update) {
            this.props.getTrainer(this.props.trainer._id);
            this.setState({update: false});
        }   
    }
    handleChange(type){
        
        return(e) => {
            
            return this.setState({[type]: e.currentTarget.value})
        }
    }


    deleteModal(id){
        
        // e.preventDefault();
        // this.props.history("/search/results")
        const deleteBtn = document.getElementById(`delete${id}`);
        // if (deleteBtn) {
        //     deleteBtn.addEventListener("click", (e) => {
        //         deleteBtn.style.display = "none";
        //     })
        // }
        console.log(this.props.review)
        return (
            deleteBtn.style.display = "block"
            // window.location.reload()
        )
    }

    updateModal(id){
        const updateBtn = document.getElementById(`update${id}`);
        return (
            updateBtn.style.display = "block"
        )
    }
    removeModal(e) {
        // const updateBtn = document.getElementById("update");
        return (
            e.currentTarget.style.display = "none"
        )
    }
    
    handleDelete() {
        this.props.deleteReview(this.props.review._id)
        this.setState({update: true})

    }

    editandDelete(){
        if (this.props.currentUser !== null && this.props.currentUser !== undefined) {
            
            if (this.props.review.userId === this.props.currentUser._id) {
                return (
                    <div className="edit-delete-btn">
                        <p className="update-btn" onClick={() => this.updateModal(this.props.review._id)}>Update</p>
                        <div id={`update${this.props.review._id}`} className="update-background" onClick={this.removeModal}>
                            <div className="update-container-top" >
                                <form className="update-rev-form" onSubmit={this.handleSubmit}>
                                    <div className="review-form-box"onClick={e => e.stopPropagation()}>
                                        <div className="review-form-texts">
                                        <img className="review-trainer-pic" src={this.props.trainer.imageUrl} alt=""/>
                                            <span className="review-form-trainer-name">{this.props.trainer.firstName} {this.props.trainer.lastName}</span>
                                        </div>
                                        <div className="review-content-box">
                                            <div className="review-content">
                                                <p className="select-rating-text">How would you rate your workout with them? (must choose one)</p>
                                                <div className="radio-button-container">
                                                    <span className="rating-radio-button">
                                                        <input className="radio-button" type="radio" name="trainer-rating" id="1" value={1} checked={this.state.rating === 1 ? 1 : null} onChange={this.handleChange('rating')}/>
                                                        <label htmlFor="1">{1}</label>
                                                    </span>
                                                    <span className="rating-radio-button">
                                                        <input className="radio-button"type="radio" name="trainer-rating" id="2" value={2} checked={this.state.rating === 2 ? 2 : null} onChange={this.handleChange('rating')} />
                                                        <label htmlFor="2">{2}</label>
                                                    </span>
                                                    <span className="rating-radio-button">
                                                        <input className="radio-button"type="radio" name="trainer-rating" id="3" value={3} checked={this.state.rating === 3 ? 3 : null} onChange={this.handleChange('rating')}/>
                                                        <label htmlFor="3">{3}</label>
                                                    </span>
                                                    <span className="rating-radio-button">
                                                        <input className="radio-button"type="radio" name="trainer-rating" id="4" value={4} checked={this.state.rating === 4 ? 4 : null} onChange={this.handleChange('rating')}/>
                                                        <label htmlFor="4">{4}</label>
                                                    </span>
                                                    <span className="rating-radio-button">
                                                        <input className="radio-button"type="radio" name="trainer-rating" id="5" value={5} checked={this.state.rating === 5 ? 5 : null} onChange={this.handleChange('rating')}/>
                                                        <label htmlFor="5">{5}</label>
                                                    </span>
                                                    {/* checked={this.state.rating === 5}  */}
                                                </div>
                                            </div>
                                            <div className="rating-workout-date">
                                                <span className="last-workout-date">last workout date </span>
                                                <input className="rating-workout-d" type="date" value={this.state.workoutDate} onChange={this.handleChange("workoutDate")}/>
                                            </div>
                                            <h3 className="review-body">WRITE YOUR REVIEW</h3>                                   
                                            <textarea className="text-area-text-update"value={this.state.body} onChange={this.handleChange("body")} 
                                            placeholder="Your Review Goes Here!"></textarea>
                                        </div>
                                    </div>
                                    <button className="review-post-button">Update Review</button>
                                </form>
                            </div>
                        </div>
                        <p className="delete-btn" onClick={() => this.deleteModal(this.props.review._id)}>Delete</p>
                        {/* <p value="delete" onClick={this.handleDelete}>Delete</p>      */}
                        <div id={`delete${this.props.review._id}`} className="delete-background" onClick={this.removeModal}>
                            <div className="delete-container-top"onClick={e => e.stopPropagation()} >
                                <div className="delete-text">
                                    <p className="delete-text-q">Are you sure you want to delete the review?</p>
                                    <div className="buttons-box">
                                        <button className="del-yes"onClick={this.handleDelete}>Yes</button>
                                        <button className="del-no"onClick={() => window.location.reload()}>No</button>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                )
            } else {
                return (
                    <div className="invisible">
                        Hey
                    </div>
                )
                
            }
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
                                <p className="review-upload">upload date</p>
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
    
//     
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