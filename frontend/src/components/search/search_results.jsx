import React from 'react'
import { Link } from 'react-router-dom'
import './search.scss'

class SearchResults extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            trainers: this.props.trainers
        }

    }

    componentDidMount() {
    

    }


    sumRating(reviews){
        // debugger
        let sumRating = 0;
        for (let i = 0; i < reviews.length; i++) {
            sumRating += reviews[i].rating;
        }
        let avgRating = sumRating / reviews.length;

        return avgRating.toFixed(2);
    }


    render() {
        if (Object.keys(this.props.trainers).length === 0) {
            return(
                <div className="holder">
                    <div className="results-container">
                        <div className="trainer-content">
                        <div className="t-content-header">
                            <h1>TRAINER SEARCH</h1>
                            <div className="no-search-results">
                                <h2>Your Search Did Not Return Any Results</h2>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        sessionStorage.setItem("trainer", this.props.trainers)
        debugger
        const trainers = this.props.trainers.map(trainer =>
            
            <div className="trainers-container">
                <div className="trainer-div" >
                    <div className="trainer-l">
                        <Link to={`/trainers/${trainer._id}`}>
                            <img className="trainer-image" src={trainer.imageUrl} />
                        </Link>
                        <Link className="trainer-link" to={`/trainers/${trainer._id}`}>
                            View Profile
                        </Link>
                    </div>
                    <div className="trainer-r">
                        <Link to={`/trainers/${trainer._id}`}>{trainer.firstName} {trainer.lastName}</Link>
                        <p><i>"{trainer.bio}"</i></p>
                    
                        {/* <span>{this.sumRating(trainer.reviews)}</span>
                        console.log(trainer.reviews)
                        console.log(trainer) */}
                    </div>

                </div>

            </div>
        
        )

        const hStar = (<div >
            <i class="fas fa-star-half str-h"></i>
            <i class="fas fa-star-half str-h-g"></i>
            <i class="fas fa-star str2-g"></i>
            <i class="fas fa-star str2-g"></i>
            <i class="fas fa-star str2-g"></i>
            <i class="fas fa-star str2-g"></i>
        </div>)
        const oneStar = (<div >
            <i class="fas fa-star str2"></i>
            <i class="fas fa-star str2-g"></i>
            <i class="fas fa-star str2-g"></i>
            <i class="fas fa-star str2-g"></i>
            <i class="fas fa-star str2-g"></i>
            </div>)
        const oneStarH = (<div >
            <i class="fas fa-star str2"></i>
            <i class="fas fa-star-half str-h"></i>
            <i class="fas fa-star-half str-h-g"></i>
            <i class="fas fa-star str2-g"></i>
            <i class="fas fa-star str2-g"></i>
            <i class="fas fa-star str2-g"></i>
        </div>)
        const twoStar = (<div>
            <i class="fas fa-star str2"></i>
            <i class="fas fa-star str2"></i>
            <i class="fas fa-star str2-g"></i>
            <i class="fas fa-star str2-g"></i>
            <i class="fas fa-star str2-g"></i>
        </div>)
        const twoStarH = (<div >
            <i class="fas fa-star str2"></i>
            <i class="fas fa-star str2"></i>
            <i class="fas fa-star-half str-h"></i>
            <i class="fas fa-star-half str-h-g"></i>
            <i class="fas fa-star str2-g"></i>
            <i class="fas fa-star str2-g"></i>
        </div>)
        const threeStar = (<div>
            <i class="fas fa-star str"></i>
            <i class="fas fa-star str"></i>
            <i class="fas fa-star str"></i>
            <i class="fas fa-star str-g"></i>
            <i class="fas fa-star str-g"></i>
            </div>)
        const threeStarH = (<div >
            <i class="fas fa-star str2"></i>
            <i class="fas fa-star str2"></i>
            <i class="fas fa-star str2"></i>
            <i class="fas fa-star-half str-h"></i>
            <i class="fas fa-star-half str-h-g"></i>
            <i class="fas fa-star str2-g"></i>
        </div>)
        const fourStar = (<div>
            <i class="fas fa-star str2"></i>
            <i class="fas fa-star str2"></i>
            <i class="fas fa-star str2"></i>
            <i class="fas fa-star str2"></i>
            <i class="fas fa-star str2-g"></i>
            </div>)
        const fourStarH = (<div >
            <i class="fas fa-star str2"></i>
            <i class="fas fa-star str2"></i>
            <i class="fas fa-star str2"></i>
            <i class="fas fa-star str2"></i>
            <i class="fas fa-star-half str-h"></i>
            <i class="fas fa-star-half str-h-g"></i>
        </div>)
        const fiveStar = (<div>
            <i class="fas fa-star str2"></i>
            <i class="fas fa-star str2"></i>
            <i class="fas fa-star str2"></i>
            <i class="fas fa-star str2"></i>
            <i class="fas fa-star str2"></i>
            </div>)


        return (
            <div className="holder">
                <div className="results-container">
                    <div className="trainer-content">
                    <div className="t-content-header">
                        <h1>TRAINER SEARCH</h1>
                        <div className="matches">
                                <p>You matched with {this.props.trainers.length} {this.props.trainers.length <= 1 ? "trainer" : "trainers"} in your area</p>
                        <Link to="/search">New Search</Link>
                        </div>
                        </div>
                    {trainers}
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchResults;