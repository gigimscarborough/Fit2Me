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
        if (Object.values(this.props.search).length !== 0){
            // debugger
            window.localStorage.setItem("savedState", JSON.stringify(this.props.search))
            this.props.searchTrainers(this.props.search)
        }else{
            // debugger
            const search = JSON.parse(window.localStorage.getItem("savedState") )
            this.props.searchTrainers(search)
        }
    }

    sumRating(reviews){
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
                            <div><i className="fa fa-spinner fa-spin fa-fw" aria-hidden="true"></i> Loading...</div>                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        sessionStorage.setItem("trainer", this.props.trainers)

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
                    
                        <span>
                            {/* {this.sumRating(trainer.reviews) > 0 && this.sumRating(trainer.reviews) <= 0.5 ? hStar 
                            : this.sumRating(trainer.reviews) > 0.5 && this.sumRating(trainer.reviews) <= 1 ? oneStar
                            : this.sumRating(trainer.reviews) > 1 && this.sumRating(trainer.reviews) <= 1.5 ? oneStarH
                            : this.sumRating(trainer.reviews) > 1.5 && this.sumRating(trainer.reviews) <= 2 ? twoStar
                            : this.sumRating(trainer.reviews) > 2 && this.sumRating(trainer.reviews) <= 2.5 ? twoStarH
                            : this.sumRating(trainer.reviews) > 2.5 && this.sumRating(trainer.reviews) <= 3 ? threeStar
                            : this.sumRating(trainer.reviews) > 3 && this.sumRating(trainer.reviews) <= 3.5 ? threeStarH
                            : this.sumRating(trainer.reviews) > 3.5 && this.sumRating(trainer.reviews) <= 4 ? fourStar
                            : this.sumRating(trainer.reviews) > 4 && this.sumRating(trainer.reviews) <= 4.5 ? fourStarH
                            : this.sumRating(trainer.reviews) > 4.5 && this.sumRating(trainer.reviews) <= 5 ? fiveStar: null}
                             */}
                    
                        Rating: {this.sumRating(trainer.reviews)}</span>
                        
                    </div>

                </div>

            </div>
        
        )

        const hStar = (<div >
            <i className="fas fa-star-half str-h"></i>
            <i className="fas fa-star-half str-h-g"></i>
            <i className="fas fa-star str2-g"></i>
            <i className="fas fa-star str2-g"></i>
            <i className="fas fa-star str2-g"></i>
            <i className="fas fa-star str2-g"></i>
        </div>)
        const oneStar = (<div >
            <i className="fas fa-star str2"></i>
            <i className="fas fa-star str2-g"></i>
            <i className="fas fa-star str2-g"></i>
            <i className="fas fa-star str2-g"></i>
            <i className="fas fa-star str2-g"></i>
            </div>)
        const oneStarH = (<div >
            <i className="fas fa-star str2"></i>
            <i className="fas fa-star-half str-h"></i>
            <i className="fas fa-star-half str-h-g"></i>
            <i className="fas fa-star str2-g"></i>
            <i className="fas fa-star str2-g"></i>
            <i className="fas fa-star str2-g"></i>
        </div>)
        const twoStar = (<div>
            <i className="fas fa-star str2"></i>
            <i className="fas fa-star str2"></i>
            <i className="fas fa-star str2-g"></i>
            <i className="fas fa-star str2-g"></i>
            <i className="fas fa-star str2-g"></i>
        </div>)
        const twoStarH = (<div >
            <i className="fas fa-star str2"></i>
            <i className="fas fa-star str2"></i>
            <i className="fas fa-star-half str-h"></i>
            <i className="fas fa-star-half str-h-g"></i>
            <i className="fas fa-star str2-g"></i>
            <i className="fas fa-star str2-g"></i>
        </div>)
        const threeStar = (<div>
            <i className="fas fa-star str"></i>
            <i className="fas fa-star str"></i>
            <i className="fas fa-star str"></i>
            <i className="fas fa-star str-g"></i>
            <i className="fas fa-star str-g"></i>
            </div>)
        const threeStarH = (<div >
            <i className="fas fa-star str2"></i>
            <i className="fas fa-star str2"></i>
            <i className="fas fa-star str2"></i>
            <i className="fas fa-star-half str-h"></i>
            <i className="fas fa-star-half str-h-g"></i>
            <i className="fas fa-star str2-g"></i>
        </div>)
        const fourStar = (<div>
            <i className="fas fa-star str2"></i>
            <i className="fas fa-star str2"></i>
            <i className="fas fa-star str2"></i>
            <i className="fas fa-star str2"></i>
            <i className="fas fa-star str2-g"></i>
            </div>)
        const fourStarH = (<div >
            <i className="fas fa-star str2"></i>
            <i className="fas fa-star str2"></i>
            <i className="fas fa-star str2"></i>
            <i className="fas fa-star str2"></i>
            <i className="fas fa-star-half str-h"></i>
            <i className="fas fa-star-half str-h-g"></i>
        </div>)
        const fiveStar = (<div>
            <i className="fas fa-star str2"></i>
            <i className="fas fa-star str2"></i>
            <i className="fas fa-star str2"></i>
            <i className="fas fa-star str2"></i>
            <i className="fas fa-star str2"></i>
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